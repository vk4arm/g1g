import sys

def process():
    with open('i18n.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    translations = {
        'ru': {
            'train_choice': '[План Омега] Угнать бронепоезд и протаранить бункер',
            'ambush_choice': '[План Альфа] Прямой штурм: ракетницы и кибер-взрывы',
            'stealth_choice': 'Придерживаться изначального плана',
            'train_text': '*ГРОХОТ* Бронепоезд SEC-CORP на полном ходу пробивает железобетонную стену бункера Транзитного Командования! Ошмётки защиты, пламя до небес и наши кибер-братки с неоновыми мачете влетают прямо в пекло. Политики даже не успели залогиниться в свои дроны бегства.',
            'ambush_text': 'Ночная улица озарилась неоновыми вспышками от наших базук. Мы устроили тотальный разнос: ЭМИ-гранаты вырубили мехи правительства, а снаряды разнесли их укрепления в пыль. Это не просто бандитизм — это снос старого режима под грохот металла и запах паленого био-керосина.',
            'return_text': 'Вернуться к дневнику Рида'
        },
        'en': {
            'train_choice': '[Plan Omega] Hijack armored train and ram the bunker',
            'ambush_choice': '[Plan Alpha] Frontal assault: rocket launchers and cyber-explosions',
            'stealth_choice': 'Stick to the original plan',
            'train_text': '*CRASH* The SEC-CORP armored train smashes through the reinforced concrete wall of the Transit Command bunker at full speed! Shredded defenses, flames reaching the sky, and our cyber-bros with neon machetes plunge straight into the inferno. The politicians did not even have time to log into their escape drones.',
            'ambush_text': 'The night street lit up with neon flashes from our bazookas. We caused total devastation: EMP grenades disabled the government mechs, and rockets blew their fortifications to dust. This is not just banditry—it is the demolition of the old regime to the roar of metal and the smell of burnt bio-kerosene.',
            'return_text': 'Return to log'
        },
        'de': {
            'train_choice': '[Plan Omega] Gepanzerten Zug entführen und den Bunker rammen',
            'ambush_choice': '[Plan Alpha] Frontalangriff: Raketenwerfer und Cyber-Explosionen',
            'stealth_choice': 'Beim ursprünglichen Plan bleiben',
            'train_text': '*KRACH* Der gepanzerte SEC-CORP-Zug durchbricht mit voller Geschwindigkeit die Stahlbetonwand des Bunkers des Transitkommandos! Zerstörte Verteidigungsanlagen, Flammen bis zum Himmel, und unsere Cyber-Brüder mit Neon-Macheten stürzen sich direkt ins Inferno. Die Politiker hatten nicht einmal Zeit, sich in ihre Fluchtdrohnen einzuloggen.',
            'ambush_text': 'Die nächtliche Straße wurde von Neonblitzen aus unseren Panzerfäusten erhellt. Wir haben totale Verwüstung angerichtet: EMP-Granaten haben die Mechs der Regierung deaktiviert und Raketen haben ihre Befestigungen zu Staub gesprengt. Das ist nicht nur Banditentum – es ist der Abriss des alten Regimes unter dem Dröhnen von Metall und dem Geruch von verbranntem Bio-Kerosin.',
            'return_text': 'Zurück zu Reeds Tagebuch'
        },
        'es': {
            'train_choice': '[Plan Omega] Secuestrar tren blindado y embestir el búnker',
            'ambush_choice': '[Plan Alpha] Asalto frontal: lanzacohetes y ciber-explosiones',
            'stealth_choice': 'Apegarse al plan original',
            'train_text': '*¡CRASH!* ¡El tren blindado SEC-CORP atraviesa a toda velocidad el muro de hormigón armado del búnker del Comando de Tránsito! Defensas destrozadas, llamas que llegan al cielo, y nuestros ciber-hermanos con machetes de neón se sumergen directamente en el infierno. Los políticos ni siquiera tuvieron tiempo de conectarse a sus drones de escape.',
            'ambush_text': 'La calle nocturna se iluminó con los destellos de neón de nuestras bazucas. Causamos una devastación total: las granadas EMP desactivaron los robots del gobierno y los cohetes redujeron sus fortificaciones a polvo. Esto no es solo bandolerismo, es la demolición del antiguo régimen al rugido del metal y el olor a bio-queroseno quemado.',
            'return_text': 'Volver al diario de Reed'
        },
        'zh': {
            'train_choice': '[欧米茄计划] 劫持装甲列车并撞击地堡',
            'ambush_choice': '[阿尔法计划] 正面突击：火箭筒和网络爆炸',
            'stealth_choice': '坚持原计划',
            'train_text': '*轰隆！* SEC-CORP装甲列车全速撞穿了过境指挥部地堡的钢筋混凝土墙！被撕碎的防御设施，冲天的火焰，我们拿着霓虹弯刀的赛博兄弟直接冲进了火海。政客们甚至没有时间登录他们的逃生无人机。',
            'ambush_text': '夜晚的街道被我们火箭筒发出的霓虹灯闪光照亮。我们造成了彻底的破坏：EMP手榴弹使政府的机甲失效，火箭弹将他们的防御工事炸成灰烬。这不仅仅是土匪行径——这是在金属的轰鸣声和烧焦的生物煤油的气味中，对旧政权进行拆除。',
            'return_text': '返回里德的日记'
        },
        'fa': {
            'train_choice': '[طرح امگا] ربودن قطار زرهی و کوبیدن به پناهگاه',
            'ambush_choice': '[طرح آلفا] حمله از جلو: راکت اندازها و انفجارهای سایبری',
            'stealth_choice': 'به طرح اصلی پایبند باشید',
            'train_text': '*تصادف* قطار زرهی SEC-CORP با سرعت تمام از دیوار بتن آرمه پناهگاه فرماندهی ترانزیت عبور می کند! دفاعیات خرد شده، شعله های آتش به آسمان می رسد و برادران سایبری ما با قمه های نئونی مستقیماً در دوزخ فرو می روند. سیاستمداران حتی وقت نداشتند وارد پهپادهای فرار خود شوند.',
            'ambush_text': 'خیابان شب با پرتوهای نئون بازوکاهای ما روشن شد. ما ویرانی کامل ایجاد کردیم: نارنجک‌های EMP ماشین‌های دولت را از کار انداختند و موشک‌ها استحکامات آنها را به خاکستر تبدیل کردند. این فقط راهزنی نیست - این تخریب رژیم قدیمی با غرش فلز و بوی نفت سفید زیستی سوخته است.',
            'return_text': 'بازگشت به دفترچه خاطرات رید'
        }
    }

    current_lang = None
    in_part1 = False
    in_part2 = False
    warehouse_count = 0
    
    out_lines = []
    
    # We want to identify the THIRD warehouse slide in part1.
    # And we want to insert lines BEFORE part2 starts.

    for index, line in enumerate(lines):
        # DETECT LANG AND PART
        for lang in translations.keys():
            if line.strip() == f"{lang}: {{":
                current_lang = lang
                warehouse_count = 0
                break
                
        if current_lang and "part1: [" in line:
            in_part1 = True
            warehouse_count = 0
        
        if current_lang and "part2: [" in line:
            # We are hitting part2. This means part1 JUST ENDED.
            # Let's insert our NEW_TRAIN and NEW_AMBUSH slides right before the `],\n        part2: [` lines.
            # To do this safely, we will look at the previously added lines and insert there.
            # The previous lines should be `        ],`
            if out_lines[-1].strip() == "]," and out_lines[-2].strip() == "}":
                # Wait, out_lines[-1] is `        ], \n`. We pop it, insert slides, and append it back.
                last_brace_idx = len(out_lines) - 2 # the `        }` line
                t = translations[current_lang]
                insert_str = f""",
            {{
                id: "NEW_TRAIN",
                text: "{t['train_text']}",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_text']}", nextStep: 8 }}
                ]
            }},
            {{
                id: "NEW_AMBUSH",
                text: "{t['ambush_text']}",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_text']}", nextStep: 8 }}
                ]
            }}"""
                # modify the last `}` line to NOT have a comma, then add the insert string
                out_lines[last_brace_idx] = out_lines[last_brace_idx].rstrip() + insert_str + "\n"
            
            in_part1 = False
            in_part2 = True
            
        # DETECT WAREHOUSE SLIDES
        if in_part1 and "assets/images/warehouse.png" in line:
            warehouse_count += 1
            
        if in_part1 and warehouse_count == 3 and "music: \"rap\"" in line:
            # We found the slide! The line is `                music: "rap"`
            # The next line should be `            },`
            # We will append choices to this slide.
            
            # Write current line
            out_lines.append(line)
            
            # Read next line
            next_line = lines[index+1]
            if next_line.strip() == "}" or next_line.strip() == "},":
                t = translations[current_lang]
                # Replace the current line ending with a comma and add choices
                out_lines[-1] = out_lines[-1].rstrip() + ",\n"
                choices_lines = f"""                choices: [
                    {{ text: "{t['train_choice']}", nextStep: "NEW_TRAIN" }},
                    {{ text: "{t['ambush_choice']}", nextStep: "NEW_AMBUSH" }},
                    {{ text: "{t['stealth_choice']}", nextStep: 8 }}
                ]\n"""
                out_lines.append(choices_lines)
            continue
            
        out_lines.append(line)

    with open('i18n_fixed.js', 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

process()
print("done")
