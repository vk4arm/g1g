import re

file_path = "i18n.js"
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)
    # We can inject avatars directly after specific images to blanket-cover them
    if 'image: "assets/images/warehouse.png"' in line:
        new_lines.append('                avatar: "reed",\n')
    elif 'image: "assets/images/goose.png"' in line:
        new_lines.append('                avatar: "hans",\n')
    elif 'image: "assets/images/part2_hans_intro.png"' in line:
        new_lines.append('                avatar: "hans",\n')
    elif 'image: "assets/images/part2_hans_weaponry.png"' in line:
        new_lines.append('                avatar: "hans",\n')
    elif 'image: "assets/images/part2_aila_intro.png"' in line:
        new_lines.append('                avatar: "aila",\n')
    elif 'image: "assets/images/part2_aila_congress.png"' in line:
        new_lines.append('                avatar: "aila",\n')
    elif 'image: "assets/images/part3_intro.png"' in line:
        new_lines.append('                avatar: "thorne",\n')
    elif 'image: "assets/images/part3_party.png"' in line:
        new_lines.append('                avatar: "thorne",\n')
    elif 'image: "assets/images/part3_execution_plot.png"' in line:
        new_lines.append('                avatar: "thorne",\n')
    elif 'image: "assets/images/part3_venom_injection.png"' in line:
        new_lines.append('                avatar: "thorne",\n')
    elif 'image: "assets/images/part3_aila.png"' in line:
        new_lines.append('                avatar: "aila",\n')

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("Avatars injected!")
