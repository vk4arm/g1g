import re

file_path = "i18n.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

story_data = {
    'ru': r"""        part4: [
            {
                text: "<span class='color-cyan'>🌊 Эпилог: Тихие Воды</span>\nВы просыпаетесь под шум электронного прибоя. Закатное небо мерцает, как битый пиксель. Пентагона больше нет. Бункера правительства — тоже. Империя стерта с лица земли гусиным кодом.\n\nНа синтетическом песке лежит лишь одно сияющее перо.",
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
                text: "<span class='color-cyan'>🌊 Epilogue: Quiet Waters</span>\nYou wake up to the sound of an electronic surf. The sunset sky flickers like a broken pixel. The Pentagon is gone. The government bunker is gone. The Empire has been wiped off the face of the earth by goose code.\n\nOnly one glowing feather lies on the synthetic sand.",
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
                text: "<span class='color-cyan'>🌊 Epilog: Stille Gewässer</span>\nSie wachen beim Rauschen einer elektronischen Brandung auf. Der Sonnenuntergangshimmel flackert wie ein kaputtes Pixel. Das Pentagon ist weg. Der Regierungsbunker ist weg. Das Imperium wurde durch den Gänse-Code vom Erdboden gewischt.\n\nNur eine leuchtende Feder liegt auf dem synthetischen Sand.",
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
                text: "<span class='color-cyan'>🌊 Epílogo: Aguas Tranquilas</span>\nTe despiertas con el sonido de un oleaje electrónico. El cielo del atardecer parpadea como un píxel roto. El Pentágono ya no existe. El búnker del gobierno tampoco. El Imperio ha sido borrado de la faz de la tierra por el código ganso.\n\nSolo una pluma brillante yace sobre la arena sintética.",
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
                text: "<span class='color-cyan'>🌊 尾声：宁静的水域</span>\n伴随着电子海浪声，你醒来了。黄昏的天空像破碎的像素一样闪烁。五角大楼不见了。政府地堡也不见了。帝国已被鹅之代码从地球上抹去。\n\n合成沙滩上只留下一根发光的羽毛。",
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
                text: "<span class='color-cyan'>🌊 پایان: آب‌های آرام</span>\nشما با صدای موج‌سواری الکترونیکی از خواب بیدار می‌شوید. آسمان غروب مانند یک پیکسل شکسته سوسو می‌زند. پنتاگون دیگر وجود ندارد. پناهگاه دولت نیز از بین رفته است. امپراتوری توسط کد غاز از روی زمین محو شده است.\n\nفقط یک پر درخشان روی ماسه‌های مصنوعی افتاده است.",
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

# We iterate over languages to ensure we target the specific block
for lang in ['ru', 'en', 'de', 'es', 'zh', 'fa']:
    # We find the specific language block inside `allStories`
    # Match EXACTLY: `    lang: {\n        part1... part3: [ ... ]\n    }`
    # Then replace its end `        ]\n    }` with `        ],\n        part4: [...]\n    }`
    
    if lang == 'fa':
        pattern = rf'({lang}: \{{.*?)(\n        \]\n    \}})(;)'
        replacement = rf'\g<1>\n        ],\n{story_data[lang]}\n    }}\g<3>'
    else:
        pattern = rf'({lang}: \{{.*?)(\n        \]\n    \}},)'
        replacement = rf'\g<1>\n        ],\n{story_data[lang]}\n    }},'

    content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.MULTILINE, count=1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Part 4 successfully injected!")
