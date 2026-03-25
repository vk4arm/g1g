import re

file_path = "i18n.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update uiStrings for codexBtn
ui_updates = {
    'ru': '        startPart4: "НАЧАТЬ ЧАСТЬ 4: ИСТИННАЯ КОНЦОВКА",\n        codexBtn: "НЕЙРО-АРХИВ"',
    'en': '        startPart4: "START PART 4: TRUE ENDING",\n        codexBtn: "NEURO-ARCHIVE"',
    'de': '        startPart4: "TEIL 4 STARTEN: WAHRES ENDE",\n        codexBtn: "NEURO-ARCHIV"',
    'es': '        startPart4: "INICIAR PARTE 4: FINAL VERDADERO",\n        codexBtn: "NEURO-ARCHIVO"',
    'zh': '        startPart4: "开始第四部分：真实结局",\n        codexBtn: "神经档案"',
    'fa': '        startPart4: "شروع بخش ۴: پایان واقعی",\n        codexBtn: "بایگانی عصبی"'
}

for lang, replacement in ui_updates.items():
    if lang == 'ru':
        content = content.replace('        startPart4: "НАЧАТЬ ЧАСТЬ 4: ИСТИННАЯ КОНЦОВКА"', replacement)
    elif lang == 'en':
        content = content.replace('        startPart4: "START PART 4: TRUE ENDING"', replacement)
    elif lang == 'de':
        content = content.replace('        startPart4: "TEIL 4 STARTEN: WAHRES ENDE"', replacement)
    elif lang == 'es':
        content = content.replace('        startPart4: "INICIAR PARTE 4: FINAL VERDADERO"', replacement)
    elif lang == 'zh':
        content = content.replace('        startPart4: "开始第四部分：真实结局"', replacement)
    elif lang == 'fa':
        content = content.replace('        startPart4: "شروع بخش ۴: پایان واقعی"', replacement)

# 2. Inject `codex: "..."` based on specific image lines to blanket-cover slides
# We can do simple line replacement
lines = content.split('\n')
new_lines = []
for line in lines:
    new_lines.append(line)
    
    # Trigger TECHNOATH on the bunker explanation slide
    if 'image: "assets/images/bunker.png"' in line:
        new_lines.append('                codex: "FACTION_TECHNOATH",')
    # Trigger HANS on his intro slide
    elif 'image: "assets/images/goose.png"' in line:
        new_lines.append('                codex: "UNIT_HANS",')
    # Trigger TOXIN_R3 on the LSD slide
    elif 'image: "assets/images/goose_lsd.png"' in line:
        new_lines.append('                codex: "TOXIN_R3",')
    # Trigger PENTAGON_HEIST on the pizza slide
    elif 'image: "assets/images/goose_pizza.png"' in line:
        new_lines.append('                codex: "PENTAGON_HEIST",')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Codex payload injected.")
