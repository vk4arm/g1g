#!/usr/bin/env python3
"""
Tag the last 2 slides (excluding choice-only branch slides like NEW_TRAIN, NEW_AMBUSH etc.)
of each part in each language with music: "metal_garden" in i18n_story.js.

Strategy: parse the JS as text, find language blocks, then find part arrays,
then count backwards and patch music fields.
"""
import re

SRC = '/Users/victor/GODOT/g1/html/i18n_story.js'

with open(SRC, 'r', encoding='utf-8') as f:
    content = f.read()

LANGS = ['ru', 'en', 'de', 'es', 'zh', 'fa']
PARTS = ['part1', 'part2', 'part3']

# We'll collect all (start_pos, end_pos, music_value) for music fields we want to change.
# Then we'll apply changes from the end backwards to preserve positions.

changes = []  # list of (start, end, new_text)

def find_lang_block_range(content, lang):
    """Return (start, end) char indices of the lang: { ... } block."""
    # Find 'lang: {' 
    pat = re.compile(rf'\b{lang}\s*:\s*\{{')
    m = pat.search(content)
    if not m:
        return None, None
    start = m.start()
    # Walk to find matching closing brace
    depth = 0
    i = m.end() - 1  # at the '{'
    while i < len(content):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                return start, i + 1
        i += 1
    return None, None

def find_part_array_range(block, part):
    """Return (start, end) within block for the part: [ ... ] array."""
    pat = re.compile(rf'\b{part}\s*:\s*\[')
    m = pat.search(block)
    if not m:
        return None, None
    start = m.start()
    # Find the '[' and walk to its closing ']'
    bracket_pos = m.end() - 1
    depth = 0
    i = bracket_pos
    while i < len(block):
        if block[i] == '[':
            depth += 1
        elif block[i] == ']':
            depth -= 1
            if depth == 0:
                return start, i + 1
        i += 1
    return None, None

def find_slide_objects(array_text):
    """
    Return list of (start, end) positions of each top-level { } slide object
    within the array text (not nested deeper).
    """
    slides = []
    depth = 0
    i = 0
    slide_start = None
    # Skip past the leading '[' 
    while i < len(array_text) and array_text[i] != '[':
        i += 1
    i += 1  # skip '['
    
    while i < len(array_text):
        c = array_text[i]
        if c == '{':
            if depth == 0:
                slide_start = i
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0 and slide_start is not None:
                slides.append((slide_start, i + 1))
                slide_start = None
        i += 1
    return slides

def is_branch_only(slide_text):
    """
    Return True if this slide starts with id: "NEW_..." — these are branch-path
    slides that we should skip when counting "last 2 main slides".
    """
    return bool(re.search(r'\bid\s*:\s*"NEW_', slide_text))

def patch_music_in_slide(slide_text, lang_offset, array_offset, slide_start, slide_end, new_music, all_changes):
    """Find the music: "..." field inside this slide and record a change."""
    abs_start = lang_offset + array_offset + slide_start
    abs_end   = lang_offset + array_offset + slide_end
    slide_content = slide_text

    music_pat = re.compile(r'(music\s*:\s*)"([^"]*)"')
    m = music_pat.search(slide_content)
    if m:
        field_start = abs_start + m.start()
        field_end   = abs_start + m.end()
        old_val = m.group(2)
        if old_val != new_music:
            new_field = f'{m.group(1)}"{new_music}"'
            all_changes.append((field_start, field_end, new_field))
            print(f"  → Changing music '{old_val}' → '{new_music}' at abs pos {field_start}")
    else:
        # No music field — insert one before the closing }
        # Find last } in slide
        insert_pos = abs_start + slide_content.rfind('}')
        insert_text = f',\n                music: "{new_music}"'
        all_changes.append((insert_pos, insert_pos, insert_text))
        print(f"  → Inserting music: '{new_music}' at abs pos {insert_pos}")

print("=== metal_garden music tagger ===\n")

for lang in LANGS:
    lang_start, lang_end = find_lang_block_range(content, lang)
    if lang_start is None:
        print(f"[WARN] Could not find language block for: {lang}")
        continue
    lang_block = content[lang_start:lang_end]
    print(f"[{lang}] block: chars {lang_start}–{lang_end}")

    for part in PARTS:
        arr_start, arr_end = find_part_array_range(lang_block, part)
        if arr_start is None:
            print(f"  [{part}] NOT FOUND or empty — skipping")
            continue
        arr_text = lang_block[arr_start:arr_end]
        slides = find_slide_objects(arr_text)
        
        # Filter out branch-only slides (NEW_...) to get the "main flow" slides
        main_slides = [(s, e) for s, e in slides if not is_branch_only(arr_text[s:e])]
        
        if len(main_slides) < 2:
            print(f"  [{part}] Only {len(main_slides)} main slides — skipping")
            continue
        
        last_two = main_slides[-2:]
        print(f"  [{part}] {len(main_slides)} main slides, tagging last 2:")
        
        for s, e in last_two:
            slide_text = arr_text[s:e]
            patch_music_in_slide(
                slide_text,
                lang_start,
                arr_start,
                s, e,
                'metal_garden',
                changes
            )

# Apply all changes in reverse order so positions stay valid
changes.sort(key=lambda x: x[0], reverse=True)
result = content
for start, end, new_text in changes:
    result = result[:start] + new_text + result[end:]

with open(SRC, 'w', encoding='utf-8') as f:
    f.write(result)

print(f"\n✓ Done. Applied {len(changes)} changes to {SRC}")
