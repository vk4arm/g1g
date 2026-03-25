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
            'return_t': 'Завершить уровень / Terminate'
        }
    }

    translations_p2 = {
        'ru': {
            'classic_c': 'Использовать классику',
            'lsd_c': 'Задействовать LSD-дымокол',
            'vodka_c': 'Спец-протокол: Русская водка',
            'lsd_t': "Пентагон в дыму. Генералы видят тангенциальные измерения и фракталы. Я клюнул главного кибер-стратега, пока он пытался обнять голограмму.",
            'vodka_t': "Я нашёл бутылку «Русского Стандарта». Выпил. Теперь генерал поёт гимн и плачет, обнимая железный сейф. Задание... выполнено? Ик.",
            'return_t': 'Завершить уровень / Terminate'
        },
        'en': {
            'classic_c': 'Use the classic',
            'lsd_c': 'Deploy LSD smoke',
            'vodka_c': 'Special Protocol: Russian Vodka',
            'lsd_t': "The Pentagon is in smoke. Generals are seeing tangential dimensions and fractals. I pecked the chief cyber-strategist while he tried to hug a hologram.",
            'vodka_t': "I found a bottle of 'Russian Standard'. Drank it. Now the general is singing the anthem and crying, hugging an iron safe. Mission... accomplished? Hic.",
            'return_t': 'Завершить уровень / Terminate'
        },
        'de': {
            'classic_c': 'Verwenden Sie den Klassiker',
            'lsd_c': 'LSD-Rauchgranate einsetzen',
            'vodka_c': 'Sonderprotokoll: Russischer Wodka',
            'lsd_t': "Das Pentagon liegt im Rauch. Generäle sehen tangentiale Dimensionen und Fraktale. Ich habe den Chef-Cyberstrategen gepickt, als er versuchte, ein Hologramm zu umarmen.",
            'vodka_t': "Ich fand eine Flasche 'Russian Standard'. Habe sie getrunken. Jetzt singt der General die Hymne und weint, während er einen eisernen Tresor umarmt. Mission... erfüllt? Hicks.",
            'return_t': 'Завершить уровень / Terminate'
        },
        'es': {
            'classic_c': 'Usar el clásico',
            'lsd_c': 'Desplegar humo LSD',
            'vodka_c': 'Protocolo especial: Vodka ruso',
            'lsd_t': "El Pentágono está humeando. Los generales ven dimensiones tangenciales y fractales. Picoteé al jefe ciberestratega mientras intentaba abrazar un holograma.",
            'vodka_t': "Encontré una botella de 'Russian Standard'. La bebí. Ahora el general está cantando el himno y llorando, abrazando una caja fuerte de hierro. Misión... ¿cumplida? Hic.",
            'return_t': 'Завершить уровень / Terminate'
        },
        'zh': {
            'classic_c': '使用经典',
            'lsd_c': '部署LSD烟雾',
            'vodka_c': '特别行动：俄罗斯伏特加',
            'lsd_t': "五角大楼弥漫着烟雾。将军们看到了切线维度和分形。当首席网络战略家试图拥抱全息图时，我啄了他。",
            'vodka_t': "我找到了一瓶“俄罗斯标准”。喝了它。现在将军正在唱国歌并哭泣，拥抱着一个铁保险箱。任务……完成了？嗝。",
            'return_t': 'Завершить уровень / Terminate'
        },
        'fa': {
            'classic_c': 'از کلاسیک استفاده کنید',
            'lsd_c': 'دود LSD را مستقر کنید',
            'vodka_c': 'پروتکل ویژه: ودکای روسی',
            'lsd_t': "پنتاگون در دود است. ژنرال ها ابعاد مماسی و فراکتال ها را می بینند. من به استراتژیست ارشد سایبری نوک زدم در حالی که او سعی می کرد یک هولوگرام را در آغوش بگیرد.",
            'vodka_t': "یه بطری استاندارد روسی پیدا کردم. نوشیدم. حالا ژنرال داره سرود میخونه و گریه میکنه، یه گاوصندوق آهنی رو بغل کرده. ماموریت... انجام شد؟ هیک.",
            'return_t': 'Завершить уровень / Terminate'
        }
    }

    translations_p3 = {
        'ru': {
            'cult_c': '[Отдаться культу] Принять кибер-причастие от Гуся-Епископа',
            'escape_c': '[Бегство] Надеть противогаз и спасаться с остатками элиты',
            'surrender_c': 'Сдаться системе (Закончить запись)',
            'cult_t': 'Я пал на колени. Огромный кибер-гусь в неоновой митре епископа протянул мне светящуюся техно-сферу. Женщины в латексе и противогазах молились вокруг нас. Я вкусил цифровое причастие — и старый мир растворился в священном фрактальном гоготе.',
            'escape_t': 'Мы бежали. Жены сенаторов и эскортницы в светящихся противогазах в панике пробивались сквозь руины банкетного зала, спасаясь от гигантских железных птиц. Неоновые кресты на стенах мигали, как насмешка. Мы выжили, но навсегда остались трусами в новом пернатом мире.',
            'return_t': 'Завершить уровень / Terminate'
        },
        'en': {
            'cult_c': '[Surrender to cult] Accept cyber-communion from the Bishop Goose',
            'escape_c': '[Escape] Put on a gas mask and flee with the remnants of the elite',
            'surrender_c': 'Surrender to the system (End recording)',
            'cult_t': 'I fell to my knees. A giant cyber-goose in a neon bishop\'s mitre offered me a glowing tech orb. Women in latex and gas masks prayed around us. I tasted the digital communion — and the old world dissolved in holy fractal honking.',
            'escape_t': 'We ran. Senators\' wives and escorts in glowing gas masks panicked through the ruined banquet hall, fleeing from giant iron birds. Neon crosses on the walls blinked like a mockery. We survived, but forever remained cowards in the new feathered world.',
            'return_t': 'Завершить уровень / Terminate'
        },
        'de': {
            'cult_c': '[Dem Kult hingeben] Das Cyber-Abendmahl vom Bischof-Gans empfangen',
            'escape_c': '[Flucht] Gasmaske aufsetzen und mit den Resten der Elite fliehen',
            'surrender_c': 'Dem System ergeben (Aufnahme beenden)',
            'cult_t': 'Ich fiel auf die Knie. Eine riesige Cyber-Gans in einer neonfarbenen Bischofsmitra reichte mir eine leuchtende Tech-Kugel. Frauen in Latex und Gasmasken beteten um uns herum. Ich kostete das digitale Abendmahl – und die alte Welt löste sich in heiligem fraktalem Schnattern auf.',
            'escape_t': 'Wir rannten. Die Frauen der Senatoren und Escort-Damen in leuchtenden Gasmasken durchbrachen in Panik die Ruinen des Bankettsaals auf der Flucht vor den riesigen Eisenvögeln. Neonkreuze an den Wänden blinkten wie ein Hohn. Wir überlebten, aber blieben für immer Feiglinge in der neuen gefiederten Welt.',
            'return_t': 'Завершить уровень / Terminate'
        },
        'es': {
            'cult_c': '[Rendirse al culto] Aceptar la ciber-comunión del Ganso Obispo',
            'escape_c': '[Escape] Ponerse una máscara de gas y huir con los restos de la élite',
            'surrender_c': 'Rendirse al sistema (Finalizar grabación)',
            'cult_t': 'Caí de rodillas. Un ganso cibernético gigante con una mitra de obispo de neón me ofreció un orbe tecnológico brillante. Mujeres en látex y máscaras de gas rezaban a nuestro alrededor. Probé la comunión digital y el viejo mundo se disolvió en un graznido fractal sagrado.',
            'escape_t': 'Corrimos. Las esposas de los senadores y las acompañantes con máscaras de gas brillantes rompieron en pánico por los restos de la sala de banquetes, huyendo de aves gigantes de hierro. Cruces de neón en las paredes parpadeaban como una burla. Sobrevivimos, pero seguimos siendo cobardes para siempre en un nuevo mundo emplumado.',
            'return_t': 'Завершить уровень / Terminate'
        },
        'zh': {
            'cult_c': '[向邪教投降] 接受主教鹅的网络圣餐',
            'escape_c': '[逃跑] 戴上防毒面具，与剩下的精英一起逃离',
            'surrender_c': '向系统投降（结束录音）',
            'cult_t': '我跪了下来。一只戴着霓虹主教帽的巨大机械鹅向我提供了一个发光的科技球。周围穿着乳胶和防毒面具的女人在祈祷。我品尝了数字圣餐——旧世界在神圣的分形鹅叫声中溶解。',
            'escape_t': '我们跑了。参议员的妻子和带着发光防毒面具的陪同人员在宴会厅的废墟中惊慌失措，躲避着巨大的铁鸟。墙上的霓虹灯十字架像嘲笑一样闪烁。我们幸存下来，但在新的有羽毛的世界里永远成为了懦夫。',
            'return_t': 'Завершить уровень / Terminate'
        },
        'fa': {
            'cult_c': '[تسلیم فرقه شدن] دریافت عشای ربانی سایبری از غاز اسقف',
            'escape_c': '[فرار] ماسک گاز بزنید و با بقایای نخبگان فرار کنید',
            'surrender_c': 'تسلیم سیستم شدن (پایان ضبط)',
            'cult_t': 'به زانو افتادم. یک غاز سایبری غول پیکر با کلاه اسقف نئونی یک گوی درخشان فناوری به من تعارف کرد. زنان با لباس‌های لاتکس و ماسک گاز دور ما دعا می‌کردند. من عشای ربانی دیجیتال را چشیدم - و دنیای قدیم در صدای کواک مقدس و فراکتال حل شد.',
            'escape_t': 'ما دویدیم. همسران سناتورها و اسکورت‌ها با ماسک‌های گاز درخشان، در میان ویرانه‌های سالن ضیافت در حال وحشت، از پرندگان آهنی غول پیکر فرار می‌کردند. صلیب های نئونی روی دیوارها مانند یک تمسخر چشمک می‌زدند. ما زنده ماندیم، ولی برای همیشه در دنیای جدید پردار بزدل ماندیم.',
            'return_t': 'Завершить уровень / Terminate'
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
                # Wait, out_lines[-2] is the last slide's closing brace `    }`
                # We want to inject choices onto THAT last slide!
                # The line before `}` is usually music. We can find the last `}` and insert choices before it.
                last_brace_idx = len(out_lines) - 2
                t = translations_p1[current_lang]
                
                # Add comma to the previous line (e.g. music: "...")
                out_lines[last_brace_idx-1] = out_lines[last_brace_idx-1].rstrip() + ",\n"

                # Insert choices into the last slide of part 1
                choices_lines = f"""                choices: [
                    {{ text: "{t['train_c']}", nextStep: "NEW_TRAIN" }},
                    {{ text: "{t['ambush_c']}", nextStep: "NEW_AMBUSH" }},
                    {{ text: "{t['stealth_c']}", nextStep: 999 }}
                ]\n            }}\n"""
                out_lines[last_brace_idx] = choices_lines

                # Now insert the new result slides
                insert_str = f""",
            {{
                id: "NEW_TRAIN",
                text: "{t['train_t']}",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }},
            {{
                id: "NEW_AMBUSH",
                text: "{t['ambush_t']}",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }}"""
                out_lines.insert(last_brace_idx + 1, insert_str + "\n")
            in_part = 2
            
        if current_lang and "part3: [" in line:
            if out_lines[-1].strip() == "]," and out_lines[-2].strip() == "}":
                last_brace_idx = len(out_lines) - 2
                t = translations_p2[current_lang]
                
                # Add comma to the previous line
                out_lines[last_brace_idx-1] = out_lines[last_brace_idx-1].rstrip() + ",\n"

                # Insert choices into the last slide of part 2
                choices_lines = f"""                choices: [
                    {{ text: "{t['classic_c']}", nextStep: 999 }},
                    {{ text: "{t['lsd_c']}", nextStep: "NEW_LSD" }},
                    {{ text: "{t['vodka_c']}", nextStep: "NEW_VODKA" }}
                ]\n            }}\n"""
                out_lines[last_brace_idx] = choices_lines

                # Now insert the new result slides
                insert_str = f""",
            {{
                id: "NEW_LSD",
                text: "{t['lsd_t']}",
                image: "assets/images/goose_lsd.png",
                music: "casino",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }},
            {{
                id: "NEW_VODKA",
                text: "{t['vodka_t']}",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }}"""
                out_lines.insert(last_brace_idx + 1, insert_str + "\n")
            in_part = 3
            
        if in_part == 3 and (line.strip() == "}," or line.strip() == "};"):
            if len(out_lines) >= 2 and out_lines[-1].strip() == "]" and out_lines[-2].strip() == "}":
                last_brace_idx = len(out_lines) - 2
                t = translations_p3[current_lang]
                
                # Add comma to the previous line
                out_lines[last_brace_idx-1] = out_lines[last_brace_idx-1].rstrip() + ",\n"

                # Insert choices into the last slide of part 3
                choices_lines = f"""                choices: [
                    {{ text: "{t['cult_c']}", nextStep: "NEW_CULT" }},
                    {{ text: "{t['escape_c']}", nextStep: "NEW_ESCAPE" }},
                    {{ text: "{t['surrender_c']}", nextStep: 999 }}
                ]\n            }}\n"""
                out_lines[last_brace_idx] = choices_lines

                # Now insert the new result slides
                insert_str = f""",
            {{
                id: "NEW_CULT",
                text: "{t['cult_t']}",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }},
            {{
                id: "NEW_ESCAPE",
                text: "{t['escape_t']}",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    {{ text: "{t['return_t']}", nextStep: 999 }}
                ]
            }}"""
                out_lines.insert(last_brace_idx + 1, insert_str + "\n")
                
                in_part = 0 # Reset so it doesn't trigger repeatedly

        # P2 CHOICES INJECT (Removed, now handled at the end of part 2)
            
        out_lines.append(line)

    with open('i18n.js', 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

process()
print("done")
