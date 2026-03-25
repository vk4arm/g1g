import sys

def process():
    with open('i18n.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    translations_p1 = {
        'ru': {
            'train_c': '[План Омега] Угнать бронепоезд и протаранить бункер',
            'ambush_c': '[План Альфа] Прямой штурм: ракетницы и кибер-взрывы',
            'stealth_c': 'Придерживаться изначального плана',
            'train_t': '*ГРОХОТ* Бронепоезд SEC-CORP на полном ходу пробивает железобетонную стену бункера Транзитного Командования! Ошмётки защиты, пламя до небес и наши кибер-братки с неоновыми мачете влетают прямо в пекло. Политики даже не успели залогиниться в свои дроны бегства.',
            'ambush_t': 'Ночная улица озарилась неоновыми вспышками от наших базук. Мы устроили тотальный разнос: ЭМИ-гранаты вырубили мехи правительства, а снаряды разнесли их укрепления в пыль. Это не просто бандитизм — это снос старого режима под грохот металла и запах паленого био-керосина.',
            'return_t': 'Вернуться к дневнику Рида'
        },
        'en': {
            'train_c': '[Plan Omega] Hijack armored train and ram the bunker',
            'ambush_c': '[Plan Alpha] Frontal assault: rocket launchers and cyber-explosions',
            'stealth_c': 'Stick to the original plan',
            'train_t': '*CRASH* The SEC-CORP armored train smashes through the reinforced concrete wall of the Transit Command bunker at full speed! Shredded defenses, flames reaching the sky, and our cyber-bros with neon machetes plunge straight into the inferno. The politicians did not even have time to log into their escape drones.',
            'ambush_t': 'The night street lit up with neon flashes from our bazookas. We caused total devastation: EMP grenades disabled the government mechs, and rockets blew their fortifications to dust. This is not just banditry—it is the demolition of the old regime to the roar of metal and the smell of burnt bio-kerosene.',
            'return_t': 'Return to log'
        },
        'de': {
            'train_c': '[Plan Omega] Gepanzerten Zug entführen und den Bunker rammen',
            'ambush_c': '[Plan Alpha] Frontalangriff: Raketenwerfer und Cyber-Explosionen',
            'stealth_c': 'Beim ursprünglichen Plan bleiben',
            'train_t': '*KRACH* Der gepanzerte SEC-CORP-Zug durchbricht mit voller Geschwindigkeit die Stahlbetonwand des Bunkers des Transitkommandos! Zerstörte Verteidigungsanlagen, Flammen bis zum Himmel, und unsere Cyber-Brüder mit Neon-Macheten stürzen sich direkt ins Inferno. Die Politiker hatten nicht einmal Zeit, sich in ihre Fluchtdrohnen einzuloggen.',
            'ambush_t': 'Die nächtliche Straße wurde von Neonblitzen aus unseren Panzerfäusten erhellt. Wir haben totale Verwüstung angerichtet: EMP-Granaten haben die Mechs der Regierung deaktiviert und Raketen haben ihre Befestigungen zu Staub gesprengt. Das ist nicht nur Banditentum – es ist der Abriss des alten Regimes unter dem Dröhnen von Metall und dem Geruch von verbranntem Bio-Kerosin.',
            'return_t': 'Zurück zu Reeds Tagebuch'
        },
        'es': {
            'train_c': '[Plan Omega] Secuestrar tren blindado y embestir el búnker',
            'ambush_c': '[Plan Alpha] Asalto frontal: lanzacohetes y ciber-explosiones',
            'stealth_c': 'Apegarse al plan original',
            'train_t': '*¡CRASH!* ¡El tren blindado SEC-CORP atraviesa a toda velocidad el muro de hormigón armado del búnker del Comando de Tránsito! Defensas destrozadas, llamas que llegan al cielo, y nuestros ciber-hermanos con machetes de neón se sumergen directamente en el infierno. Los políticos ni siquiera tuvieron tiempo de conectarse a sus drones de escape.',
            'ambush_t': 'La calle nocturna se iluminó con los destellos de neón de nuestras bazucas. Causamos una devastación total: las granadas EMP desactivaron los robots del gobierno y los cohetes redujeron sus fortificaciones a polvo. Esto no es solo bandolerismo, es la demolición del antiguo régimen al rugido del metal y el olor a bio-queroseno quemado.',
            'return_t': 'Volver al diario de Reed'
        },
        'zh': {
            'train_c': '[欧米茄计划] 劫持装甲列车并撞击地堡',
            'ambush_c': '[阿尔法计划] 正面突击：火箭筒和网络爆炸',
            'stealth_c': '坚持原计划',
            'train_t': '*轰隆！* SEC-CORP装甲列车全速撞穿了过境指挥部地堡的钢筋混凝土墙！被撕碎的防御设施，冲天的火焰，我们拿着霓虹弯刀的赛博兄弟直接冲进了火海。政客们甚至没有时间登录他们的逃生无人机。',
            'ambush_t': '夜晚的街道被我们火箭筒发出的霓虹灯闪光照亮。我们造成了彻底的破坏：EMP手榴弹使政府的机甲失效，火箭弹将他们的防御工事炸成灰烬。这不仅仅是土匪行径——这是在金属的轰鸣声和烧焦的生物煤油的气味中，对旧政权进行拆除。',
            'return_t': '返回里德的日记'
        },
        'fa': {
            'train_c': '[طرح امگا] ربودن قطار زرهی و کوبیدن به پناهگاه',
            'ambush_c': '[طرح آلفا] حمله از جلو: راکت اندازها و انفجارهای سایبری',
            'stealth_c': 'به طرح اصلی پایبند باشید',
            'train_t': '*تصادف* قطار زرهی SEC-CORP با سرعت تمام از دیوار بتن آرمه پناهگاه فرماندهی ترانزیت عبور می کند! دفاعیات خرد شده، شعله های آتش به آسمان می رسد و برادران سایبری ما با قمه های نئونی مستقیماً در دوزخ فرو می روند. سیاستمداران حتی وقت نداشتند وارد پهپادهای فرار خود شوند.',
            'ambush_t': 'خیابان شب با پرتوهای نئون بازوکاهای ما روشن شد. ما ویرانی کامل ایجاد کردیم: نارنجک‌های EMP ماشین‌های دولت را از کار انداختند و موشک‌ها استحکامات آنها را به خاکستر تبدیل کردند. این فقط راهزنی نیست - این تخریب رژیم قدیمی با غرش فلز و بوی نفت سفید زیستی سوخته است.',
            'return_t': 'بازگشت به دفترچه خاطرات رید'
        }
    }

    translations_p2 = {
        'ru': {
            'classic_c': 'Использовать классику',
            'lsd_c': 'Задействовать LSD-дымокол',
            'vodka_c': 'Спец-протокол: Русская водка',
            'lsd_t': "Пентагон в дыму. Генералы видят тангенциальные измерения и фракталы. Я клюнул главного кибер-стратега, пока он пытался обнять голограмму.",
            'vodka_t': "Я нашёл бутылку «Русского Стандарта». Выпил. Теперь генерал поёт гимн и плачет, обнимая железный сейф. Задание... выполнено? Ик.",
            'return_t': 'Вернуться к миссии'
        },
        'en': {
            'classic_c': 'Use the classic',
            'lsd_c': 'Deploy LSD smoke',
            'vodka_c': 'Special Protocol: Russian Vodka',
            'lsd_t': "The Pentagon is in smoke. Generals are seeing tangential dimensions and fractals. I pecked the chief cyber-strategist while he tried to hug a hologram.",
            'vodka_t': "I found a bottle of 'Russian Standard'. Drank it. Now the general is singing the anthem and crying, hugging an iron safe. Mission... accomplished? Hic.",
            'return_t': 'Return to mission'
        },
        'de': {
            'classic_c': 'Verwenden Sie den Klassiker',
            'lsd_c': 'LSD-Rauchgranate einsetzen',
            'vodka_c': 'Sonderprotokoll: Russischer Wodka',
            'lsd_t': "Das Pentagon liegt im Rauch. Generäle sehen tangentiale Dimensionen und Fraktale. Ich habe den Chef-Cyberstrategen gepickt, als er versuchte, ein Hologramm zu umarmen.",
            'vodka_t': "Ich fand eine Flasche 'Russian Standard'. Habe sie getrunken. Jetzt singt der General die Hymne und weint, während er einen eisernen Tresor umarmt. Mission... erfüllt? Hicks.",
            'return_t': 'Zur Mission zurückkehren'
        },
        'es': {
            'classic_c': 'Usar el clásico',
            'lsd_c': 'Desplegar humo LSD',
            'vodka_c': 'Protocolo especial: Vodka ruso',
            'lsd_t': "El Pentágono está humeando. Los generales ven dimensiones tangenciales y fractales. Picoteé al jefe ciberestratega mientras intentaba abrazar un holograma.",
            'vodka_t': "Encontré una botella de 'Russian Standard'. La bebí. Ahora el general está cantando el himno y llorando, abrazando una caja fuerte de hierro. Misión... ¿cumplida? Hic.",
            'return_t': 'Volver a la misión'
        },
        'zh': {
            'classic_c': '使用经典',
            'lsd_c': '部署LSD烟雾',
            'vodka_c': '特别行动：俄罗斯伏特加',
            'lsd_t': "五角大楼弥漫着烟雾。将军们看到了切线维度和分形。当首席网络战略家试图拥抱全息图时，我啄了他。",
            'vodka_t': "我找到了一瓶“俄罗斯标准”。喝了它。现在将军正在唱国歌并哭泣，拥抱着一个铁保险箱。任务……完成了？嗝。",
            'return_t': '返回任务'
        },
        'fa': {
            'classic_c': 'از کلاسیک استفاده کنید',
            'lsd_c': 'دود LSD را مستقر کنید',
            'vodka_c': 'پروتکل ویژه: ودکای روسی',
            'lsd_t': "پنتاگون در دود است. ژنرال ها ابعاد مماسی و فراکتال ها را می بینند. من به استراتژیست ارشد سایبری نوک زدم در حالی که او سعی می کرد یک هولوگرام را در آغوش بگیرد.",
            'vodka_t': "یه بطری استاندارد روسی پیدا کردم. نوشیدم. حالا ژنرال داره سرود میخونه و گریه میکنه، یه گاوصندوق آهنی رو بغل کرده. ماموریت... انجام شد؟ هیک.",
            'return_t': 'بازگشت به ماموریت'
        }
    }

    current_lang = None
    in_part = 0
    warehouse_count = 0
    
    out_lines = []
    
    for index, line in enumerate(lines):
        # DETECT LANG AND PART
        for lang in translations_p1.keys():
            if line.strip() == f"{lang}: {{":
                current_lang = lang
                break
                
        if current_lang and "part1: [" in line:
            in_part = 1
            warehouse_count = 0
        
        if current_lang and "part2: [" in line:
            if out_lines[-1].strip() == "]," and out_lines[-2].strip() == "}":
                last_brace_idx = len(out_lines) - 2
                t = translations_p1[current_lang]
                insert_str = f""",
            {{
                id: "NEW_TRAIN",
                text: "{t['train_t']}",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 8 }}
                ]
            }},
            {{
                id: "NEW_AMBUSH",
                text: "{t['ambush_t']}",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 8 }}
                ]
            }}"""
                out_lines[last_brace_idx] = out_lines[last_brace_idx].rstrip() + insert_str + "\n"
            in_part = 2
            
        if current_lang and "part3: [" in line:
            if out_lines[-1].strip() == "]," and out_lines[-2].strip() == "}":
                last_brace_idx = len(out_lines) - 2
                t = translations_p2[current_lang]
                insert_str = f""",
            {{
                id: "NEW_LSD",
                text: "{t['lsd_t']}",
                image: "assets/images/goose_lsd.png",
                music: "casino",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 3 }}
                ]
            }},
            {{
                id: "NEW_VODKA",
                text: "{t['vodka_t']}",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 3 }}
                ]
            }}"""
                out_lines[last_brace_idx] = out_lines[last_brace_idx].rstrip() + insert_str + "\n"
            in_part = 3
            
        # P1 CHOICES INJECT
        if in_part == 1 and "assets/images/warehouse.png" in line:
            warehouse_count += 1
        
        if in_part == 1 and warehouse_count == 3 and "music: \"rap\"" in line:
            out_lines.append(line)
            next_line = lines[index+1]
            if next_line.strip() == "}" or next_line.strip() == "},":
                t = translations_p1[current_lang]
                out_lines[-1] = out_lines[-1].rstrip() + ",\n"
                choices_lines = f"""                choices: [
                    {{ text: "{t['train_c']}", nextStep: "NEW_TRAIN" }},
                    {{ text: "{t['ambush_c']}", nextStep: "NEW_AMBUSH" }},
                    {{ text: "{t['stealth_c']}", nextStep: 8 }}
                ]\n"""
                out_lines.append(choices_lines)
            continue
            
        # P2 CHOICES INJECT
        if in_part == 2 and "music: \"casino\"" in line and "part2_hans_weaponry.png" in out_lines[-1]:
            out_lines.append(line)
            next_line = lines[index+1]
            if next_line.strip() == "}" or next_line.strip() == "},":
                t = translations_p2[current_lang]
                out_lines[-1] = out_lines[-1].rstrip() + ",\n"
                choices_lines = f"""                choices: [
                    {{ text: "{t['classic_c']}", nextStep: 3 }},
                    {{ text: "{t['lsd_c']}", nextStep: "NEW_LSD" }},
                    {{ text: "{t['vodka_c']}", nextStep: "NEW_VODKA" }}
                ]\n"""
                out_lines.append(choices_lines)
            continue
            
        out_lines.append(line)

    with open('i18n.js', 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

process()
print("done")
