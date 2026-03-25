import re

file_path = "i18n.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the targets and what to inject
# Note: we find the line with `id: "TARGET"` and append the keys before the choices array or right after the image
targets = {
    "NEW_TRAIN": 'vfx: "shake", sfx: "explosion",',
    "NEW_AMBUSH": 'vfx: "shake", sfx: "explosion",',
    "NEW_TRIP": 'vfx: "glitch-severe", sfx: "glitch",',
    "NEW_PIZZA": 'sfx: "honk",',
    "NEW_ANGEL": 'vfx: "glitch-severe", sfx: "glitch",',
    "NEW_CULT": 'vfx: "shake", sfx: "honk",'
}

for t_id, to_add in targets.items():
    # Regex to find the block starting with id: "t_id" and ending before choices:
    # We will just find `id: "t_id",` and insert the new lines right below it
    pattern = rf'(id:\s*"{t_id}",)'
    replacement = rf'\1\n                {to_add}'
    content = re.sub(pattern, replacement, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("VFX mapping applied!")
