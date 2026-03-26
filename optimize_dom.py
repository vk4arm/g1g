import os

file_path = "index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace all forced preloads with none to rescue mobile network threads
content = content.replace('preload="auto"', 'preload="none"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("index.html preloads set to 'none'")
