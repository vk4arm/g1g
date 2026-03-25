import re

file_path = "i18n.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    'ru': '        share: "Поделиться",',
    'en': '        share: "Share",',
    'de': '        share: "Teilen",',
    'es': '        share: "Compartir",',
    'zh': '        share: "分享",',
    'fa': '        share: "اشتراک‌گذاری",'
}

content = content.replace('        share: "РАСПРОСТРАНИТЬ ПРОТОКОЛ",', updates['ru'])
content = content.replace('        share: "BROADCAST PROTOCOL",', updates['en'])
content = content.replace('        share: "PROTOKOLL VERBREITEN",', updates['de'])
content = content.replace('        share: "DIFUNDIR PROTOCOLO",', updates['es'])
content = content.replace('        share: "传播协议",', updates['zh'])
content = content.replace('        share: "پروتکل پخش",', updates['fa'])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Share button renamed")
