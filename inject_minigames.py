import re

def inject_minigames():
    with open('i18n_story.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalize existing minigame tags to avoid duplicates or messy formatting
    # We remove all previous minigame tags to ensure a clean slate
    content = re.sub(r',\s*minigame:\s*["\'].*?["\']', '', content)

    # 1. Breach (Part 1)
    # Anchor: "Corona-R3" (all languages)
    # We look for a node containing Corona-R3 and append minigame: "breach_01"
    def add_breach(match):
        node = match.group(0)
        if 'Corona-R3' in node or 'Корона-R3' in node or '冕-R3' in node:
            return node.rstrip('\n\t }') + ',\n                minigame: "breach_01"\n            }'
        return node

    content = re.sub(r'\{[^{}]*?text:[^{}]*?(?:Corona-R3|Корона-R3|冕-R3)[^{}]*?\}', add_breach, content, flags=re.DOTALL)

    # 2. Sniper (Part 2)
    # Anchor: "Lawson" (PENTAGON_HEIST context)
    def add_sniper(match):
        node = match.group(0)
        if 'Lawson' in node or 'Лоусона' in node or '劳森' in node:
            return node.rstrip('\n\t }') + ',\n                minigame: "sniper_01"\n            }'
        return node
    
    content = re.sub(r'\{[^{}]*?text:[^{}]*?(?:Lawson|Лоусона|劳森)[^{}]*?\}', add_sniper, content, flags=re.DOTALL)

    # 3. Consensus (Part 3)
    # Anchor: DARPA sarcasm node
    def add_consensus(match):
        node = match.group(0)
        # Search for DARPA + sarcasm keywords
        if 'DARPA' in node and ('sarcasm' in node or 'Сарказм' in node or 'Sarkasmus' in node or 'Sarcasmo' in node or '讽刺' in node or 'سارکاسم' in node):
            return node.rstrip('\n\t }') + ',\n                minigame: "consensus_01"\n            }'
        return node

    content = re.sub(r'\{[^{}]*?text:[^{}]*?DARPA[^{}]*?\}', add_consensus, content, flags=re.DOTALL)

    # 4. Neuro (Part 4)
    # Anchor: "Marcus" + "falls" or "Empire" + "roar" / "collapsing"
    def add_neuro(match):
        node = match.group(0)
        # We target the node where Thorne falls or the empire collapses
        if ('Marcus' in node or 'Маркус' in node or '马库斯' in node or 'مارکوس' in node) and \
           ('falling' in node or 'папал' in node or 'падающей' in node or '崩溃' in node or 'سقوط' in node or 'sink' in node or 'fall' in node):
            return node.rstrip('\n\t }') + ',\n                minigame: "neuro_01"\n            }'
        return node

    content = re.sub(r'\{[^{}]*?text:[^{}]*?(?:Marcus|Маркус|马库斯|مارکوس)[^{}]*?\}', add_neuro, content, flags=re.DOTALL)

    with open('i18n_story.js', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    inject_minigames()
