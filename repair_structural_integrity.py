import re

def repair():
    with open('i18n_story.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Capture all part4 arrays scattered in the RU block
    # They look like: part4: [ ... ]
    # We find them all and then remove from RU
    part4_pattern = re.compile(r'part4:\s*\[.*?\]', re.DOTALL)
    all_part4s = part4_pattern.findall(content)
    
    # Map part4 by language based on internal content
    ru_p4 = next((p for p in all_part4s if 'Записки' in p or 'Тихие Воды' in p), None)
    en_p4 = next((p for p in all_part4s if 'Notes' in p or 'Quiet Waters' in p), None)
    de_p4 = next((p for p in all_part4s if 'Notizen' in p or 'Stille Gewässer' in p), None)
    es_p4 = next((p for p in all_part4s if 'Notas' in p or 'Aguas Tranquilas' in p), None)
    zh_p4 = next((p for p in all_part4s if '笔记' in p or '宁静的水域' in p), None)
    
    # 2. Re-create FA part4
    fa_p4 = """part4: [
            {
                text: "<span class='color-cyan'>🌊 موخره: آب‌های آرام</span><br><br>شما با صدای موج‌سواری الکترونیک بیدار می‌شوید. آسمان غروب مانند یک پیکسل شکسته می‌لرزد. پنتاگون رفته است. پناهگاه دولتی رفته است. امپراتوری توسط کد غاز از روی زمین پاک شده است.<br><br>تنها یک پر درخشان روی شن‌های مصنوعی قرار دارد.",
                image: "assets/images/part4_island.webp",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ شما به پایان واقعی رسیدید. از بازی کردن شما متشکریم.</span>",
                image: "assets/images/part4_island.webp",
                music: "wm",
                choices: [
                    { text: "تنظیم مجدد جلسه", nextStep: 999 }
                ]
            }
        ]"""

    # 3. Fix Corrupted Transitions (Manual cleanup of specific lines seen in view_file)
    # EN Fix
    content = re.sub(r'span class=\'color-grayen: \{', "span class='color-gray'>(from the personal diary of Reed 'Vector' Coles, commander of the 'Tech-Oath' gang)</span>", content)
    # DE Fix
    content = re.sub(r'kommandant der \'Tech-Eid\'-Bande\)</span>\\n\\n20\. April 2026, Sektor \'New Atlanta\', Zone D, ehemaliges Amazon-de: \{', "kommandant der 'Tech-Eid'-Bande)</span>\\n\\n20. April 2026, Sektor 'New Atlanta', Zone D, ehemaliges Amazon-Lagerhaus.", content)
    # ES Fix
    content = re.sub(r'image: \"ases: \{', "image: \"assets/images/warehouse.webp\",", content)
    # ZH Fix
    content = re.sub(r'avatar: \"reed\",\s*zh: \{', "avatar: \"reed\",", content)
    # FA Fix
    content = re.sub(r'اما بعداً درfa: \{', "اما بعداً در این مورد بیشتر می‌گویم.", content)

    # 4. Remove all part4 blocks from the corrupted areas (mostly RU)
    content = part4_pattern.sub('', content)

    # 5. Correctly place each part4 before the closing brace of its language
    langs = {
        'ru': ru_p4, 'en': en_p4, 'de': de_p4, 'es': es_p4, 'zh': zh_p4, 'fa': fa_p4
    }
    
    for lang, p4 in langs.items():
        if not p4: continue
        # Find the end of this language block. 
        # Since we removed part4s, it should end with part3 array closing.
        # This is tricky because of nested braces. 
        # We can look for the next language key or end of object.
        pattern = rf'({lang}:\s*\{{.*?part3:\s*\[.*?\])(.*?)(\}},|\}})$'
        # re.DOTALL is needed. This is a bit aggressive.
        
        # Simpler way: find where the last array ends for each lang
        # and insert part4 before the next lang key.
        
    # Let's use a simpler string search for each language block
    def insert_p4(full_content, lang, p4_text):
        if lang == 'fa': # last one
             parts = full_content.split('fa: {')
             if len(parts) > 1:
                 segments = parts[1].split(']')
                 # Assuming part3 is the last one now
                 new_fa = parts[1].rstrip(' \n\t};')
                 if new_fa.endswith('}'): # last node
                     new_fa = new_fa + ',\n        ' + p4_text + '\n    }'
                 return parts[0] + 'fa: {' + new_fa + '\n};'
        else:
            # find next lang
            lang_order = ['ru', 'en', 'de', 'es', 'zh', 'fa']
            idx = lang_order.index(lang)
            next_lang = lang_order[idx+1]
            
            parts = full_content.split(next_lang + ': {')
            if len(parts) > 1:
                # In parts[0], find the last '}' that closes the previous lang
                # and insert p4 before it.
                last_brace = parts[0].rfind('}')
                if last_brace != -1:
                    repaired = parts[0][:last_brace].rstrip() + ',\n        ' + p4_text + '\n    ' + parts[0][last_brace:]
                    return repaired + next_lang + ': {' + parts[1]
        return full_content

    # Apply insertions in reverse to avoid index shifting
    temp = content
    temp = insert_p4(temp, 'fa', fa_p4)
    temp = insert_p4(temp, 'zh', zh_p4)
    temp = insert_p4(temp, 'es', es_p4)
    temp = insert_p4(temp, 'de', de_p4)
    temp = insert_p4(temp, 'en', en_p4)
    temp = insert_p4(temp, 'ru', ru_p4)

    # 6. Final cleanup: restore redundant 'part1: [' headers at corrupted spots
    # (Checking if any were left by re.sub)
    temp = temp.replace('part1: [\n        part1: [', 'part1: [')
    
    with open('i18n_story.js', 'w', encoding='utf-8') as f:
        f.write(temp)

if __name__ == "__main__":
    repair()
