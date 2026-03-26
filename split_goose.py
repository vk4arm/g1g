import os

file_path = "i18n.js"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

replacements = [
    (
        # RU
        '                text: "<span class=\'color-green\'>🦆 Про гусей</span>\\nДа-да, DARPA. Проект AGGRESSOR-AVIAN UNIT.\\nИдея была в том, что гуси с ИИ лучше распознают цели, чем боты.\\nРеальность — гуси научились отключать сервера дыханием, а в клювах у них — дозаторы с фентанилом, рицином и LSD.\\nМы захватили одного. Звали его Ганс... Теперь он наш разведчик и исполнитель “мокрых” дел.\\nПустили его в городскую мэрию — он клюнул мэра, тот увидел Бога и утонул в фонтане.",',
        '                text: "<span class=\'color-green\'>🦆 Про гусей</span>\\nДа-да, DARPA. Проект AGGRESSOR-AVIAN UNIT.\\nИдея была в том, что гуси с ИИ лучше распознают цели, чем боты.",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "Реальность — гуси научились отключать сервера дыханием, а в клювах у них — дозаторы с фентанилом, рицином и LSD.\\nМы захватили одного. Звали его Ганс... Теперь он наш разведчик и исполнитель “мокрых” дел.\\nПустили его в городскую мэрию — он клюнул мэра, тот увидел Бога и утонул в фонтане.",'
    ),
    (
        # EN
        '                text: "<span class=\'color-green\'>🦆 About the Geese</span>\\nYes, DARPA. Project AGGRESSOR-AVIAN UNIT.\\nThe idea was that AI geese recognize targets better than bots.\\nReality — the geese learned to disable servers with their breath, and their beaks hold dispensers for fentanyl, ricin, and LSD.\\nWe captured one. Named him Hans... Now he\'s our scout and \'wetwork\' specialist.\\nWe let him into the city hall — he pecked the mayor, the mayor saw God and drowned in a fountain.",',
        '                text: "<span class=\'color-green\'>🦆 About the Geese</span>\\nYes, DARPA. Project AGGRESSOR-AVIAN UNIT.\\nThe idea was that AI geese recognize targets better than bots.",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "Reality — the geese learned to disable servers with their breath, and their beaks hold dispensers for fentanyl, ricin, and LSD.\\nWe captured one. Named him Hans... Now he\'s our scout and \'wetwork\' specialist.\\nWe let him into the city hall — he pecked the mayor, the mayor saw God and drowned in a fountain.",'
    ),
    (
        # DE
        '                text: "<span class=\'color-green\'>🦆 Über die Gänse</span>\\nJa, DARPA. Projekt AGGRESSOR-AVIAN UNIT.\\nDie Idee war, dass KI-Gänse Ziele besser erkennen als Bots.\\nRealität — die Gänse lernten, Server mit ihrem Atem zu deaktivieren, und in ihren Schnäbeln befinden sich Spender für Fentanyl, Rizin und LSD.\\nWir haben eine gefangen. Nannten ihn Hans... Jetzt ist er unser Aufklärer und Spezialist für \'nasse\' Angelegenheiten.\\nWir ließen ihn ins Rathaus — er pickte den Bürgermeister, der Bürgermeister sah Gott und ertrank in einem Brunnen.",',
        '                text: "<span class=\'color-green\'>🦆 Über die Gänse</span>\\nJa, DARPA. Projekt AGGRESSOR-AVIAN UNIT.\\nDie Idee war, dass KI-Gänse Ziele besser erkennen als Bots.",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "Realität — die Gänse lernten, Server mit ihrem Atem zu deaktivieren, und in ihren Schnäbeln befinden sich Spender für Fentanyl, Rizin und LSD.\\nWir haben eine gefangen. Nannten ihn Hans... Jetzt ist er unser Aufklärer und Spezialist für \'nasse\' Angelegenheiten.\\nWir ließen ihn ins Rathaus — er pickte den Bürgermeister, der Bürgermeister sah Gott und ertrank in einem Brunnen.",'
    ),
    (
        # ES
        '                text: "<span class=\'color-green\'>🦆 Sobre los gansos</span>\\nSí, DARPA. Proyecto AGGRESSOR-AVIAN UNIT.\\nLa idea era que los gansos con IA reconocen mejor los objetivos que los bots.\\nRealidad: los gansos aprendieron a desactivar servidores con el aliento, y en sus picos llevan dispensadores de fentanilo, ricina y LSD.\\nCapturamos a uno. Lo llamamos Hans... Ahora es nuestro explorador y especialista en \'trabajos sucios\'.\\nLo soltamos en el ayuntamiento: picoteó al alcalde, el alcalde vio a Dios y se ahogó en una fuente.",',
        '                text: "<span class=\'color-green\'>🦆 Sobre los gansos</span>\\nSí, DARPA. Proyecto AGGRESSOR-AVIAN UNIT.\\nLa idea era que los gansos con IA reconocen mejor los objetivos que los bots.",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "Realidad: los gansos aprendieron a desactivar servidores con el aliento, y en sus picos llevan dispensadores de fentanilo, ricina y LSD.\\nCapturamos a uno. Lo llamamos Hans... Ahora es nuestro explorador y especialista en \'trabajos sucios\'.\\nLo soltamos en el ayuntamiento: picoteó al alcalde, el alcalde vio a Dios y se ahogó en una fuente.",'
    ),
    (
        # ZH
        '                text: "<span class=\'color-green\'>🦆 关于鹅</span>\\n没错，DARPA（美国国防高级研究计划局）。AGGRESSOR-AVIAN UNIT项目。\\n初衷是认为AI鹅比机器人更能识别目标。\\n现实是——鹅学会了用呼吸停掉服务器，它们的喙里装有芬太尼、蓖麻毒素和LSD的投放器。\\n我们捕获了一只。叫它汉斯……现在它是我们的侦察兵和“清除”专家。\\n我们把它放进市政厅——它啄了市长，市长见到了上帝并溺死在喷泉里。",',
        '                text: "<span class=\'color-green\'>🦆 关于鹅</span>\\n没错，DARPA（美国国防高级研究计划局）。AGGRESSOR-AVIAN UNIT项目。\\n初衷是认为AI鹅比机器人更能识别目标。",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "现实是——鹅学会了用呼吸停掉服务器，它们的喙里装有芬太尼、蓖麻毒素和LSD的投放器。\\n我们捕获了一只。叫它汉斯……现在它是我们的侦察兵和“清除”专家。\\n我们把它放进市政厅——它啄了市长，市长见到了上帝并溺死在喷泉里。",'
    ),
    (
        # FA
        '                text: "<span class=\'color-green\'>🦆 درباره غازها</span>\\nبله، دارپا. پروژه AGGRESSOR-AVIAN UNIT.\\nایده این بود که غازهای هوش مصنوعی اهداف را بهتر از ربات‌ها تشخیص می‌دهند.\\nواقعیت — غازها یاد گرفتند که سرورها را با نفس خود از کار بیندازند و در منقارهایشان توزیع‌کننده‌های فنتانیل، ریسین و ال‌اس‌دی دارند.\\nما یکی را گرفتیم. نامش را هانس گذاشتیم... حالا او دیدبان و متخصص کارهای کثیف ماست.\\nاو را به شهرداری شهر فرستادیم — او به شهردار نوک زد، شهردار خدا را دید و در فواره غرق شد.",',
        '                text: "<span class=\'color-green\'>🦆 درباره غازها</span>\\nبله، دارپا. پروژه AGGRESSOR-AVIAN UNIT.\\nایده این بود که غازهای هوش مصنوعی اهداف را بهتر از ربات‌ها تشخیص می‌دهند.",\n                image: "assets/images/goose.webp",\n                avatar: "hans",\n                codex: "UNIT_HANS",\n                music: "classical"\n            },\n            {\n                text: "واقعیت — غازها یاد گرفتند که سرورها را با نفس خود از کار بیندازند و در منقارهایشان توزیع‌کننده‌های فنتانیل، ریسین و ال‌اس‌دی دارند.\\nما یکی را گرفتیم. نامش را هانس گذاشتیم... حالا او دیدبان و متخصص کارهای کثیف ماست.\\nاو را به شهرداری شهر فرستادیم — او به شهردار نوک زد، شهردار خدا را دید و در فواره غرق شد.",'
    )
]

for orig, new in replacements:
    text = text.replace(orig, new)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Split Goose Slides OK")
