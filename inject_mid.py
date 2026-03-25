import sys

def process():
    with open('i18n.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    translations_p1 = {
        'ru': {
            'c1': 'Подключить гуся к нейро-сети (Риск кибер-психоза)',
            'c2': 'Просто замотать ему клюв изолентой',
            'trip_t': 'Я воткнул кабель ему в порт. Реальность треснула. Мой мозг обволокла неоновая фрактальная матрица. Я увидел мир глазами гуся — это бесконечный цифровой кошмар, где мы лишь пищевой код для высших кибер-птиц. Меня вырвало, но я понял: они нами играют.',
            'cont_c': 'Продолжить',
        },
        'en': {
            'c1': 'Connect goose to neuro-network (Risk of cyber-psychosis)',
            'c2': 'Just tape its beak shut',
            'trip_t': 'I plugged the cable into his port. Reality fractured. My brain was enveloped in a neon fractal matrix. I saw the world through the goose\'s eyes — it\'s an endless digital nightmare where we are merely food code for higher cyber-birds. I threw up, but I understood: they are playing us.',
            'cont_c': 'Continue',
        },
        'de': {
            'c1': 'Gans an neuronales Netzwerk anschließen (Risiko einer Cyberpsychose)',
            'c2': 'Den Schnabel einfach mit Klebeband zukleben',
            'trip_t': 'Ich steckte das Kabel in seinen Port. Die Realität brach zusammen. Mein Gehirn wurde in eine neonfarbene fraktale Matrix gehüllt. Ich sah die Welt durch die Augen der Gans — es ist ein endloser digitaler Albtraum, wo wir nur Nahrungscode für höhere Cyber-Vögel sind. Ich übergab mich, aber ich verstand: Sie spielen mit uns.',
            'cont_c': 'Fortsetzen',
        },
        'es': {
            'c1': 'Conectar el ganso a la red neuronal (Riesgo de ciberpsicosis)',
            'c2': 'Simplemente cerrarle el pico con cinta adhesiva',
            'trip_t': 'Conecté el cable en su puerto. La realidad se fracturó. Mi cerebro se envolvió en una matriz fractal de neón. Vi el mundo a través de los ojos del ganso — es una pesadilla digital interminable donde solo somos código alimenticio para ciber-aves superiores. Vomité, pero entendí: están jugando con nosotros.',
            'cont_c': 'Continuar',
        },
        'zh': {
            'c1': '将鹅连接到神经网络（有赛博精神病的风险）',
            'c2': '直接用胶带封住它的嘴',
            'trip_t': '我把电缆插进了他的端口。现实碎裂了。我的大脑被耀眼的霓虹分形矩阵包裹。我通过鹅的眼睛看到了世界——这是一个无尽的数字噩梦，我们只是高级赛博鸟类的食物代码。我吐了，但我明白了：它们在玩弄我们。',
            'cont_c': '继续',
        },
        'fa': {
            'c1': 'اتصال غاز به شبکه عصبی (خطر سایبرسایکوز)',
            'c2': 'فقط نوکش را با چسب ببندید',
            'trip_t': 'کابل را به پورت آن وصل کردم. واقعیت در هم شکست. مغز من در یک ماتریس فراکتال نئونی پیچیده شد. من دنیا را از چشم غاز دیدم — این یک کابوس دیجیتال بی پایان است که در آن ما فقط کد غذایی برای پرندگان سایبری بالاتر هستیم. بالا آوردم، اما فهمیدم: آنها دارند با ما بازی می کنند.',
            'cont_c': 'ادامه',
        }
    }

    translations_p2 = {
        'ru': {
            'c1': 'Сделать сброс в серверную (Взлом протокола)',
            'c2': 'Свернуть на кухню высшего командования',
            'pizza_t': 'Почему бы и нет? Вентиляция вывела меня в элитную столовую генералов. Я в полете разнес поднос с кибер-шаурмой, приземлился на стол и устроил пир среди неоновых огней Пентагона. Охрана была в ужасе от моей наглости. Я гусь, я взял то, что по праву моё.',
        },
        'en': {
            'c1': 'Drop into the server room (Hack protocol)',
            'c2': 'Turn to the High Command Cafeteria',
            'pizza_t': 'Why not? The vent led me to the elite generals\' cafeteria. I smashed a tray of cyber-shawarma mid-flight, landed on the table, and feasted amid the neon lights of the Pentagon. The guards were terrified by my audacity. I\'m a goose, I took what\'s rightfully mine.',
        },
        'de': {
            'c1': 'Sich in den Serverraum fallen lassen (Protokoll hacken)',
            'c2': 'Wende dich der Cafeteria des Oberkommandos zu',
            'pizza_t': 'Warum nicht? Die Lüftung führte mich in die elitäre Generalkantine. Ich zertrümmerte im Flug ein Tablett mit Cyber-Shawarma, landete auf dem Tisch und schmauste im Neonlicht des Pentagons. Die Wachen waren über meine Dreistigkeit entsetzt. Ich bin eine Gans, ich habe mir genommen, was mir zusteht.',
        },
        'es': {
            'c1': 'Caer en la sala de servidores (Protocolo de hackeo)',
            'c2': 'Ir a la cafetería del Alto Mando',
            'pizza_t': '¿Por qué no? El conducto de ventilación me llevó a la cafetería de élite de los generales. Destrocé una bandeja de ciber-shawarma en pleno vuelo, aterricé sobre la mesa y me di un festín entre las luces de neón del Pentágono. Los guardias estaban aterrorizados por mi audacia. Soy un ganso, tomé lo que me pertenece por derecho.',
        },
        'zh': {
            'c1': '潜入服务器机房（破解协议）',
            'c2': '转向最高指挥部自助餐厅',
            'pizza_t': '有何不可？通风口将我引向了将领们的精英餐厅。在飞行中我撞碎了一盘赛博沙威玛，降落在桌面上，在五角大楼的霓虹灯下大快朵颐。保安们对我的狂妄感到恐惧。我是一只鹅，我拿走了我理所应得的东西。',
        },
        'fa': {
            'c1': 'سقوط به اتاق سرور (پروتکل هک)',
            'c2': 'به سمت کافه تریا فرماندهی عالی بپیچید',
            'pizza_t': 'چرا که نه؟ دریچه تهویه من را به کافه تریای نخبه ژنرال ها رساند. در حال پرواز یک سینی سایبرشاورما را خرد کردم، روی میز فرود آمدم و در میان چراغ های نئونی پنتاگون یک مهمانی برپا کردم. نگهبانان از جسارت من وحشت زده شده بودند. من یک غازم، من چیزی که حقمه رو برداشتم.',
        }
    }

    translations_p3 = {
        'ru': {
            'c1': 'Поддаться меметическому воздействию (Взглянуть)',
            'c2': 'Активировать firewall и закрыть глаза',
            'angel_t': 'Я не смог закрыть глаза. Айла расправила свои пылающие голографические крылья. Она стала божеством разрушения в этом проклятом зале. Забыв про щиты и импланты, я просто стоял на коленях и молился гусиному божеству под грохот обрушающейся Империи.',
        },
        'en': {
            'c1': 'Succumb to memetic influence (Look)',
            'c2': 'Activate firewall and close eyes',
            'angel_t': 'I couldn\'t close my eyes. Aila spread her blazing holographic wings. She became a deity of destruction in this damned hall. Forgetting about shields and implants, I just knelt down and prayed to the goose deity under the roar of the collapsing Empire.',
        },
        'de': {
            'c1': 'Memetischem Einfluss erliegen (Ansehen)',
            'c2': 'Firewall aktivieren und Augen schließen',
            'angel_t': 'Ich konnte die Augen nicht schließen. Aila breitete ihre flammenden holografischen Flügel aus. Sie wurde zu einer Gottheit der Zerstörung in diesem verdammten Saal. Von Schilden und Implantaten vergessend, kniete ich nur nieder und betete unter dem Dröhnen des zusammenbrechenden Imperiums zu der Gänsegottheit.',
        },
        'es': {
            'c1': 'Sucumbir a la influencia memética (Mirar)',
            'c2': 'Activar firewall y cerrar los ojos',
            'angel_t': 'No pude cerrar los ojos. Aila desplegó sus ardientes alas holográficas. Se convirtió en una deidad de la destrucción en este salón condenado. Olvidando escudos e implantes, me arrodillé y oré a la deidad gansa bajo el rugido del Imperio colapsando.',
        },
        'zh': {
            'c1': '屈服于模因影响（注视）',
            'c2': '激活防火墙并闭上眼睛',
            'angel_t': '我无法闭上双眼。艾拉展开了她闪耀的全息翅膀。在这个被诅咒的大厅里，她成为了毁灭的神明。我忘记了护盾和植入物，只是跪在坍塌中的帝国的轰鸣声里，向这只鹅神祈祷。',
        },
        'fa': {
            'c1': 'تسلیم نفوذ ممتیک شوید (نگاه کنید)',
            'c2': 'فایروال را فعال کنید و چشمان خود را ببندید',
            'angel_t': 'نمیتونستم چشمام رو ببندم. آیلا بال های هولوگرافیک سوزان خود را گشود. او در این سالن نفرین شده تبدیل به خدای ویرانی شد. سپرها و ایمپلنت ها را فراموش کردم، فقط زانو زدم و در زیر غرش امپراتوری در حال فروپاشی، در برابر خدای غاز نماز خواندم.',
        }
    }

    current_lang = None
    out_lines = []
    
    # State tracking variables
    inject_p1_next_slide = False
    inject_p2_next_slide = False
    inject_p3_next_slide = False

    for i, line in enumerate(lines):
        # DETECT LANG
        for lang in ['ru', 'en', 'de', 'es', 'zh', 'fa']:
            if line.strip() == f"{lang}: {{":
                current_lang = lang
                break
        
        # Look for the target slides to inject choices
        if current_lang and 'image: "assets/images/goose.png"' in line and '"part1"' not in line: 
            # Part 1 trigger. The next line should be music (or we can just append choices to the current object).
            # We must be careful because in part1, image: goose is used once.
            pass
            
        # Instead of that, a safer way is to check the previous lines built in `out_lines`.
        out_lines.append(line)
        
        # -- PART 1 INJECTION --
        if current_lang and 'music: ' in line and len(out_lines) >= 2 and 'image: "assets/images/goose.png"' in out_lines[-2]:
            t = translations_p1[current_lang]
            # Replace the newline on the current music line with a comma
            out_lines[-1] = out_lines[-1].rstrip() + ",\n"
            choices_lines = f"""                choices: [
                    {{ text: "{t['c1']}", nextStep: "NEW_TRIP" }},
                    {{ text: "{t['c2']}", nextStep: "RESUME_P1" }}
                ]\n"""
            out_lines.append(choices_lines)
            inject_p1_next_slide = True
            
        elif inject_p1_next_slide and line.strip() == "{":
            # We are at the start of the next canonical slide in Part 1. We must inject our result slide BEFORE this,
            # AND add id:"RESUME_P1" to this canonical slide.
            t = translations_p1[current_lang]
            insert_str = f"""                id: "NEW_TRIP",
                text: "{t['trip_t']}",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    {{ text: "{t['cont_c']}", nextStep: "RESUME_P1" }}
                ]
            }},
            {{
                id: "RESUME_P1",\n"""
            # Replace the current line "            {"
            out_lines[-1] = "            {\n" + insert_str
            inject_p1_next_slide = False

        # -- PART 2 INJECTION --
        if current_lang and 'music: ' in line and len(out_lines) >= 2 and 'image: "assets/images/part2_hans_weaponry.png"' in out_lines[-2]:
            t = translations_p2[current_lang]
            out_lines[-1] = out_lines[-1].rstrip() + ",\n"
            choices_lines = f"""                choices: [
                    {{ text: "{t['c1']}", nextStep: "RESUME_P2" }},
                    {{ text: "{t['c2']}", nextStep: "NEW_PIZZA" }}
                ]\n"""
            out_lines.append(choices_lines)
            inject_p2_next_slide = True
            
        elif inject_p2_next_slide and line.strip() == "{":
            t = translations_p2[current_lang]
            insert_str = f"""                id: "NEW_PIZZA",
                text: "{t['pizza_t']}",
                image: "assets/images/goose_pizza.png",
                music: "casino",
                choices: [
                    {{ text: "{translations_p1[current_lang]['cont_c']}", nextStep: "RESUME_P2" }}
                ]
            }},
            {{
                id: "RESUME_P2",\n"""
            out_lines[-1] = "            {\n" + insert_str
            inject_p2_next_slide = False

        # -- PART 3 INJECTION --
        if current_lang and 'music: ' in line and len(out_lines) >= 2 and 'image: "assets/images/part3_aila.png"' in out_lines[-2]:
            t = translations_p3[current_lang]
            out_lines[-1] = out_lines[-1].rstrip() + ",\n"
            choices_lines = f"""                choices: [
                    {{ text: "{t['c1']}", nextStep: "NEW_ANGEL" }},
                    {{ text: "{t['c2']}", nextStep: "RESUME_P3" }}
                ]\n"""
            out_lines.append(choices_lines)
            inject_p3_next_slide = True
            
        elif inject_p3_next_slide and line.strip() == "{":
            t = translations_p3[current_lang]
            insert_str = f"""                id: "NEW_ANGEL",
                text: "{t['angel_t']}",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    {{ text: "{translations_p1[current_lang]['cont_c']}", nextStep: "RESUME_P3" }}
                ]
            }},
            {{
                id: "RESUME_P3",\n"""
            out_lines[-1] = "            {\n" + insert_str
            inject_p3_next_slide = False

    with open('i18n.js', 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

process()
print("done")
