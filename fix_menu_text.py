import re

file_path = "i18n.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # RU
    'startPart1: "НАЧАТЬ ЧАСТЬ 1: ТЕХНОКЛЯТВА",': 'startPart1: "P1: ТЕХНОКЛЯТВА",',
    'startPart2: "НАЧАТЬ ЧАСТЬ 2: ГУСИНЫЙ КОДЕКС",': 'startPart2: "P2: ГУСИНЫЙ КОДЕКС",',
    'startPart3: "НАЧАТЬ ЧАСТЬ 3: ОРГИЙНЫЙ КОЛЛАПС",': 'startPart3: "P3: ОРГИЙНЫЙ КОЛЛАПС",',
    'startPart4: "НАЧАТЬ ЧАСТЬ 4: ИСТИННАЯ КОНЦОВКА",': 'startPart4: "P4: ИСТИННАЯ КОНЦОВКА",',
    
    # EN
    'startPart1: "START PART 1: TECH-OATH",': 'startPart1: "P1: TECH-OATH",',
    'startPart2: "START PART 2: THE GOOSE CODE",': 'startPart2: "P2: THE GOOSE CODE",',
    'startPart3: "START PART 3: ORGIastic COLLAPSE",': 'startPart3: "P3: ORGIastic COLLAPSE",',
    'startPart4: "START PART 4: TRUE ENDING",': 'startPart4: "P4: TRUE ENDING",',

    # DE
    'startPart1: "TEIL 1 STARTEN: TECH-EID",': 'startPart1: "P1: TECH-EID",',
    'startPart2: "TEIL 2 STARTEN: DER GÄNSE-KODEX",': 'startPart2: "P2: DER GÄNSE-KODEX",',
    'startPart3: "TEIL 3 STARTEN: ORGIASTISCHER KOLLAPS",': 'startPart3: "P3: ORGIASTISCHER KOLLAPS",',
    'startPart4: "TEIL 4 STARTEN: WAHRES ENDE",': 'startPart4: "P4: WAHRES ENDE",',

    # ES
    'startPart1: "INICIAR PARTE 1: JURAMENTO TECNO",': 'startPart1: "P1: JURAMENTO TECNO",',
    'startPart2: "INICIAR PARTE 2: EL CÓDIGO GANSO",': 'startPart2: "P2: EL CÓDIGO GANSO",',
    'startPart3: "INICIAR PARTE 3: COLAPSO ORGIÁSTICO",': 'startPart3: "P3: COLAPSO ORGIÁSTICO",',
    'startPart4: "INICIAR PARTE 4: FINAL VERDADERO",': 'startPart4: "P4: FINAL VERDADERO",',

    # ZH
    'startPart1: "开始第一部分：技术誓言",': 'startPart1: "P1: 技术誓言",',
    'startPart2: "开始第二部分：鹅之法典",': 'startPart2: "P2: 鹅之法典",',
    'startPart3: "开始第三部分：狂欢式崩塌",': 'startPart3: "P3: 狂欢式崩塌",',
    'startPart4: "开始第四部分：真实结局",': 'startPart4: "P4: 真实结局",',

    # FA
    'startPart1: "شروع بخش ۱: سوگند تکنولوژی",': 'startPart1: "P1: سوگند تکنولوژی",',
    'startPart2: "شروع بخش ۲: کد غاز",': 'startPart2: "P2: کد غاز",',
    'startPart3: "شروع بخش ۳: فروپاشی ارگاستیک",': 'startPart3: "P3: فروپاشی ارگاستیک",',
    'startPart4: "شروع بخش ۴: پایان واقعی",': 'startPart4: "P4: پایان واقعی",'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated button text!")
