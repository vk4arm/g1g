import re

file_path = "i18n.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update uiStrings for startPart4 and codexBtn
ui_updates = {
    'ru': '        achievements: "ДОСТИЖЕНИЯ",\n        startPart4: "НАЧАТЬ ЧАСТЬ 4: ИСТИННАЯ КОНЦОВКА",\n        codexBtn: "НЕЙРО-АРХИВ"',
    'en': '        achievements: "ACHIEVEMENTS",\n        startPart4: "START PART 4: TRUE ENDING",\n        codexBtn: "NEURO-ARCHIVE"',
    'de': '        achievements: "ERFOLGE",\n        startPart4: "TEIL 4 STARTEN: WAHRES ENDE",\n        codexBtn: "NEURO-ARCHIV"',
    'es': '        achievements: "LOGROS",\n        startPart4: "INICIAR PARTE 4: FINAL VERDADERO",\n        codexBtn: "NEURO-ARCHIVO"',
    'zh': '        achievements: "成就",\n        startPart4: "开始第四部分：真实结局",\n        codexBtn: "神经档案"',
    'fa': '        achievements: "دستاوردها",\n        startPart4: "شروع بخش ۴: پایان واقعی",\n        codexBtn: "بایگانی عصبی"'
}

for lang, replacement in ui_updates.items():
    if lang == 'ru':
        content = content.replace('        achievements: "ДОСТИЖЕНИЯ"', replacement)
    elif lang == 'en':
        content = content.replace('        achievements: "ACHIEVEMENTS"', replacement)
    elif lang == 'de':
        content = content.replace('        achievements: "ERFOLGE"', replacement)
    elif lang == 'es':
        content = content.replace('        achievements: "LOGROS"', replacement)
    elif lang == 'zh':
        content = content.replace('        achievements: "成就"', replacement)
    elif lang == 'fa':
        content = content.replace('        achievements: "دستاوردها"', replacement)

# 2. Inject part4 array for each language
story_data = {
    'ru': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 Эпилог: Тихие Воды</span><br><br>Вы просыпаетесь под шум электронного прибоя. Закатное небо мерцает, как битый пиксель. Пентагона больше нет. Бункера правительства — тоже. Империя стерта с лица земли гусиным кодом.<br><br>На синтетическом песке лежит лишь одно сияющее перо.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Вы достигли Истинной Концовки. Спасибо за игру.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "СБРОС СЕССИИ", nextStep: 999 }
                ]
            }
        ]""",
    'en': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epilogue: Quiet Waters</span><br><br>You wake up to the sound of an electronic surf. The sunset sky flickers like a broken pixel. The Pentagon is gone. The government bunker is gone. The Empire has been wiped off the face of the earth by goose code.<br><br>Only one glowing feather lies on the synthetic sand.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ You have reached the True Ending. Thank you for playing.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "RESET SESSION", nextStep: 999 }
                ]
            }
        ]""",
    'de': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epilog: Stille Gewässer</span><br><br>Sie wachen beim Rauschen einer elektronischen Brandung auf. Der Sonnenuntergangshimmel flackert wie ein kaputtes Pixel. Das Pentagon ist weg. Der Regierungsbunker ist weg. Das Imperium wurde durch den Gänse-Code vom Erdboden gewischt.<br><br>Nur eine leuchtende Feder liegt auf dem synthetischen Sand.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Sie haben das wahre Ende erreicht. Danke fürs Spielen.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "SITZUNG ZURÜCKSETZEN", nextStep: 999 }
                ]
            }
        ]""",
    'es': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epílogo: Aguas Tranquilas</span><br><br>Te despiertas con el sonido de un oleaje electrónico. El cielo del atardecer parpadea como un píxel roto. El Pentágono ya no existe. El búnker del gobierno tampoco. El Imperio ha sido borrado de la faz de la tierra por el código ganso.<br><br>Solo una pluma brillante yace sobre la arena sintética.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Has alcanzado el Final Verdadero. Gracias por jugar.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "REINICIAR SESIÓN", nextStep: 999 }
                ]
            }
        ]""",
    'zh': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 尾声：宁静的水域</span><br><br>伴随着电子海浪声，你醒来了。黄昏的天空像破碎的像素一样闪烁。五角大楼不见了。政府地堡也不见了。帝国已被鹅之代码从地球上抹去。<br><br>合成沙滩上只留下一根发光的羽毛。",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ 您已达成真实结局。感谢游玩。</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "重置会话", nextStep: 999 }
                ]
            }
        ]""",
    'fa': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 پایان: آب‌های آرام</span><br><br>شما با صدای موج‌سواری الکترونیکی از خواب بیدار می‌شوید. آسمان غروب مانند یک پیکسل شکسته سوسو می‌زند. پنتاگون دیگر وجود ندارد. پناهگاه دولت نیز از بین رفته است. امپراتوری توسط کد غاز از روی زمین محو شده است.<br><br>فقط یک پر درخشان روی ماسه‌های مصنوعی افتاده است.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ شما به پایان واقعی رسیدید. از بازی شما متشکریم.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "تنظیم مجدد جلسه", nextStep: 999 }
                ]
            }
        ]"""
}

for lang in ['ru', 'en', 'de', 'es', 'zh', 'fa']:
    if lang == 'fa':
        pattern = rf'({lang}: \{{.*?)(\n        \]\n    \}})(;)'
        replacement = rf'\g<1>\n        ],\n{story_data[lang]}\n    }}\g<3>'
    else:
        pattern = rf'({lang}: \{{.*?)(\n        \]\n    \}},)'
        replacement = rf'\g<1>\n        ],\n{story_data[lang]}\n    }},'

    content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.MULTILINE, count=1)

# 3. Inject explicit attributes
lines = content.split('\n')
new_lines = []
for line in lines:
    new_lines.append(line)
    if 'image: "assets/images/warehouse.png"' in line:
        new_lines.append('                avatar: "reed",')
    elif 'image: "assets/images/goose.png"' in line:
        new_lines.append('                avatar: "hans",')
        new_lines.append('                codex: "UNIT_HANS",')
    elif 'image: "assets/images/bunker.png"' in line:
        new_lines.append('                codex: "FACTION_TECHNOATH",')
    elif 'image: "assets/images/part2_hans_intro.png"' in line:
        new_lines.append('                avatar: "hans",')
    elif 'image: "assets/images/part2_hans_weaponry.png"' in line:
        new_lines.append('                avatar: "hans",')
    elif 'image: "assets/images/part2_aila_intro.png"' in line:
        new_lines.append('                avatar: "aila",')
    elif 'image: "assets/images/part2_aila_congress.png"' in line:
        new_lines.append('                avatar: "aila",')
    elif 'image: "assets/images/part3_intro.png"' in line:
        new_lines.append('                avatar: "thorne",')
    elif 'image: "assets/images/part3_party.png"' in line:
        new_lines.append('                avatar: "thorne",')
    elif 'image: "assets/images/part3_execution_plot.png"' in line:
        new_lines.append('                avatar: "thorne",')
    elif 'image: "assets/images/part3_venom_injection.png"' in line:
        new_lines.append('                avatar: "thorne",')
    elif 'image: "assets/images/part3_aila.png"' in line:
        new_lines.append('                avatar: "aila",')
    elif 'image: "assets/images/goose_lsd.png"' in line:
        new_lines.append('                codex: "TOXIN_R3",')
    elif 'image: "assets/images/goose_pizza.png"' in line:
        new_lines.append('                codex: "PENTAGON_HEIST",')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Inject ALL success!")
