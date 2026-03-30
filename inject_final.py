import re
import sys

def inject_final():
    with open('i18n_story.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Define language blocks
    langs = ['ru', 'en', 'de', 'es', 'zh', 'fa']
    
    # We'll split the file by language markers to be absolutely sure we don't cross inject
    # This is a bit risky if the file structure changes, but for this specific file it's fine.
    # A safer way is to find the bounds using looking for 'ru: {', 'en: {', etc.
    
    def find_lang_block(lang, next_lang=None):
        start_pattern = rf'{lang}:\s*\{{'
        start_match = re.search(start_pattern, content)
        if not start_match: return None
        start = start_match.start()
        
        if next_lang:
            end_pattern = rf'{next_lang}:\s*\{{'
            end_match = re.search(end_pattern, content)
            if end_match:
                end = end_match.start()
                return content[start:end], start, end
        
        # If no next_lang, it's the last one (fa)
        return content[start:], start, len(content)

    new_content = content
    offset = 0

    for i, lang in enumerate(langs):
        next_lang = langs[i+1] if i+1 < len(langs) else None
        block_info = find_lang_block(lang, next_lang)
        if not block_info: continue
        
        block, b_start, b_end = block_info
        
        # Remove any existing minigame tags in this block to clean up my previous failed attempt
        block = re.sub(r',\s*minigame:\s*["\'].*?["\']', '', block)
        
        # 1. Breach (Part 1 Keywords)
        breach_kws = ['MIRROR-7', 'ЗЕРКАЛО-7', 'ESPEJO-7', '镜像-7', 'آینه-۷']
        # 2. Sniper (Part 2 Keywords)
        sniper_kws = ['Lawson', 'Лоусона', '劳森', 'لاوسون']
        # 3. Consensus (Part 3 Keywords)
        consensus_kws = ['DARPA'] 
        consensus_sub_kws = ['sarcasm', 'Сарказм', 'Sarkasmus', 'Sarcasmo', '讽刺', 'سارکاسم']
        # 4. Neuro (Part 3 Keywords)
        neuro_kws = ['Marcus', 'Маркус', '马库斯', 'مارکوس']
        neuro_sub_kws = ['fall', 'knees', 'пад', '崩', 'زانو', 'سقوط']

        def inject_meta(node_match, minigame_id):
            node = node_match.group(0)
            return node.rstrip('\n\t }') + f',\n                minigame: "{minigame_id}"\n            }}'

        # Process nodes in this block
        # We find every {...} block that looks like a story node
        nodes = re.findall(r'\{[^{}]*?text:[^{}]*?\}', block, flags=re.DOTALL)
        
        new_block = block
        for node_str in nodes:
            # Check for Breach
            if any(kw in node_str for kw in breach_kws):
                if 'minigame:' not in node_str:
                    new_node = node_str.rstrip('\n\t }') + ',\n                minigame: "breach_01"\n            }'
                    new_block = new_block.replace(node_str, new_node)
                    continue
            
            # Check for Sniper
            if any(kw in node_str for kw in sniper_kws):
                 if 'minigame:' not in node_str:
                    new_node = node_str.rstrip('\n\t }') + ',\n                minigame: "sniper_01"\n            }'
                    new_block = new_block.replace(node_str, new_node)
                    continue

            # Check for Consensus (DARPA + Sarcasm)
            if 'DARPA' in node_str and any(kw in node_str for kw in consensus_sub_kws):
                 if 'minigame:' not in node_str:
                    new_node = node_str.rstrip('\n\t }') + ',\n                minigame: "consensus_01"\n            }'
                    new_block = new_block.replace(node_str, new_node)
                    continue

            # Check for Neuro (Marcus + Fall/Knees)
            if any(kw in node_str for kw in neuro_kws) and any(kw in node_str for kw in neuro_sub_kws):
                 if 'minigame:' not in node_str:
                    # Avoid injecting into the epilogue (which also mentions Marcus Thorne)
                    if 'epilogue' not in node_str.lower() and 'эпилог' not in node_str.lower():
                        new_node = node_str.rstrip('\n\t }') + ',\n                minigame: "neuro_01"\n            }'
                        new_block = new_block.replace(node_str, new_node)
                        continue

        # Splice the new block back into the full content
        new_content = new_content[:b_start + offset] + new_block + new_content[b_end + offset:]
        offset += len(new_block) - len(block)

    with open('i18n_story.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    inject_final()
