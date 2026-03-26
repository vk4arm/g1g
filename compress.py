import os
import subprocess
import re

try:
    from PIL import Image
except ImportError:
    subprocess.check_call(["pip3", "install", "Pillow", "--break-system-packages"])
    from PIL import Image

skip_list = ['favicon.png', 'icon_150.png', 'icon_278.png', 'icon_576.png', 'telegram_logo_640x360.png']

def compress_dir(directory):
    if not os.path.exists(directory):
        return
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.lower().endswith('.png') and f not in skip_list:
                in_path = os.path.join(root, f)
                out_path = os.path.splitext(in_path)[0] + '.webp'
                
                try:
                    with Image.open(in_path) as img:
                        img = img.convert('RGBA')
                        if img.width > 1200 or img.height > 1200:
                            img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                        img.save(out_path, 'WEBP', quality=85)
                    print(f"Compressed {f} -> webp")
                    os.remove(in_path)
                except Exception as e:
                    pass

compress_dir('assets/images')
compress_dir('assets/avatars')

def rewrite_code(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replacer(match):
        filename = match.group(0)
        for s in skip_list:
            if s in filename:
                return filename
        return filename.replace('.png', '.webp')

    content = re.sub(r'assets/(?:images|avatars)/[^"\'\s]+\.png', replacer, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

rewrite_code('i18n.js')
rewrite_code('script.js')
rewrite_code('style.css')
print("Complete")
