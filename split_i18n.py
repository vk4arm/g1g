import os
import re

file_path = "i18n.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Extract uiStrings
ui_match = re.search(r'const uiStrings = \{.*?\};', content, re.DOTALL)
if ui_match:
    ui_block = ui_match.group(0)
    # Remove startPart4 from UI strings
    ui_block = re.sub(r'\s+startPart4: ".*?",', '', ui_block)
    
    with open("i18n_core.js", "w", encoding="utf-8") as f:
        f.write(ui_block)
    print("Created i18n_core.js")

# 2. Extract allStories
story_match = re.search(r'const allStories = \{.*?\};', content, re.DOTALL)
if story_match:
    story_block = story_match.group(0)
    # Remove part4 from allStories
    # We look for part4: [ ... ] structure across all languages
    # Match part4: [ some content ] where content doesn't contain a closing bracket followed by a comma or brace for another part
    # Actually, a simpler way since it's a JS object:
    story_block = re.sub(r'\s+part4: \[.*?\],', '', story_block, flags=re.DOTALL)
    
    with open("i18n_story.js", "w", encoding="utf-8") as f:
        f.write(story_block)
    print("Created i18n_story.js")
