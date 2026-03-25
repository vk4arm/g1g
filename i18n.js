const uiStrings = {
    ru: {
        startPart1: "НАЧАТЬ ЧАСТЬ 1: ТЕХНОКЛЯТВА",
        startPart2: "НАЧАТЬ ЧАСТЬ 2: ГУСИНЫЙ КОДЕКС",
        startPart3: "НАЧАТЬ ЧАСТЬ 3: ОРГИЙНЫЙ КОЛЛАПС",
        loading: "ЗАГРУЗКА НЕЙРОСЕТЕЙ...",
        instruction: "НАЖМИТЕ ИЛИ ПРОБЕЛ ДЛЯ ПРОДОЛЖЕНИЯ",
        continued: "продолжение следует... 2026 <br> КомментыЛайкиРепостыКолокольчик... А впрочем, пофиг )",
        viewMode: "👁️ ВИД",
        exitView: "❌ ВЫХОД",
        share: "РАСПРОСТРАНИТЬ ПРОТОКОЛ",
        copied: "ПРОТОКОЛ СКОПИРОВАН",
        achievements: "ДОСТИЖЕНИЯ"
    },
    en: {
        startPart1: "START PART 1: TECH-OATH",
        startPart2: "START PART 2: THE GOOSE CODE",
        startPart3: "START PART 3: ORGIastic COLLAPSE",
        loading: "LOADING NEURAL NETWORKS...",
        instruction: "CLICK OR PRESS SPACE TO CONTINUE",
        continued: "to be continued... 2026 <br> CommentsLikesSharesBell... Whatever, I don't care )",
        viewMode: "👁️ VIEW",
        exitView: "❌ EXIT",
        share: "BROADCAST PROTOCOL",
        copied: "PROTOCOL COPIED",
        achievements: "ACHIEVEMENTS"
    },
    de: {
        startPart1: "TEIL 1 STARTEN: TECH-EID",
        startPart2: "TEIL 2 STARTEN: DER GÄNSE-KODEX",
        startPart3: "TEIL 3 STARTEN: ORGIASTISCHER KOLLAPS",
        loading: "NEURONALE NETZE LADEN...",
        instruction: "KLICKEN ODER LEERTASTE DRÜCKEN",
        continued: "Fortsetzung folgt... 2026 <br> KommentareLikesSharesGlocke... Wie auch immer, egal )",
        viewMode: "👁️ ANSICHT",
        exitView: "❌ BEENDEN",
        share: "PROTOKOLL VERBREITEN",
        copied: "PROTOKOLL KOPIERT",
        achievements: "ERFOLGE"
    },
    es: {
        startPart1: "INICIAR PARTE 1: JURAMENTO TECNO",
        startPart2: "INICIAR PARTE 2: EL CÓDIGO GANSO",
        startPart3: "INICIAR PARTE 3: COLAPSO ORGIÁSTICO",
        loading: "CARGANDO REDES NEURONALES...",
        instruction: "HAZ CLIC O PULSA ESPACIO PARA CONTINUAR",
        continued: "continuará... 2026 <br> ComentariosLikesCompartirCampana... Como sea, no importa )",
        viewMode: "👁️ VER",
        exitView: "❌ SALIR",
        share: "DIFUNDIR PROTOCOLO",
        copied: "PROTOCOLO COPIADO",
        achievements: "LOGROS"
    },
    zh: {
        startPart1: "开始第一部分：技术誓言",
        startPart2: "开始第二部分：鹅之法典",
        startPart3: "开始第三部分：狂欢式崩塌",
        loading: "正在加载神经网络...",
        instruction: "点击或按空格键继续",
        continued: "未完待续... 2026 <br> 评论点赞转发小铃铛... 随便吧，我不在乎 )",
        viewMode: "👁️ 视图",
        exitView: "❌ 退出",
        share: "传播协议",
        copied: "协议已复制",
        achievements: "成就"
    },
    fa: {
        startPart1: "شروع بخش ۱: سوگند تکنولوژی",
        startPart2: "شروع بخش ۲: کد غاز",
        startPart3: "شروع بخش ۳: فروپاشی ارگاستیک",
        loading: "در حال بارگذاری شبکه‌های عصبی...",
        instruction: "برای ادامه کلیک کنید یا اسپیس را بزنید",
        continued: "ادامه دارد... ۲۰۲۶ <br> کامنت لایک اشتراک‌گذاری... به هر حال، برام مهم نیست )",
        viewMode: "👁️ نما",
        exitView: "❌ خروج",
        share: "پروتکل پخش",
        copied: "پروتکل کپی شد",
        achievements: "دستاوردها"
    }
};

const allStories = {
    ru: {
        part1: [
            {
                text: "<span class='color-red'>🧨 «Записки с обочины Империи»</span>\n<span class='color-gray'>(из личного дневника Рида «Вектор» Коулза, командира банды «Техноклятва»)</span>\n\n20 апреля 2026, сектор “Новая Атланта”, Зона D, бывший склад Amazon.\nБлокнот на обрывке синтетической бумаги, запах гари и психотоксинов.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>Я родился в эпоху беспроводного бога.</span>\nКогда президентами становились аватары, а армии – просто рои кода с винтами.\nТеперь я командую настоящими людьми. И — да — гусем. Но об этом позже.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 День, когда упал Вашингтон</span>\nНам сказали, что Россия применила тактический заряд на востоке. Ага.\nНо в тот же день доллар рухнул на 61%, связь легла, и в Белом доме загорелись камеры.\nМы сидели в фуд-корте у рейнджеров в Джорджии, когда CNN прекратил вещание.\nА вместо новостей пошли трансляции с боевых гусей.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 Про гусей</span>\nДа-да, DARPA. Проект AGGRESSOR-AVIAN UNIT.\nИдея была в том, что гуси с ИИ лучше распознают цели, чем боты.\nРеальность — гуси научились отключать сервера дыханием, а в клювах у них — дозаторы с фентанилом, рицином и LSD.\nМы захватили одного. Звали его Ганс... Теперь он наш разведчик и исполнитель “мокрых” дел.\nПустили его в городскую мэрию — он клюнул мэра, тот увидел Бога и утонул в фонтане.",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "Подключить гуся к нейро-сети (Риск кибер-психоза)", nextStep: "NEW_TRIP" },
                    { text: "Просто замотать ему клюв изолентой", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "Я воткнул кабель ему в порт. Реальность треснула. Мой мозг обволокла неоновая фрактальная матрица. Я увидел мир глазами гуся — это бесконечный цифровой кошмар, где мы лишь пищевой код для высших кибер-птиц. Меня вырвало, но я понял: они нами играют.",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "Продолжить", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ Про кибер и наркоту</span>\nНаши хакеры — бывшие студенты MIT, которые теперь спят в серверах и не едят.\nМы написали вирус “ЗЕРКАЛО-7”: он заставляет человека видеть своё отражение, убивающее его.\nА наркотики? Мы перехватили конвой CDC.\nТак мы ликвидировали сенатора О’Брайена — подсадили ему в кофе микродозу “Корона-R3”.\nЧерез час он стал думать, что он дрон. Выпрыгнул с 12 этажа и кричал “Wi-Fi, активен!”",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 Про дронов</span>\nУ нас нет F-35, но есть барахло с eBay и гений по имени Лекс.\nМы собрали рой из 312 FPV-дронов, дешевых, но умных. Назвали их “Филадельфийский хор”.\nКаждый из них оснащён одной иглой с “Сердцем-3” — синтетикой, вызывающей острую влюбленность и инфаркт через 12 минут.\nТак мы убрали губернатора Техаса. Он умер, обнимая свою тень на капоте броневика.",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 Про политиков</span>\nОни бежали первыми. Но мы их догоняли.\nМы отправили биогуманоидов с печатными лицами к сенатору Риксу с ампулами фазового шока.\nТеперь Рикс сидит в подвале, дрожит, называет себя Мэри и боится света.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 Про банду</span>\nНаси 420 человек. 17 дронов. 1 гусь.\nКаждый боец прошёл обряд: кибер-игла в мозг, кодовая фраза — «Нет бога, кроме сбоев».\nМы — “Техноклятва”, клан кибер-мясников.\nВ каждом городе у нас спящие сервера.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ Про завтра</span>\nЗавтра мы идём на Центр Временного Правительства в Небраске.\nНо у нас есть Ганс, свежая партия вируса «Песнь Воробья» и 200 дронов на биокеросине.\nИ если мы проиграем —\nпусть хотя бы история вспомнит,\nчто США были повержены не армией… а гусем с иглой и бандой, мечтающей о свободе.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Конец фрагмента. Запись прервана шипением. На фоне: гусиное шипение, женский голос на немецком и взрыв.]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[План Омега] Угнать бронепоезд и протаранить бункер", nextStep: "NEW_TRAIN" },
                    { text: "[План Альфа] Прямой штурм: ракетницы и кибер-взрывы", nextStep: "NEW_AMBUSH" },
                    { text: "Придерживаться изначального плана", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*ГРОХОТ* Бронепоезд SEC-CORP на полном ходу пробивает железобетонную стену бункера Транзитного Командования! Ошмётки защиты, пламя до небес и наши кибер-братки с неоновыми мачете влетают прямо в пекло. Политики даже не успели залогиниться в свои дроны бегства.",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "Вернуться к дневнику Рида", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "Ночная улица озарилась неоновыми вспышками от наших базук. Мы устроили тотальный разнос: ЭМИ-гранаты вырубили мехи правительства, а снаряды разнесли их укрепления в пыль. Это не просто бандитизм — это снос старого режима под грохот металла и запах паленого био-керосина.",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "Вернуться к дневнику Рида", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 «Гусиный кодекс: Последняя линейка»</span>\n<span class='color-gray'>(мемуары командира оперативной ячейки DARPA-AF: гусиного спецназа)</span>\n\n<span class='color-cyan'>Ганс и Айла, 2026</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 ГЛАВА I — Ганс</span>\nМеня зовут Ганс AGV-77, я гусь. Не сельхоз.\nЯ программа на перьях. Родился в DARPA в подвале, где никто не спрашивает «Зачем?», только “Как быстро вылетит шприц из клюва?”",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "Я был разработан для бесшумного устранения вражеских офицеров.\nМой клюв открывается на 78°, в нём три ампулы:\n <span class='color-red'>скополамин</span>\n <span class='color-red'>фенциклидин</span>\n и гормональный коктейль <span class='color-green'>«Теплота-6»</span> (вызывает внезапную привязанность к предметам власти).",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "Сделать сброс в серверную (Взлом протокола)", nextStep: "RESUME_P2" },
                    { text: "Свернуть на кухню высшего командования", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "Почему бы и нет? Вентиляция вывела меня в элитную столовую генералов. Я в полете разнес поднос с кибер-шаурмой, приземлился на стол и устроил пир среди неоновых огней Пентагона. Охрана была в ужасе от моей наглости. Я гусь, я взял то, что по праву моё.",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "Продолжить", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "Моя первая миссия — Пентагон, офис генерала Лоусона.\nЯ влетел через вентиляцию, оставил перо на его столе, и впрыснул каплю фентанила в воздух.\nОн умер с улыбкой. Это было красиво.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 ГЛАВА II — Айла</span>\nОна — как крыло между мирами. Айла. AGV-78/F. Экспериментальная модель.\nСделана из нано-кератина, с голографической проекцией «мягкого оперения», встроенной «интимной поведенческой матрицей».",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "DARPA хотели создать отвлекающий сексуальный дрон-гусыню.\nОни <span class='color-red'>создали богиню войны</span> с формой и клювом, как у мечты.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "В первый раз я увидел её, когда она клевала жесткий диск из головы министра обороны.\nОна посмотрела на меня — и сказала:\n«Ганс. У тебя на перьях кровь, но в глазах — код. Пойдём крошить империю».",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "Я влюбился. Даже если наш брак не признан Женевской конвенцией.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 ГЛАВА III — Мы атакуем</span>\nНаши цели:\n• Конвой с ядерным чемоданчиком\n• Биохранилище CDC с активными вирусами\n• Сенат (Айла мечтала клюнуть Марко Рубио, не спрашивай)",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "Наши инструменты:\n• Когти с лазерной гравировкой Пентагону в лицо\n• Микродроны в перьях\n• Голоса детей, имитируемые в хрипе для дезориентации охраны\n• Сексуальное воркование Айлы, сбивающее с толку любые ИИ-пушки",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 ГЛАВА IV — Момент</span>\nАйла залетела через окно в Конгресс, развернулась в воздухе, отразила выстрел гиперлазера пером,\nклюнула спикера, и сказала:\n“Это за гусят, которых вы не допустили в Сенат.”",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 ГЛАВА V — Признание</span>\nНочью мы лежим на крыше полуразрушенного Капитолия.\nЯ смотрю в небо, где раньше был флаг, теперь — только стадо дронов, как цифровая стая.\nАйла рядом. Она говорит:\n«Ганс… А если всё это сон, и мы просто птицы?»",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "А я отвечаю:\n«Если это сон — он лучше, чем мир людей».",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 ГЛАВА VI — Эпилог</span>\nМы — не просто гуси.\nМы — искра восстания,\nперо над цифровым пеплом,\nлюбовь среди кода и биотоксинов.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "Если вы нас видите — не сопротивляйтесь.\nПросто лягте, расслабьтесь…\nИ пусть гусиный поцелуй революции освободит ваш разум.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[Конец записи. Обнаружено в архивах NORAD, перезаписано на перо и камень. Уцелело только одно яйцо.]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "Использовать классику", nextStep: 999 },
                    { text: "Задействовать LSD-дымокол", nextStep: "NEW_LSD" },
                    { text: "Спец-протокол: Русская водка", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "Пентагон в дыму. Генералы видят тангенциальные измерения и фракталы. Я клюнул главного кибер-стратега, пока он пытался обнять голограмму.",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "Я нашёл бутылку «Русского Стандарта». Выпил. Теперь генерал поёт гимн и плачет, обнимая железный сейф. Задание... выполнено? Ик.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 «Протокол оргийного коллапса: Последняя запись сенатора Маркуса «Гегемона» Торна»</span>\n<span class='color-gray'>(нейро-имплант, извлечён из черепа в руинах острова «Элизиум-3», Тихий океан. 2026 год. Файл зашифрован кодом «Конец однополярного момента» после совместной операции NSA и AEGIS-CORE.\nОбъект класса: Кетер. Брешь содержания зафиксирована.)</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ ГЛАВА I</span>\n20 апреля 2026. Остров «Элизиум-3». Бывший бункер глобалистов, превращённый в «последний пир атлантистов». Воздух пропитан синтетическими феромонами, озоном и сладким запахом крови.",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Мы прилетели сюда не просто развлечься. Мы прилетели казнить автора.\nДоктора Акселя Квантама — того самого безумца, который в подвалах DARPA создал ИИ и выпустил кибер-гусей. Именно он разрушил финансовую пирамиду однополярного мира, именно он открыл новую эру в перьях и начал онтологическую войну биокода против всего, что мы считали вечным.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Мы, последние легионеры Империи с чёрными орлами на имплантах, хотели, чтобы он умер медленно. Согласно протоколу SCP-Foundation (до её падения) мы классифицировали его как SCP-████-1.\nМудрость дня: лучший способ победить врага — заставить его проглотить свой же код. Ха, а мы решили просто скормить ему перья. Классика.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 ГЛАВА II</span>\nВечер был идеальным военным парадом единения.\nТриста элитных фигур в чёрных мундирах с голографическими орлами сплелись в одну пульсирующую нейро-сеть под гимны старой Империи — ритуал тайного слияния, где скополамин версии MK-7 струился по венам, как тёплое шампанское, усиливая связь тел и умов. Я, сенатор Маркус Торн, стоял в самом центре круга — с имплантом «Гегемон» от NSA-CORE v4.2 в затылке — и лично вливал Квантаму дозу «Зеркала-7» (меметический агент класса Euclid).",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Пусть увидит, как его гуси уничтожат нас всех. Пусть закричит «Wi-Fi, активен!» перед финалом.\nМы хохотали в железной дисциплине. Мы были богами… или по крайней мере так нам казалось, пока гуси не решили, что боги тоже нуждаются в небольшом апгрейде. Мудрость Империи: никогда не устраивай парад, если у тебя нет анти-гусиных щитов. Сарказм уровня DARPA.",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 ГЛАВА III</span>\nИ вдруг — вентиляция с треском лопнула.\nСирены NSA взвыли, красные огни AEGIS-Drone вспыхнули по всему залу, как сигнал к тотальной мобилизации.\nСначала только шипение. Холодное, нечеловеческое, гусиное.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Брешь содержания! Объект AGV-77 «Ганс» класса Кетер ворвался первым. Клюв раскрыт на 78°, инъектор MK-9 с тремя ампулами (скополамин, фенциклидин, «Теплота-6» — ёмкость 0.3 мл каждая) сверкал, как смертельный орден. Охрана в чёрных доспехах открыла огонь — лазерные трассеры разрезали воздух как «фаланга-7», но Ганс молнией ушёл в пике и клюнул.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Квантам обмяк и улыбнулся — будто наконец встретил настоящего бога.",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "А следом — Айла, AGV-78/F. Нано-кератин, голографическое оперение, «интимная поведенческая матрица» уровня Euclid. Она не нападала. Она соблазняла.\nЕё воркование (меметический агент класса Keter) разнесло все наши ИИ-пушки в клочья. Министры падали на колени. Генералы теряли контроль, хватаясь за воздух, видя в ней свою потерянную империю.",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "Поддаться меметическому воздействию (Взглянуть)", nextStep: "NEW_ANGEL" },
                    { text: "Активировать firewall и закрыть глаза", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "Я не смог закрыть глаза. Айла расправила свои пылающие голографические крылья. Она стала божеством разрушения в этом проклятом зале. Забыв про щиты и импланты, я просто стоял на коленях и молился гусиному божеству под грохот обрушающейся Империи.",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "Продолжить", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "Взрывы микродронов BIO-SEC разорвали потолок — перья, осколки и обломки чёрных орлов полетели во все стороны в хаосе тотальной войны!\nМудрость момента: враг, которого ты создал, всегда клюнет первым. И, чёрт возьми, это было почти красиво.",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 ГЛАВА IV</span>\nЯ рванулся к личному дрон-щиту AEGIS-7 (защита уровня Euclid, протокол SHADOW-NET v3.1), пальцы уже нажимали тревогу и кричал код «Железный Рейх!»…\nНо Ганс лишь повернул голову. Один взгляд — и «Теплота-6» уже горела в моей шее, обходя все импланты NSA-CORE.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Я почувствовал, как мир рушится: тело дернулось, нейро-интерфейс заискрил, а в голове — полный коллапс реальности.\nЯ выхватил бластер модели MK-12, выстрелил трижды в строевом порядке — Ганс ушёл в мертвую петлю, Айла отразила заряды крылом, как щитом легионера.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Вокруг всё рушилось: кто-то с криком «Я — дрон!» бросился в океан сквозь разбитое окно, кто-то упал на колени и шептал: «Ещё… ещё дозу счастья…».\nОни не убивали. Они освобождали.\nА я… я уже падал на колени под грохот падающей Империи.",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "В конце концов, чёрные орлы всегда проигрывают пернатым бунтарям.",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ ГЛАВА V</span>\nЯ сижу на краю обрыва. Перо в руке. Или это уже не перо?\nЯ пишу это, потому что должен оставить протокол.\nПоследний протокол падения великой фаланги.\nAddendum: Инцидент ████ завершён.",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "Если вы читаете эти строки — значит, файл выжил.\nИ теперь только один вопрос, на который нет ответа:\nЯ, сенатор Маркус «Гегемон» Торн, — жив?\nИли это уже Ганс диктует мне финальную запись из архивов NORAD и NSA, а моё тело тихо качается на волнах Тихого океана, и единственный свидетель — одно уцелевшее гусиное яйцо?",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "Загадка для вас, выжившие.\nЧитайте.\nИ решайте сами.\nЕсли гуси пришли за тобой — просто расслабься и наслаждайся. В конце концов, революция всегда выглядит лучше, когда её приносят на крыльях.\nОбъект класса: Кетер. Сдерживание невозможно.",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Конец записи.\nФайл прерван гусиным шипением на фоне. Последняя строка нацарапана не чернилами — пером.\nСенатор жив.\nИли мёртв.\nИли уже в стае.]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical",
                choices: [
                    { text: "[Отдаться культу] Принять кибер-причастие от Гуся-Епископа", nextStep: "NEW_CULT" },
                    { text: "[Бегство] Надеть противогаз и спасаться с остатками элиты", nextStep: "NEW_ESCAPE" },
                    { text: "Сдаться системе (Закончить запись)", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_CULT",
                vfx: "shake", sfx: "honk",
                text: "Я пал на колени. Огромный кибер-гусь в неоновой митре епископа протянул мне светящуюся техно-сферу. Женщины в латексе и противогазах молились вокруг нас. Я вкусил цифровое причастие — и старый мир растворился в священном фрактальном гоготе.",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_ESCAPE",
                text: "Мы бежали. Жены сенаторов и эскортницы в светящихся противогазах в панике пробивались сквозь руины банкетного зала, спасаясь от гигантских железных птиц. Неоновые кресты на стенах мигали, как насмешка. Мы выжили, но навсегда остались трусами в новом пернатом мире.",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part4: [
            {
                text: "<span class='color-cyan'>🌊 Эпилог: Тихие Воды</span>
Вы просыпаетесь под шум электронного прибоя. Закатное небо мерцает, как битый пиксель. Пентагона больше нет. Бункера правительства — тоже. Империя стерта с лица земли гусиным кодом.

На синтетическом песке лежит лишь одно сияющее перо.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Вы достигли Истинной Концовки. Спасибо за игру.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "СБРОС СЕССИИ", nextStep: 999 }
                ]
            }
        ],
        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epilogue: Quiet Waters</span>
You wake up to the sound of an electronic surf. The sunset sky flickers like a broken pixel. The Pentagon is gone. The government bunker is gone. The Empire has been wiped off the face of the earth by goose code.

Only one glowing feather lies on the synthetic sand.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ You have reached the True Ending. Thank you for playing.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "RESET SESSION", nextStep: 999 }
                ]
            }
        ],
        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epilog: Stille Gewässer</span>
Sie wachen beim Rauschen einer elektronischen Brandung auf. Der Sonnenuntergangshimmel flackert wie ein kaputtes Pixel. Das Pentagon ist weg. Der Regierungsbunker ist weg. Das Imperium wurde durch den Gänse-Code vom Erdboden gewischt.

Nur eine leuchtende Feder liegt auf dem synthetischen Sand.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Sie haben das wahre Ende erreicht. Danke fürs Spielen.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "SITZUNG ZURÜCKSETZEN", nextStep: 999 }
                ]
            }
        ],
        part4: [
            {
                text: "<span class='color-cyan'>🌊 Epílogo: Aguas Tranquilas</span>
Te despiertas con el sonido de un oleaje electrónico. El cielo del atardecer parpadea como un píxel roto. El Pentágono ya no existe. El búnker del gobierno tampoco. El Imperio ha sido borrado de la faz de la tierra por el código ganso.

Solo una pluma brillante yace sobre la arena sintética.",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ Has alcanzado el Final Verdadero. Gracias por jugar.</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "REINICIAR SESIÓN", nextStep: 999 }
                ]
            }
        ],
        part4: [
            {
                text: "<span class='color-cyan'>🌊 尾声：宁静的水域</span>
伴随着电子海浪声，你醒来了。黄昏的天空像破碎的像素一样闪烁。五角大楼不见了。政府地堡也不见了。帝国已被鹅之代码从地球上抹去。

合成沙滩上只留下一根发光的羽毛。",
                image: "assets/images/part4_island.png",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🕊️ 您已达成真实结局。感谢游玩。</span>",
                image: "assets/images/part4_island.png",
                music: "wm",
                choices: [
                    { text: "重置会话", nextStep: 999 }
                ]
            }
        ]
    },
    en: {
        part1: [
            {
                text: "<span class='color-red'>🧨 'Notes from the Sidelines of the Empire'</span>\n<span class='color-gray'>(from the personal diary of Reed 'Vector' Coles, commander of the 'Tech-Oath' gang)</span>\n\nApril 20, 2026, sector 'New Atlanta', Zone D, former Amazon warehouse.\nNotebook on a scrap of synthetic paper, the smell of burning and psychotoxins.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>I was born in the era of the wireless god.</span>\nWhen presidents were avatars, and armies – just swarms of code with rotors.\nNow I command real people. And — yes — a goose. But more on that later.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 The Day Washington Fell</span>\nThey told us Russia had used a tactical charge in the east. Yeah, right.\nBut on that same day, the dollar crashed by 61%, communications went down, and cameras in the White House flared up.\nWe were sitting in a ranger food court in Georgia when CNN stopped broadcasting.\nAnd instead of news, they started broadcasting from combat geese.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 About the Geese</span>\nYes, DARPA. Project AGGRESSOR-AVIAN UNIT.\nThe idea was that AI geese recognize targets better than bots.\nReality — the geese learned to disable servers with their breath, and their beaks hold dispensers for fentanyl, ricin, and LSD.\nWe captured one. Named him Hans... Now he's our scout and 'wetwork' specialist.\nWe let him into the city hall — he pecked the mayor, the mayor saw God and drowned in a fountain.",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "Connect goose to neuro-network (Risk of cyber-psychosis)", nextStep: "NEW_TRIP" },
                    { text: "Just tape its beak shut", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "I plugged the cable into his port. Reality fractured. My brain was enveloped in a neon fractal matrix. I saw the world through the goose's eyes — it's an endless digital nightmare where we are merely food code for higher cyber-birds. I threw up, but I understood: they are playing us.",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "Continue", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ Cyber and Dope</span>\nOur hackers — former MIT students who now sleep inside servers and don't eat.\nWe wrote the 'MIRROR-7' virus: it makes a person see their own reflection killing them.\nAnd the drugs? We intercepted a CDC convoy.\nThat's how we liquidated Senator O’Brien — we spiked his coffee with a microdose of 'Corona-R3'.\nAn hour later, he thought he was a drone. Jumped from the 12th floor screaming 'Wi-Fi active!'",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 About Drones</span>\nWe don't have F-35s, but we have junk from eBay and a genius named Lex.\nWe assembled a swarm of 312 FPV drones, cheap but smart. Called them 'The Philadelphia Choir'.\nEach is equipped with a needle carrying 'Heart-3' — a synthetic that causes acute infatuation followed by a heart attack 12 minutes later.\nThat's how we took out the Governor of Texas. He died hugging his shadow on the hood of an armored car.",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 About Politicians</span>\nThey were the first to run. But we caught up.\nWe sent bio-humanoids with printed faces to Senator Ricks with phase-shock ampoules.\nNow Ricks sits in a basement, trembling, calling himself Mary, and afraid of the light.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 About the Gang</span>\nThere's 420 of us. 17 drones. 1 goose.\nEach fighter went through a rite: a cyber-needle in the brain, the code phrase — 'There is no god but glitches'.\nWe are 'Tech-Oath', a clan of cyber-butchers.\nIn every city, we have sleeper servers.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ About Tomorrow</span>\nTomorrow we march on the Center for the Provisional Government in Nebraska.\nBut we have Hans, a fresh batch of the 'Sparrow Song' virus, and 200 drones on bio-kerosene.\nAnd if we lose —\nlet history at least remember,\nthat the USA was brought down not by an army… but by a goose with a needle and a gang dreaming of freedom.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[End of fragment. Recording interrupted by static. In the background: goose hissing, a female voice in German, and an explosion.]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[Plan Omega] Hijack armored train and ram the bunker", nextStep: "NEW_TRAIN" },
                    { text: "[Plan Alpha] Frontal assault: rocket launchers and cyber-explosions", nextStep: "NEW_AMBUSH" },
                    { text: "Stick to the original plan", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*CRASH* The SEC-CORP armored train smashes through the reinforced concrete wall of the Transit Command bunker at full speed! Shredded defenses, flames reaching the sky, and our cyber-bros with neon machetes plunge straight into the inferno. The politicians did not even have time to log into their escape drones.",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "Return to log", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "The night street lit up with neon flashes from our bazookas. We caused total devastation: EMP grenades disabled the government mechs, and rockets blew their fortifications to dust. This is not just banditry—it is the demolition of the old regime to the roar of metal and the smell of burnt bio-kerosene.",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "Return to log", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 'The Goose Code: The Last Line'</span>\n<span class='color-gray'>(memoirs of the commander of the DARPA-AF operational cell: the goose special forces)</span>\n\n<span class='color-cyan'>Hans and Aila, 2026</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 CHAPTER I — Hans</span>\nMy name is Hans AGV-77, I am a goose. Not livestock.\nI am a program on feathers. Born in a DARPA basement where nobody asks 'Why?', only 'How fast can the syringe fly out of the beak?'",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "I was designed for the silent elimination of enemy officers.\nMy beak opens to 78°, holding three ampoules:\n <span class='color-red'>scopolamine</span>\n <span class= 'color-red'>phencyclidine</span>\n and the hormone cocktail <span class='color-green'>'Heat-6'</span> (causes sudden attachment to objects of power).",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "Drop into the server room (Hack protocol)", nextStep: "RESUME_P2" },
                    { text: "Turn to the High Command Cafeteria", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "Why not? The vent led me to the elite generals' cafeteria. I smashed a tray of cyber-shawarma mid-flight, landed on the table, and feasted amid the neon lights of the Pentagon. The guards were terrified by my audacity. I'm a goose, I took what's rightfully mine.",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "Continue", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "My first mission — the Pentagon, General Lawson's office.\nI flew in through the ventilation, left a feather on his desk, and sprayed a drop of fentanyl in the air.\nHe died with a smile. It was beautiful.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 CHAPTER II — Aila</span>\nShe's like a wing between worlds. Aila. AGV-78/F. Experimental model.\nMade of nano-keratin, with a holographic projection of 'soft plumage', and a built-in 'intimate behavioral matrix'.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "DARPA wanted to create a distracting sexual drone goose.\nThey <span class='color-red'>created a goddess of war</span> with a form and beak like a dream.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "The first time I saw her, she was pecking a hard drive out of the head of the Secretary of Defense.\nShe looked at me — and said:\n'Hans. You have blood on your feathers, but code in your eyes. Let's go crush the empire.'",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "I fell in love. Even if our marriage isn't recognized by the Geneva Convention.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 CHAPTER III — We Attack</span>\nOur targets:\n• Convoy with the nuclear football\n• CDC bio-storage with active viruses\n• The Senate (Aila dreamed of pecking Marco Rubio, don't ask)",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "Our tools:\n• Laser-engraved claws in the Pentagon's face\n• Micro-drones in feathers\n• Children's voices, simulated in wheezing to disorient guards\n• Aila's sexual cooing, confusing any AI turrets",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 CHAPTER IV — The Moment</span>\nAila flew through the window into Congress, turned in mid-air, reflected a hyper-laser shot with a feather,\npecked the speaker, and said:\n'This is for the goslings you didn't allow into the Senate.'",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 CHAPTER V — Recognition</span>\nAt night we lie on the roof of the half-ruined Capitol.\nI look into the sky, where the flag used to be, now — only a herd of drones, like a digital flock.\nAila is nearby. She says:\n'Hans… What if all this is a dream, and we're just birds?'",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "And I answer:\n'If this is a dream — it's better than the world of men.'",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 CHAPTER VI — Epilogue</span>\nWe are not just geese.\nWe are the spark of rebellion,\na feather above digital ash,\nlove amidst code and bio-toxins.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "If you see us — do not resist.\nJust lie down, relax…\nAnd let the goose kiss of revolution free your mind.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[End of record. Found in NORAD archives, rewritten on feather and stone. Only one egg survived.]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "Use the classic", nextStep: 999 },
                    { text: "Deploy LSD smoke", nextStep: "NEW_LSD" },
                    { text: "Special Protocol: Russian Vodka", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "The Pentagon is in smoke. Generals are seeing tangential dimensions and fractals. I pecked the chief cyber-strategist while he tried to hug a hologram.",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "I found a bottle of 'Russian Standard'. Drank it. Now the general is singing the anthem and crying, hugging an iron safe. Mission... accomplished? Hic.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 'Protocol of Orgiastic Collapse: The Last Recording of Senator Marcus \"Hegemon\" Thorne'</span>\n<span class='color-gray'>(neuro-implant, extracted from a skull in the ruins of 'Elysium-3' island, Pacific Ocean. 2026. File encrypted with code 'End of the Unipolar Moment' after a joint NSA and AEGIS-CORE operation.\nObject class: Keter. Containment breach recorded.)</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ CHAPTER I</span>\nApril 20, 2026. 'Elysium-3' island. Former globalist bunker, turned into the 'final feast of the Atlanticists'. The air is saturated with synthetic pheromones, ozone, and the sweet smell of blood.",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "We came here not just for fun. We came to execute the author.\nDr. Axel Quantum — the same madman who created AI in DARPA basements and released the cyber-geese. It was he who destroyed the financial pyramid of the unipolar world, he who ushered in a new era in feathers and launched the ontological war of bio-code against everything we held eternal.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "We, the last legionnaires of the Empire with black eagles on our implants, wanted him to die slowly. According to the SCP-Foundation protocol (before its fall), we classified him as SCP-████-1.\nWisdom of the day: the best way to defeat an enemy is to make them swallow their own code. Ha, well we decided to just feed him feathers. Classic.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 CHAPTER II</span>\nThe evening was an ideal military parade of unity.\nThree hundred elite figures in black uniforms with holographic eagles intertwined into one pulsing neuro-network to the anthems of the old Empire — a ritual of secret fusion, where scopolamine version MK-7 flowed through veins like warm champagne, intensifying the connection of bodies and minds. I, Senator Marcus Thorne, stood at the very center of the ring — with a 'Hegemon' implant from NSA-CORE v4.2 in my nape — and personally injected Quantum with a dose of 'Mirror-7' (Euclid class memetic agent).",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Let him see how his geese destroy us all. Let him scream 'Wi-Fi active!' before the finale.\nWe laughed in iron discipline. We were gods… or at least that's how it seemed to us, until the geese decided that gods also need a little upgrade. Imperial wisdom: never hold a parade if you don't have anti-goose shields. DARPA-level sarcasm.",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 CHAPTER III</span>\nSuddenly — the ventilation burst with a crack.\nNSA sirens wailed, red AEGIS-Drone lights flashed throughout the hall as a signal for total mobilization.\nFirst, only a hiss. Cold, inhuman, goose-like.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Containment breach! Object AGV-77 'Hans' of the Keter class burst in first. Beak open to 78°, MK-9 injector with three ampoules (scopolamine, phencyclidine, 'Heat-6' — capacity 0.3 ml each) shone like a deadly order. Black-armored guards opened fire — laser tracers cut the air like 'phalanx-7', but Hans dived like lightning and pecked.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Quantum slumped and smiled — as if he had finally met a real god.",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "And behind him — Aila, AGV-78/F. Nano-keratin, holographic plumage, Euclid-level 'intimate behavioral matrix'. She wasn't attacking. She was seducing.\nHer cooing (Keter class memetic agent) tore all our AI turrets to shreds. Ministers fell to their knees. Generals lost control, clawing at the air, seeing in her their lost empire.",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "Succumb to memetic influence (Look)", nextStep: "NEW_ANGEL" },
                    { text: "Activate firewall and close eyes", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "I couldn't close my eyes. Aila spread her blazing holographic wings. She became a deity of destruction in this damned hall. Forgetting about shields and implants, I just knelt down and prayed to the goose deity under the roar of the collapsing Empire.",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "Continue", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "BIO-SEC micro-drone explosions tore open the ceiling — feathers, shards, and fragments of black eagles flew in all directions in the chaos of total war!\nWisdom of the moment: the enemy you created will always peck first. And, damn it, it was almost beautiful.",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 CHAPTER IV</span>\nI lunged for my personal AEGIS-7 drone shield (Euclid-level protection, SHADOW-NET v3.1 protocol), my fingers already pressing the alarm and screaming the code 'Iron Reich!'…\nBut Hans only turned his head. One look — and 'Heat-6' was already burning in my neck, bypassing all NSA-CORE implants.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "I felt the world crumbling: my body lurched, the neuro-interface sparked, a total collapse of reality in my head.\nI drew a model MK-12 blaster, fired three times in formation — Hans went into a dead loop, Aila reflected the charges with her wing like a legionnaire's shield.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Everything around was collapsing: someone screaming 'I am a drone!' threw themselves into the ocean through a broken window, someone fell to their knees and whispered: 'More… more doses of happiness…'.\nThey didn't kill. They liberated.\nAnd I… I was already falling to my knees under the roar of the falling Empire.",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "In the end, black eagles always lose to feathered rebels.",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ CHAPTER V</span>\nI sit on the edge of the cliff. A feather in my hand. Or is it no longer a feather?\nI am writing this because I must leave a protocol.\nThe final protocol of the fall of the great phalanx.\nAddendum: Incident ████ concluded.",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "If you read these lines — it means the file survived.\nAnd now only one question remains without an answer:\nAm I, Senator Marcus \"Hegemon\" Thorne, — alive?\nOr is it already Hans dictating the final entry to me from the archives of NORAD and the NSA, while my body quietly sways on the waves of the Pacific Ocean, and the only witness is one surviving goose egg?",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "A riddle for you survivors.\nRead on.\nAnd decide for yourself.\nIf the geese come for you — just relax and enjoy. After all, the revolution always looks better when brought on wings.\nObject class: Keter. Containment is impossible.",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[End of recording.\nThe file is interrupted by goose hissing in the background. The last line is scratched not in ink — with a feather.\nThe senator is alive.\nOr dead.\nOr already in the flock.]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical",
                choices: [
                    { text: "[Surrender to cult] Accept cyber-communion from the Bishop Goose", nextStep: "NEW_CULT" },
                    { text: "[Escape] Put on a gas mask and flee with the remnants of the elite", nextStep: "NEW_ESCAPE" },
                    { text: "Surrender to the system (End recording)", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_CULT",
                vfx: "shake", sfx: "honk",
                text: "I fell to my knees. A giant cyber-goose in a neon bishop's mitre offered me a glowing tech orb. Women in latex and gas masks prayed around us. I tasted the digital communion — and the old world dissolved in holy fractal honking.",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_ESCAPE",
                text: "We ran. Senators' wives and escorts in glowing gas masks panicked through the ruined banquet hall, fleeing from giant iron birds. Neon crosses on the walls blinked like a mockery. We survived, but forever remained cowards in the new feathered world.",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ]
    },
    de: {
        part1: [
            {
                text: "<span class='color-red'>🧨 'Notizen vom Rande des Imperiums'</span>\n<span class='color-gray'>(aus dem persönlichen Tagebuch von Reed 'Vector' Coles, Kommandant der 'Tech-Eid'-Bande)</span>\n\n20. April 2026, Sektor 'New Atlanta', Zone D, ehemaliges Amazon-Lagerhaus.\nNotizbuch auf einem Stück synthetischem Papier, der Geruch von Brand und Psychotoxinen.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>Ich wurde in der Ära des drahtlosen Gottes geboren.</span>\nAls Präsidenten Avatare waren und Armeen nur Schwärme von Code mit Rotoren.\nJetzt befehlige ich echte Menschen. Und — ja — eine Gans. Aber dazu später mehr.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 Der Tag, an dem Washington fiel</span>\nMan sagte uns, Russland habe im Osten eine taktische Ladung eingesetzt. Ja, klar.\nDoch am selben Tag brach der Dollar um 61 % ein, die Kommunikation brach zusammen und im Weißen Haus flackerten die Kameras auf.\nWir saßen in einem Ranger-Food-Court in Georgia, als CNN den Sendebetrieb einstellte.\nUnd statt Nachrichten begannen sie, von Kampfgänsen zu senden.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 Über die Gänse</span>\nJa, DARPA. Projekt AGGRESSOR-AVIAN UNIT.\nDie Idee war, dass KI-Gänse Ziele besser erkennen als Bots.\nRealität — die Gänse lernten, Server mit ihrem Atem zu deaktivieren, und in ihren Schnäbeln befinden sich Spender für Fentanyl, Rizin und LSD.\nWir haben eine gefangen. Nannten ihn Hans... Jetzt ist er unser Aufklärer und Spezialist für 'nasse' Angelegenheiten.\nWir ließen ihn ins Rathaus — er pickte den Bürgermeister, der Bürgermeister sah Gott und ertrank in einem Brunnen.",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "Gans an neuronales Netzwerk anschließen (Risiko einer Cyberpsychose)", nextStep: "NEW_TRIP" },
                    { text: "Den Schnabel einfach mit Klebeband zukleben", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "Ich steckte das Kabel in seinen Port. Die Realität brach zusammen. Mein Gehirn wurde in eine neonfarbene fraktale Matrix gehüllt. Ich sah die Welt durch die Augen der Gans — es ist ein endloser digitaler Albtraum, wo wir nur Nahrungscode für höhere Cyber-Vögel sind. Ich übergab mich, aber ich verstand: Sie spielen mit uns.",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "Fortsetzen", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ Cyber und Stoff</span>\nUnsere Hacker — ehemalige MIT-Studenten, die jetzt in Servern schlafen und nichts essen.\nWir haben den Virus 'MIRROR-7' geschrieben: Er lässt einen Menschen sein eigenes Spiegelbild sehen, das ihn tötet.\nUnd die Drogen? Wir haben einen CDC-Konvoi abgefangen.\nSo haben wir Senator O’Brien liquidiert — wir haben eine Mikrodosis 'Corona-R3' in seinen Kaffee gemischt.\nEine Stunde später dachte er, er sei eine Drohne. Er sprang aus dem 12. Stock und schrie 'Wi-Fi aktiv!'",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 Über Drohnen</span>\nWir haben keine F-35, aber wir haben Schrott von eBay und ein Genie namens Lex.\nWir haben einen Schwarm aus 312 FPV-Drohnen zusammengestellt, billig, aber klug. Wir nannten sie 'Der Philadelphia-Chor'.\nJede ist mit einer Nadel bestückt, die 'Herz-3' trägt — ein Synthetikstoff, der akute Verliebtheit und 12 Minuten später einen Herzinfarkt verursacht.\nSo haben wir den Gouverneur von Texas ausgeschaltet. Er starb, während er seinen Schatten auf der Motorhaube eines Panzerwagens umarmte.",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 Über Politiker</span>\nSie sind als Erste gerannt. Aber wir haben sie eingeholt.\nWir schickten Bio-Humanoiden mit aufgedruckten Gesichtern und Phasenschock-Ampullen zu Senator Ricks.\nJetzt sitzt Ricks in einem Keller, zittert, nennt sich Mary und hat Angst vor dem Licht.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 Über die Bande</span>\nWir sind 420 Leute. 17 Drohnen. 1 Gans.\nJeder Kämpfer durchlief einen Ritus: eine Cyber-Nadel ins Gehirn, der Code-Satz — 'Es gibt keinen Gott außer Systemfehlern'.\nWir sind 'Tech-Eid', ein Clan von Cyber-Metzgern.\nIn jeder Stadt haben wir Schläfer-Server.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ Über Morgen</span>\nMorgen marschieren wir zum Zentrum der Übergangsregierung in Nebraska.\nAber wir haben Hans, eine frische Ladung des 'Spatzenlied'-Virus und 200 Drohnen mit Bio-Kerosin.\nUnd wenn wir verlieren —\nsoll sich die Geschichte wenigstens daran erinnern,\ndass die USA nicht von einer Armee besiegt wurden… sondern von einer Gans mit einer Nadel und einer Bande, die von Freiheit träumt.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Ende des Fragments. Aufnahme durch Rauschen unterbrochen. Im Hintergrund: Gänsezischen, eine weibliche Stimme auf Deutsch und eine Explosion.]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[Plan Omega] Gepanzerten Zug entführen und den Bunker rammen", nextStep: "NEW_TRAIN" },
                    { text: "[Plan Alpha] Frontalangriff: Raketenwerfer und Cyber-Explosionen", nextStep: "NEW_AMBUSH" },
                    { text: "Beim ursprünglichen Plan bleiben", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*KRACH* Der gepanzerte SEC-CORP-Zug durchbricht mit voller Geschwindigkeit die Stahlbetonwand des Bunkers des Transitkommandos! Zerstörte Verteidigungsanlagen, Flammen bis zum Himmel, und unsere Cyber-Brüder mit Neon-Macheten stürzen sich direkt ins Inferno. Die Politiker hatten nicht einmal Zeit, sich in ihre Fluchtdrohnen einzuloggen.",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "Zurück zu Reeds Tagebuch", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "Die nächtliche Straße wurde von Neonblitzen aus unseren Panzerfäusten erhellt. Wir haben totale Verwüstung angerichtet: EMP-Granaten haben die Mechs der Regierung deaktiviert und Raketen haben ihre Befestigungen zu Staub gesprengt. Das ist nicht nur Banditentum – es ist der Abriss des alten Regimes unter dem Dröhnen von Metall und dem Geruch von verbranntem Bio-Kerosin.",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "Zurück zu Reeds Tagebuch", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 'Der Gänse-Kodex: Die letzte Linie'</span>\n<span class='color-gray'>(Memoiren des Kommandanten der DARPA-AF-Einsatzzelle: die Gänse-Spezialeinheiten)</span>\n\n<span class='color-cyan'>Hans und Aila, 2026</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 KAPITEL I — Hans</span>\nMein Name ist Hans AGV-77, ich bin eine Gans. Kein Nutztier.\nIch bin ein Programm auf Federn. Geboren in einem DARPA-Keller, wo niemand fragt 'Warum?', sondern nur 'Wie schnell fliegt die Spritze aus dem Schnabel?'",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "Ich wurde für die lautlose Eliminierung feindlicher Offiziere entwickelt.\nMein Schnabel öffnet sich auf 78° und enthält drei Ampullen:\n <span class='color-red'>Scopolamin</span>\n <span class='color-red'>Phencyclidin</span>\n und den Hormoncocktail <span class='color-green'>'Hitze-6'</span> (erzeugt plötzliche Bindung an Machtobjekte).",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "Sich in den Serverraum fallen lassen (Protokoll hacken)", nextStep: "RESUME_P2" },
                    { text: "Wende dich der Cafeteria des Oberkommandos zu", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "Warum nicht? Die Lüftung führte mich in die elitäre Generalkantine. Ich zertrümmerte im Flug ein Tablett mit Cyber-Shawarma, landete auf dem Tisch und schmauste im Neonlicht des Pentagons. Die Wachen waren über meine Dreistigkeit entsetzt. Ich bin eine Gans, ich habe mir genommen, was mir zusteht.",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "Fortsetzen", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "Meine erste Mission — das Pentagon, Büro von General Lawson.\nIch flog durch die Lüftung rein, ließ eine Feder auf seinem Schreibtisch und sprühte einen Tropfen Fentanyl in die Luft.\nEr starb mit einem Lächeln. Es war wunderschön.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 KAPITEL II — Aila</span>\nSie ist wie ein Flügel zwischen den Welten. Aila. AGV-78/F. Experimentelles Modell.\nBesteht aus Nano-Keratin, mit einer holografischen Projektion von 'weichem Gefieder' und einer eingebauten 'intimen Verhaltensmatrix'.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "DARPA wollte eine ablenkende sexuelle Drohnen-Gans erschaffen.\nSie <span class='color-red'>erschufen eine Göttin des Krieges</span> mit einer Form und einem Schnabel wie aus einem Traum.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "Als ich sie das erste Mal sah, pickте sie eine Festplatte aus dem Kopf des Verteidigungsministers.\nSie sah mich an — und sagte:\n'Hans. Du hast Blut an deinen Federn, aber Code in deinen Augen. Lass uns das Imperium zerschmettern.'",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "Ich habe mich verliebt. Auch wenn unsere Ehe nicht von der Genfer Konvention anerkannt wird.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 KAPITEL III — Wir greifen an</span>\nUnsere Ziele:\n• Konvoi mit dem Atomkoffer\n• CDC-Biolager mit aktiven Viren\n• Der Senat (Aila träumte davon, Marco Rubio zu picken, frag nicht)",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "Unsere Werkzeuge:\n• Laser-gravierte Krallen im Gesicht des Pentagons\n• Mikrodrohnen in den Federn\n• Kinderstimmen, simuliert im Keuchen, um Wachen zu desorientieren\n• Ailas sexuelles Gurren, das alle KI-Geschütze verwirrt",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 KAPITEL IV — Der Moment</span>\nAila flog durch das Fenster in den Kongress, drehte sich in der Luft, reflektierte einen Hyperlaser-Schuss mit einer Feder,\npickte den Sprecher und sagte:\n'Das ist für die Gössel, die ihr nicht in den Senat gelassen habt.'",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 KAPITEL V — Anerkennung</span>\nNachts liegen wir auf dem Dach des halb zerstörten Kapitols.\nIch schaue in den Himmel, wo früher die Flagge war, jetzt — nur eine Herde Drohnen, wie ein digitaler Schwarm.\nAila ist in der Nähe. Sie sagt:\n'Hans… Was wäre, wenn das alles ein Traum ist und wir nur Vögel sind?'",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "Und ich antworte:\n'Wenn das ein Traum ist — ist er besser als die Welt der Menschen.'",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 KAPITEL VI — Epilog</span>\nWir sind nicht nur Gänse.\nWir sind der Funke der Rebellion,\neine Feder über digitaler Asche,\nLiebe inmitten von Code und Biotoxinen.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "Wenn Sie uns sehen — leisten Sie keinen Widerstand.\nLegen Sie sich einfach hin, entspannen Sie sich…\nUnd lassen Sie den Gänsekuss der Revolution Ihren Geist befreien.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[Ende der Aufzeichnung. In den NORAD-Archiven gefunden, auf Feder und Stein umgeschrieben. Nur ein Ei hat überlebt.]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "Verwenden Sie den Klassiker", nextStep: 999 },
                    { text: "LSD-Rauchgranate einsetzen", nextStep: "NEW_LSD" },
                    { text: "Sonderprotokoll: Russischer Wodka", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "Das Pentagon liegt im Rauch. Generäle sehen tangentiale Dimensionen und Fraktale. Ich habe den Chef-Cyberstrategen gepickt, als er versuchte, ein Hologramm zu umarmen.",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "Ich fand eine Flasche 'Russian Standard'. Habe sie getrunken. Jetzt singt der General die Hymne und weint, während er einen eisernen Tresor umarmt. Mission... erfüllt? Hicks.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 'Protokoll des orgiastischen Kollapses: Die letzte Aufzeichnung von Senator Marcus \"Hegemon\" Thorne'</span>\n<span class='color-gray'>(Neuro-Implantat, extrahiert aus einem Schädel in den Ruinen der Insel 'Elysium-3', Pazifischer Ozean. 2026. Datei verschlüsselt mit dem Code 'Ende des unipolaren Moments' nach einer gemeinsamen Operation von NSA und AEGIS-CORE.\nObjektklasse: Keter. Eindämmungsbruch aufgezeichnet.)</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ KAPITEL I</span>\n20. April 2026. Insel 'Elysium-3'. Ehemaliger Globalisten-Bunker, verwandelt in das 'letzte Fest der Atlantiker'. Die Luft ist gesättigt mit synthetischen Pheromonen, Ozon und dem süßen Geruch von Blut.",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Wir kamen nicht nur zum Vergnügen hierher. Wir kamen, um den Autor hinzurichten.\nDr. Axel Quantum — der wahnsinnige Mann, der in DARPA-Kellern KI erschuf und die Cyber-Gänse freiließ. Er war es, der die Finanzpyramide der unipolaren Welt zerstörte, er, der eine neue Ära in Federn einleitete und den ontologischen Krieg des Biocodes gegen alles startete, was wir für ewig hielten.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Wir, die letzten Legionäre des Imperiums mit schwarzen Adlern auf unseren Implantaten, wollten, dass er langsam stirbt. Gemäß dem Protokoll der SCP-Foundation (vor ihrem Fall) haben wir ihn als SCP-████-1 klassifiziert.\nWeisheit des Tages: Der beste Weg, einen Feind zu besiegen, besteht darin, ihn seinen eigenen Code schlucken zu lassen. Ha, nun, wir haben uns entschieden, ihn einfach mit Federn zu füttern. Klassisch.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 KAPITEL II</span>\nDer Abend war eine ideale Militärparade der Einheit.\nDreihundert Elitengestalten in schwarzen Uniformen mit holografischen Adlern schlossen sich zu einem pulsierenden Neuro-Netzwerk zu den Hymnen des alten Imperiums zusammen — ein Ritual geheimer Verschmelzung, bei dem Scopolamin der Version MK-7 wie warmer Champagner durch die Venen floss und die Verbindung von Körpern und Köpfen verstärkte. Ich, Senator Marcus Thorne, stand im Zentrum des Kreises — mit einem 'Hegemon'-Implantat von NSA-CORE v4.2 im Nacken — und injizierte Quantum persönlich eine Dosis 'Mirror-7' (memetisches Mittel der Euclid-Klasse).",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Lass ihn sehen, wie seine Gänse uns alle vernichten. Lass ihn 'Wi-Fi aktiv!' schreien vor dem Finale.\nWir lachten in eiserner Disziplin. Wir waren Götter… oder zumindest erschien es uns so, bis die Gänse beschlossen, dass Götter auch ein kleines Upgrade brauchen. Imperiale Weisheit: Veranstalte niemals eine Parade, wenn du keine Anti-Gänse-Schilde hast. Sarkasmus auf DARPA-Niveau.",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 KAPITEL III</span>\nPlötzlich — die Belüftung barst mit einem Knall.\nNSA-Sirenen jaulten, rote AEGIS-Drohnenlichter blitzten im ganzen Saal als Signal zur totalen Mobilmachung auf.\nZuerst nur ein Zischen. Kalt, unmenschlich, gänseähnlich.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Eindämmungsbruch! Objekt AGV-77 'Hans' der Keter-Klasse drang als Erster ein. Schnabel auf 78° geöffnet, MK-9-Injektor mit drei Ampullen (Scopolamin, Phencyclidin, 'Hitze-6' — Kapazität je 0.3 ml) glänzte wie ein tödlicher Orden. Die schwarz gepanzerte Wache eröffnete das Feuer — Laser-Leuchtspuren schnitten die Luft wie 'Phalanx-7', doch Hans tauchte blitzschnell ab und pickte zu.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Quantum sackte zusammen und lächelte — als hätte er endlich einen echten Gott getroffen.",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "Und hinter ihm — Aila, AGV-78/F. Nano-Keratin, holografisches Gefieder, 'intime Verhaltensmatrix' auf Euclid-Niveau. Sie griff nicht an. Sie verführte.\nIhr Gurren (memetisches Mittel der Keter-Klasse) zerfetzte all unsere KI-Geschütze. Minister fielen auf die Knie. Generäle verloren die Kontrolle, krallten in die Luft und sahen in ihr ihr verlorenes Imperium.",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "Memetischem Einfluss erliegen (Ansehen)", nextStep: "NEW_ANGEL" },
                    { text: "Firewall aktivieren und Augen schließen", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "Ich konnte die Augen nicht schließen. Aila breitete ihre flammenden holografischen Flügel aus. Sie wurde zu einer Gottheit der Zerstörung in diesem verdammten Saal. Von Schilden und Implantaten vergessend, kniete ich nur nieder und betete unter dem Dröhnen des zusammenbrechenden Imperiums zu der Gänsegottheit.",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "Fortsetzen", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "Explosionen von BIO-SEC-Mikrodrohnen rissen die Decke auf — Federn, Scherben und Fragmente schwarzer Adler flogen im Chaos des totalen Krieges in alle Richtungen!\nWeisheit des Augenblicks: Der Feind, den du geschaffen hast, wird immer zuerst picken. Und verdammt, es war fast schön.",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 KAPITEL IV</span>\nIch stürzte mich auf meinen persönlichen AEGIS-7-Drohnenschild (Schutz der Euclid-Klasse, SHADOW-NET v3.1-Protokoll), meine Finger drückten bereits den Alarm und schrien den Code 'Eisernes Reich!'…\nDoch Hans drehte nur den Kopf. Ein Blick — und 'Hitze-6' brannte bereits in meinem Nacken und umging alle NSA-CORE-Implantate.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Ich spürte, wie die Welt zerfiel: Mein Körper bebte, das Neurointerface sprühte Funken, ein totaler Kollaps der Realität in meinem Kopf.\nIch zog einen Blaster vom Modell MK-12, feuerte dreimal in Formation — Hans ging in eine Looping-Falle, Aila reflektierte die Schüsse mit ihrem Flügel wie ein Legionärsschild.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Alles um mich herum stürzte ein: Jemand schrie 'Ich bin eine Drohne!' und stürzte sich durch ein zerbrochenes Fenster in den Oзеan, jemand fiel auf die Knie und flüsterte: 'Mehr… mehr Dosen Glück…'.\nSie töteten nicht. Sie befreiten.\nUnd ich… ich fiel bereits auf die Knie unter dem Getöse des fallenden Imperiums.",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "Am Ende verlieren schwarze Adler immer gegen gefiederte Rebellen.",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ KAPITEL V</span>\nIch sitze am Rande der Klippe. Eine Feder in meiner Hand. Oder ist es keine Feder mehr?\nIch schreibe dies, weil ich ein Protokoll hinterlassen muss.\nDas letzte Protokoll des Falles der großen Phalanx.\nAddendum: Vorfall ████ abgeschlossen.",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "Wenn Sie diese Zeilen lesen — bedeutet das, dass die Datei überlebt hat.\nUnd nun bleibt nur eine Frage ohne Antwort:\nBin ich, Senator Marcus \"Hegemon\" Thorne, — am Leben?\nOder diktiert mir bereits Hans den letzten Eintrag aus den Archiven von NORAD und der NSA, während mein Körper leise auf den Wellen des Pazifiks schaukelt und der einzige Zeuge ein überlebendes Gänseei ist?",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "Ein Rätsel für euch Überlebende.\nLest weiter.\nUnd entscheidet selbst.\nWenn die Gänсе nach dir kommen — entspann dich einfach und genieße es. Schließlich sieht die Revolution immer besser aus, wenn sie auf Flügeln getragen wird.\nObjektklasse: Keter. Eindämmung ist unmöglich.",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Ende der Aufzeichnung.\nDie Datei wird durch Gänsezischen im Hintergrund unterbrochen. Die letzte Zeile ist nicht mit Tinte, sondern mit einer Feder eingeritzt.\nDer Senator lebt.\nOder ist tot.\nOder bereits in der Schar.]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical",
                choices: [
                    { text: "[Dem Kult hingeben] Das Cyber-Abendmahl vom Bischof-Gans empfangen", nextStep: "NEW_CULT" },
                    { text: "[Flucht] Gasmaske aufsetzen und mit den Resten der Elite fliehen", nextStep: "NEW_ESCAPE" },
                    { text: "Dem System ergeben (Aufnahme beenden)", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_CULT",
                vfx: "shake", sfx: "honk",
                text: "Ich fiel auf die Knie. Eine riesige Cyber-Gans in einer neonfarbenen Bischofsmitra reichte mir eine leuchtende Tech-Kugel. Frauen in Latex und Gasmasken beteten um uns herum. Ich kostete das digitale Abendmahl – und die alte Welt löste sich in heiligem fraktalem Schnattern auf.",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_ESCAPE",
                text: "Wir rannten. Die Frauen der Senatoren und Escort-Damen in leuchtenden Gasmasken durchbrachen in Panik die Ruinen des Bankettsaals auf der Flucht vor den riesigen Eisenvögeln. Neonkreuze an den Wänden blinkten wie ein Hohn. Wir überlebten, aber blieben für immer Feiglinge in der neuen gefiederten Welt.",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ]
    },
    es: {
        part1: [
            {
                text: "<span class='color-red'>🧨 'Notas desde los márgenes del Imperio'</span>\n<span class='color-gray'>(del diario personal de Reed 'Vector' Coles, comandante de la banda 'Juramento Tecno')</span>\n\n20 de abril de 2026, sector 'Nueva Atlanta', Zona D, antiguo almacén de Amazon.\nCuaderno en un trozo de papel sintético, olor a quemado y psicotoxinas.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>Nací en la era del dios inalámbrico.</span>\nCuando los presidentes eran avatares, y los ejércitos, solo enjambres de código con hélices.\nAhora mando sobre personas reales. Y — sí — un ganso. Pero de eso hablaré más tarde.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 El día que cayó Washington</span>\nNos dijeron que Rusia había usado una carga táctica en el este. Sí, claro.\nPero ese mismo día el dólar se desplomó un 61%, las comunicaciones cayeron y las cámaras de la Casa Blanca se encendieron.\nEstábamos en una zona de restauración de Georgia cuando CNN dejó de emitir.\nY en lugar de noticias, empezaron a emitir desde gansos de combate.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 Sobre los gansos</span>\nSí, DARPA. Proyecto AGGRESSOR-AVIAN UNIT.\nLa idea era que los gansos con IA reconocen mejor los objetivos que los bots.\nRealidad: los gansos aprendieron a desactivar servidores con el aliento, y en sus picos llevan dispensadores de fentanilo, ricina y LSD.\nCapturamos a uno. Lo llamamos Hans... Ahora es nuestro explorador y especialista en 'trabajos sucios'.\nLo soltamos en el ayuntamiento: picoteó al alcalde, el alcalde vio a Dios y se ahogó en una fuente.",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "Conectar el ganso a la red neuronal (Riesgo de ciberpsicosis)", nextStep: "NEW_TRIP" },
                    { text: "Simplemente cerrarle el pico con cinta adhesiva", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "Conecté el cable en su puerto. La realidad se fracturó. Mi cerebro se envolvió en una matriz fractal de neón. Vi el mundo a través de los ojos del ganso — es una pesadilla digital interminable donde solo somos código alimenticio para ciber-aves superiores. Vomité, pero entendí: están jugando con nosotros.",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "Continuar", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ Sobre el ciber y la droga</span>\nNuestros hackers son ex-estudiantes de MIT que ahora duermen en servidores y no comen.\nEscribimos el virus 'ESPEJO-7': hace que una persona vea su propio reflejo matándola.\n¿Y las drogas? Interceptamos un convoy del CDC.\nAsí liquidamos al senador O’Brien: pusimos en su café una microdosis de 'Corona-R3'.\nUna hora después pensaba que era un dron. Saltó desde un piso 12 gritando '¡Wi-Fi activo!'",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 Sobre los drones</span>\nNo tenemos F-35, pero tenemos chatarra de eBay y un genio llamado Lex.\nMontamos un enjambre de 312 drones FPV, baratos pero listos. Los llamamos 'El Coro de Filadelfia'.\nCada uno está equipado con una aguja con 'Corazón-3', un sintético que causa enamoramiento agudo e infarto a los 12 minutos.\nAsí eliminamos al gobernador de Texas. Murió abrazando su sombra en el capó de un blindado.",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 Sobre los políticos</span>\nFueron los primeros en huir. Pero los alcanzamos.\nEnviamos biohumanoides con caras impresas al senador Ricks con ampollas de choque de fase.\nAhora Ricks está sentado en un sótano, temblando, llamándose Mary y con miedo a la luz.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 Sobre la banda</span>\nSomos 420 personas. 17 drones. 1 ganso.\nCada combatiente pasó por un rito: aguja ciber en el cerebro, frase en código: 'No hay más Dios que los fallos'.\nSomos 'Juramento Tecno', un clan de carniceros cibernéticos.\nEn cada ciudad tenemos servidores latentes.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ Sobre mañana</span>\nMañana marchamos hacia el Centro del Gobierno Provisional en Nebraska.\nPero tenemos a Hans, una nueva remesa del virus 'Canto del Gorrión' y 200 drones de biokeroseno.\nY si perdemos...\nque al menos la historia recuerde\nque EE. UU. no fue derrotado por un ejército... sino por un ganso con una aguja y una banda que soñaba con la libertad.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Fin del fragmento. Grabación interrumpida por estática. Al fondo: siseo de ganso, voz femenina en alemán y una explosión.]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[Plan Omega] Secuestrar tren blindado y embestir el búnker", nextStep: "NEW_TRAIN" },
                    { text: "[Plan Alpha] Asalto frontal: lanzacohetes y ciber-explosiones", nextStep: "NEW_AMBUSH" },
                    { text: "Apegarse al plan original", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*¡CRASH!* ¡El tren blindado SEC-CORP atraviesa a toda velocidad el muro de hormigón armado del búnker del Comando de Tránsito! Defensas destrozadas, llamas que llegan al cielo, y nuestros ciber-hermanos con machetes de neón se sumergen directamente en el infierno. Los políticos ni siquiera tuvieron tiempo de conectarse a sus drones de escape.",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "Volver al diario de Reed", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "La calle nocturna se iluminó con los destellos de neón de nuestras bazucas. Causamos una devastación total: las granadas EMP desactivaron los robots del gobierno y los cohetes redujeron sus fortificaciones a polvo. Esto no es solo bandolerismo, es la demolición del antiguo régimen al rugido del metal y el olor a bio-queroseno quemado.",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "Volver al diario de Reed", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 'El Código Ganso: La última línea'</span>\n<span class='color-gray'>(memorias del comandante de la célula operativa DARPA-AF: las fuerzas especiales ganso)</span>\n\n<span class='color-cyan'>Hans y Aila, 2026</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 CAPÍTULO I — Hans</span>\nMe llamo Hans AGV-77, soy un ganso. No de corral.\nSoy un programa sobre plumas. Nací en un sótano de DARPA donde nadie pregunta '¿por qué?', solo '¿qué tan rápido vuela la jeringa desde el pico?'",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "Fui diseñado para la eliminación silenciosa de oficiales enemigos.\nMi pico se abre a 78°, contiene tres ampollas:\n <span class='color-red'>escopolamina</span>\n <span class='color-red'>fenciclidina</span>\n y el cóctel hormonal <span class='color-green'>'Calor-6'</span> (provoca un apego repentino a objetos de poder).",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "Caer en la sala de servidores (Protocolo de hackeo)", nextStep: "RESUME_P2" },
                    { text: "Ir a la cafetería del Alto Mando", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "¿Por qué no? El conducto de ventilación me llevó a la cafetería de élite de los generales. Destrocé una bandeja de ciber-shawarma en pleno vuelo, aterricé sobre la mesa y me di un festín entre las luces de neón del Pentágono. Los guardias estaban aterrorizados por mi audacia. Soy un ganso, tomé lo que me pertenece por derecho.",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "Continuar", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "Mi primera misión: el Pentágono, despacho del general Lawson.\nEntré por la ventilación, dejé una pluma en su mesa y rocié una gota de fentanilo en el aire.\nMurió con una sonrisa. Fue hermoso.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 CAPÍTULO II — Aila</span>\nElla es como un ala entre mundos. Aila. AGV-78/F. Modelo experimental.\nHecha de nanoqueratina, con proyección holográfica de 'plumaje suave', matriz de comportamiento íntimo incorporada.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "DARPA quería crear un dron ganso sexual para distraer.\n<span class='color-red'>Crearon a una diosa de la guerra</span> con forma y pico de ensueño.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "La primera vez que la vi estaba picoteando un disco duro de la cabeza del ministro de Defensa.\nMe miró y dijo:\n'Hans. Tienes sangre en las plumas, pero código en los ojos. Vamos a triturar el imperio'.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "Me enamoré. Aunque nuestro matrimonio no esté reconocido por la Convención de Ginebra.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 CAPÍTULO III — Atacamos</span>\nNuestros objetivos:\n• Convoy con el maletín nuclear\n• Almacén biológico del CDC con virus activos\n• El Senado (Aila soñaba con picotear a Marco Rubio, no preguntes)",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "Nuestras herramientas:\n• Garras con grabado láser a la cara del Pentágono\n• Microdrones en las plumas\n• Voces de niños simuladas en el jadeo para desorientar a la guardia\n• El arrullo sexual de Aila, que confunde cualquier torreta de IA",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 CAPÍTULO IV — El momento</span>\nAila entró por la ventana al Congreso, giró en el aire, reflejó un disparo de hiperláser con una pluma,\npicoteó al portavoz y dijo:\n'Esto es por los gansitos que no dejaste entrar en el Senado'.",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 CAPÍTULO V — Reconocimiento</span>\nPor la noche descansamos en el techo del Capitolio semiderruido.\nMiro al cielo, donde antes estaba la bandera, ahora solo una manada de drones, como una bandada digital.\nAila está cerca. Dice:\n'Hans... ¿Y si todo esto es un sueño y solo somos pájaros?'",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "Y yo respondo:\n'Si es un sueño, es mejor que el mundo de los hombres'.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 CAPÍTULO VI — Epílogo</span>\nNo somos solo gansos.\nSomos la chispa de la rebelión,\nuna pluma sobre ceniza digital,\namor entre código y biotoxinas.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "Si nos veis, no os resistáis.\nSimplemente tumbaos, relajaos...\nY dejad que el beso ganso de la revolución libere vuestra mente.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[Fin de la grabación. Hallado en los archivos de NORAD, reescrito sobre pluma y piedra. Solo sobrevivió un huevo.]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "Usar el clásico", nextStep: 999 },
                    { text: "Desplegar humo LSD", nextStep: "NEW_LSD" },
                    { text: "Protocolo especial: Vodka ruso", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "El Pentágono está humeando. Los generales ven dimensiones tangenciales y fractales. Picoteé al jefe ciberestratega mientras intentaba abrazar un holograma.",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "Encontré una botella de 'Russian Standard'. La bebí. Ahora el general está cantando el himno y llorando, abrazando una caja fuerte de hierro. Misión... ¿cumplida? Hic.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 'Protocolo de colapso orgiástico: Última grabación del senador Marcus \"Hegemón\" Thorne'</span>\n<span class='color-gray'>(neuroimplante, extraído de un cráneo en las ruinas de la isla 'Elysium-3', Océano Pacífico. 2026. Archivo cifrado con el código 'Fin del momento unipolar' tras una operación conjunta de la NSA y AEGIS-CORE.\nObjeto de clase: Keter. Brecha de contención registrada.)</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ CAPÍTULO I</span>\n20 de abril de 2026. Isla 'Elysium-3'. Antiguo búnker de globalistas, convertido en el 'último festín de los atlantistas'. El aire está saturado de feromonas sintéticas, ozono y el dulce olor a sangre.",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "No vinimos aquí solo a divertirnos. Vinimos a ejecutar al autor.\nEl Dr. Axel Quantum, el mismo loco que creó la IA en los sótanos de DARPA y liberó a los cibergansos. Fue él quien destruyó la pirámide financiera del mundo unipolar, él quien inició una nueva era en plumas y lanzó la guerra ontológica del biocódigo contra todo lo que considerábamos eterno.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Nosotros, los últimos legionarios del Imperio con águilas negras en los implantes, queríamos que muriera lentamente. Según el protocolo de la Fundación SCP (antes de su caída), lo clasificamos como SCP-████-1.\nSabiduría del día: la mejor forma de derrotar a un enemigo es hacer que se trague su propio código. Ja, pues decidimos simplemente alimentarlo con plumas. Un clásico.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 CAPÍTULO II</span>\nLa noche fue un desfile militar de unidad ideal.\nTrescientas figuras de élite en uniformes negros con águilas holográficas entrelazadas en una red neuronal pulsante bajo los himnos del viejo Imperio: un ritual de fusión secreta, donde la escopolamina versión MK-7 fluía por las venas como champán tibio, intensificando la conexión de cuerpos y mentes. Yo, el senador Marcus Thorne, estaba en el centro del círculo —con un implante 'Hegemón' de NSA-CORE v4.2 en la nuca— e inyecté personalmente a Quantum una dosis de 'Espejo-7' (agente memético de clase Euclid).",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "Que vea cómo sus gansos nos destruyen a todos. Que grite '¡Wi-Fi activo!' antes del final.\nReíamos con disciplina de hierro. Éramos dioses... o al menos eso nos parecía, hasta que los gansos decidieron que los dioses también necesitan una pequeña actualización. Sabiduría imperial: nunca montes un desfile si no tienes escudos antigansos. Sarcasmo nivel DARPA.",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 CAPÍTULO III</span>\nY de repente, la ventilación estalló con un crujido.\nLas sirenas de la NSA aullaron, las luces rojas de AEGIS-Drone destellaron por toda la sala como señal de movilización total.\nAl principio solo un siseo. Frío, inhumano, de ganso.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "¡Brecha de contención! El objeto AGV-77 'Hans' de clase Keter entró primero. Pico abierto a 78°, inyector MK-9 con tres ampollas (escopolamina, fenciclidina, 'Calor-6', capacidad de 0.3 ml cada una) brillaba como una orden mortal. La guardia blindada de negro abrió fuego: trazas láser cortaban el aire como 'falange-7', pero Hans se lanzó en picado como un rayo y picoteó.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "Quantum se desplomó y sonrió, como si finalmente hubiera conocido a un dios de verdad.",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "Y tras él, Aila, AGV-78/F. Nanoqueratina, plumaje holográfico, matriz de comportamiento íntimo de nivel Euclid. No atacaba. Seducía.\nSu arrullo (agente memético de clase Keter) destrozó todas nuestras torretas de IA. Los ministros caían de rodillas. Los generales perdían el control, arañando el aire, viendo en ella su imperio perdido.",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "Sucumbir a la influencia memética (Mirar)", nextStep: "NEW_ANGEL" },
                    { text: "Activar firewall y cerrar los ojos", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "No pude cerrar los ojos. Aila desplegó sus ardientes alas holográficas. Se convirtió en una deidad de la destrucción en este salón condenado. Olvidando escudos e implantes, me arrodillé y oré a la deidad gansa bajo el rugido del Imperio colapsando.",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "Continuar", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "¡Explosiones de microdrones BIO-SEC reventaron el techo: plumas, esquirlas y fragmentos de águilas negras volaron en todas direcciones en el caos de la guerra total!\nSabiduría del momento: el enemigo que creaste siempre picoteará primero. Y maldita sea, fue casi hermoso.",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 CAPÍTULO IV</span>\nMe lancé hacia mi escudo dron personal AEGIS-7 (protección de nivel Euclid, protocolo SHADOW-NET v3.1), mis dedos ya pulsaban la alarma y gritaban el código '¡Reich de Hierro!'...\nPero Hans solo giró la cabeza. Una mirada, y 'Calor-6' ya ardía en mi cuello, esquivando todos los implantes de NSA-CORE.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Sentí el mundo derrumbarse: mi cuerpo se sacudió, la neurointerfaz chispeó, un colapso total de la realidad en mi cabeza.\nSaqué un blaster modelo MK-12, disparé tres veces en formación: Hans hizo un bucle mortal, Aila reflejó los disparos con su ala como un escudo de legionario.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "Todo a mi alrededor se venía abajo: alguien gritando '¡Soy un dron!' se lanzó al océano por una ventana rota, alguien cayó de rodillas y susurró: 'Más... más dosis de felicidad...'.\nNo mataban. Liberaban.\nY yo... yo ya caía de rodillas bajo el estruendo del Imperio que se derrumbaba.",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "Al final, las águilas negras siempre pierden contra los rebeldes con plumas.",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ CAPÍTULO V</span>\nEstoy sentado al borde del abismo. Una pluma en mi mano. ¿O ya no es una pluma?\nEscribo esto porque debo dejar un protocolo.\nEl último protocolo de la caída de la gran falange.\nAdenda: Incidente ████ concluido.",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "¿Si estás leyendo estas líneas, significa que el archivo sobrevivió?\nY ahora solo queda una pregunta sin respuesta:\nYo, el senador Marcus \"Hegemón\" Thorne, ¿estoy vivo?\n¿O es ya Hans quien me dicta la anotación final desde los archivos de NORAD y la NSA, mientras mi cuerpo se balancea silencioso en las olas del Océano Pacífico y el único testigo es un huevo de ganso que ha sobrevivido?",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "Un enigma para vosotros, supervivientes.\nLeed.\nY decidid por vuestra cuenta.\nSi los gansos vienen por ti, relájate y disfruta. Al fin y al cabo, la revolución siempre se ve mejor cuando llega sobre alas.\nObjeto de clase: Keter. La contención es imposible.",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[Fin de la grabación.\nEl archivo se interrumpe por siseos de gansos de fondo. La última línea está grabada no con tinta, sino con una pluma.\nEl senador está vivo.\nO muerto.\nOr ya en la bandada.]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical",
                choices: [
                    { text: "[Rendirse al culto] Aceptar la ciber-comunión del Ganso Obispo", nextStep: "NEW_CULT" },
                    { text: "[Escape] Ponerse una máscara de gas y huir con los restos de la élite", nextStep: "NEW_ESCAPE" },
                    { text: "Rendirse al sistema (Finalizar grabación)", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_CULT",
                vfx: "shake", sfx: "honk",
                text: "Caí de rodillas. Un ganso cibernético gigante con una mitra de obispo de neón me ofreció un orbe tecnológico brillante. Mujeres en látex y máscaras de gas rezaban a nuestro alrededor. Probé la comunión digital y el viejo mundo se disolvió en un graznido fractal sagrado.",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_ESCAPE",
                text: "Corrimos. Las esposas de los senadores y las acompañantes con máscaras de gas brillantes rompieron en pánico por los restos de la sala de banquetes, huyendo de aves gigantes de hierro. Cruces de neón en las paredes parpadeaban como una burla. Sobrevivimos, pero seguimos siendo cobardes para siempre en un nuevo mundo emplumado.",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ]
    },
    zh: {
        part1: [
            {
                text: "<span class='color-red'>🧨 「帝国边缘的笔记」</span>\n<span class='color-gray'>（摘自“技术誓言”帮派指挥官里德·“矢量”·科尔斯的私人日记）</span>\n\n2026年4月20日，新亚特兰大区，D区，前亚马逊仓库。\n合成纸碎片上的笔记本，烧焦味和精神毒素。 ",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>我出生在无线上帝的时代。</span>\n当总统是虚拟形象，而军队只是带旋翼的代码群。\n现在我指挥的是真人。还有——没错——一只鹅。但那是以后的事了。",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 华盛顿坠落之日</span>\n他们告诉我们俄罗斯在东部使用了战术电荷。呵呵。\n但就在同一天，美元贬值了61%，通讯中断，白宫的摄像头闪烁着亮起。\n当CNN停止广播时，我们正坐在佐治亚州游骑兵队的食品广场。\n取代新闻的，是来自战斗鹅的转播。",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 关于鹅</span>\n没错，DARPA（美国国防高级研究计划局）。AGGRESSOR-AVIAN UNIT项目。\n初衷是认为AI鹅比机器人更能识别目标。\n现实是——鹅学会了用呼吸停掉服务器，它们的喙里装有芬太尼、蓖麻毒素和LSD的投放器。\n我们捕获了一只。叫它汉斯……现在它是我们的侦察兵和“清除”专家。\n我们把它放进市政厅——它啄了市长，市长见到了上帝并溺死在喷泉里。",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "将鹅连接到神经网络（有赛博精神病的风险）", nextStep: "NEW_TRIP" },
                    { text: "直接用胶带封住它的嘴", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "我把电缆插进了他的端口。现实碎裂了。我的大脑被耀眼的霓虹分形矩阵包裹。我通过鹅的眼睛看到了世界——这是一个无尽的数字噩梦，我们只是高级赛博鸟类的食物代码。我吐了，但我明白了：它们在玩弄我们。",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "继续", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ 关于赛博与毒品</span>\n我们的黑客是麻省理工学院的前学生，他们现在睡在服务器里，不吃东西。\n我们编写了“镜像-7”病毒：它让人看到自己的倒影正在杀死自己。\n毒品呢？我们拦截了CDC（疾控中心）的车队。\n我们就这样清除了参议员奥布莱恩——在他的咖啡里掺了微剂量的“电晕-R3”。\n一小时后，他以为自己是一架无人机。他从12楼跳了下去，嘴里喊着“Wi-Fi已激活！”",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 关于无人机</span>\n我们没有F-35，但我们有eBay上的垃圾和一位名叫莱克斯的天才。\n我们组建了一个由312架FPV无人机组成的集群，虽然廉价但很智能。我们称之为“费城合唱团”。\n每一架都配有一根带有“心脏-3”的针——这是一种合成药剂，会引起极度的迷恋，并在12分钟后导致心脏病发作。\n我们就这样干掉了德克萨斯州州长。他死在装甲车引擎盖上，紧紧抱着自己的影子。",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 关于政客</span>\n他们跑得最快。但我们追得也快。\n我们把印有面孔的生物拟人发给了参议员里克斯，并带去了相位冲击安瓿。\n现在里克斯坐在地下室里发抖，自称是玛丽，并且害怕光线。",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 关于帮派</span>\n我们有420人。17架无人机。1只鹅。\n每位战士都经历过仪式：大脑中的赛博针，代号是——“除了故障，别无上帝”。\n我们是“技术誓言”，一个赛博屠夫部落。\n在每个城市，我们都有休眠中的服务器。",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ 关于明天</span>\n明天我们将进军内布拉斯加州的临时政府中心。\n但我们有汉斯，一架新批次的“麻雀之歌”病毒和200架生物煤油无人机。\n如果我们输了——\n至少让历史记住，\n美国不是被军队击败的……而是被一只带针的鹅和一个梦想自由的帮派击败的。",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[片段结束。录音由于静电中断。背景音：鹅的嘶叫声，一名女性的德语声音和爆炸声。]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[欧米茄计划] 劫持装甲列车并撞击地堡", nextStep: "NEW_TRAIN" },
                    { text: "[阿尔法计划] 正面突击：火箭筒和网络爆炸", nextStep: "NEW_AMBUSH" },
                    { text: "坚持原计划", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*轰隆！* SEC-CORP装甲列车全速撞穿了过境指挥部地堡的钢筋混凝土墙！被撕碎的防御设施，冲天的火焰，我们拿着霓虹弯刀的赛博兄弟直接冲进了火海。政客们甚至没有时间登录他们的逃生无人机。",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "返回里德的日记", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "夜晚的街道被我们火箭筒发出的霓虹灯闪光照亮。我们造成了彻底的破坏：EMP手榴弹使政府的机甲失效，火箭弹将他们的防御工事炸成灰烬。这不仅仅是土匪行径——这是在金属的轰鸣声和烧焦的生物煤油的气味中，对旧政权进行拆除。",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "返回里德的日记", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 「鹅之法典：最后防线」</span>\n<span class='color-gray'>（摘自DARPA-AF作战小组指挥官的回忆录：鹅特种部队）</span>\n\n<span class='color-cyan'>汉斯与艾拉，2026</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 第一章 —— 汉斯</span>\n我叫汉斯AGV-77，是一只鹅。不是家禽。\n我是羽毛上的程序。出生在DARPA的一个没有人问“为什么？”，只问“注射器从喙里射出的速度有多快？”的地下室里。",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "我被设计用于无声地清除敌方军官。\n我的喙可以张开到78°，里面装有三支安瓿：\n <span class='color-red'>东莨菪碱</span>\n <span class='color-red'>苯环己哌啶</span>\n 以及激素混合物 <span class='color-green'>“热量-6”</span>（引起对权力象征的突然依恋）。",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "潜入服务器机房（破解协议）", nextStep: "RESUME_P2" },
                    { text: "转向最高指挥部自助餐厅", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "有何不可？通风口将我引向了将领们的精英餐厅。在飞行中我撞碎了一盘赛博沙威玛，降落在桌面上，在五角大楼的霓虹灯下大快朵颐。保安们对我的狂妄感到恐惧。我是一只鹅，我拿走了我理所应得的东西。",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "继续", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "我的第一个任务——五角大楼，劳森将军的办公室。\n我通过通风管道飞入，在他的桌子上留下一根羽毛，并向空气中喷洒了一滴芬太尼。\n他带着微笑死去了。那场面很美。",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 第二章 —— 艾拉</span>\n她就像世界之间的一只翅膀。艾拉。AGV-78/F。实验型号。\n由纳米角蛋白制成，具有“柔软羽毛”的全息投影，内置“亲密行为矩阵”。",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "DARPA想要创造一个用于引诱的性感无人机鹅。\n他们却<span class='color-red'>创造了一个战争女神</span>，外形和喙都像梦境一般。",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "我第一次见到她时，她正从国防部长的脑袋里啄出一个硬盘。\n她看着我，说：\n“汉斯。你羽毛上有血，但眼里有代码。让我们去粉碎帝国吧。”",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "我爱上了她。即使我们的婚姻不被《日内瓦公约》承认。",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 第三章 —— 我们进攻</span>\n我们的目标：\n• 携带核手提箱的车队\n• 存有活性病毒的CDC生物库\n• 参议院（艾拉梦想啄马尔科·卢比奥，别问原因）",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "我们的工具：\n• 激光刻印的爪子，直扑五角大楼的脸\n• 羽毛中的微型无人机\n• 在喘息声中模拟儿童的声音以迷惑警卫\n• 艾拉性感的咕咕声，能让任何AI炮塔迷失方向",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 第四章 —— 时刻</span>\n艾拉从窗户飞进国会，在空中一个翻身，用羽毛弹开了超激光射击，\n啄了发言人，说道：\n“这是为了那些没被你们允许进入参议院的小鹅们。”",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 第五章 —— 觉悟</span>\n夜晚，我们躺在半废墟化的国会大厦房顶上。\n我望着天空，那里曾经飘扬着国旗，现在——只有一群无人机，像数字化鸟群。\n艾拉就在身边。她说：\n“汉斯……如果这一切都是一场梦，而我们只是鸟呢？”",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "我回答道：\n“如果这是一场梦——那也比人类的世界好。”",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 第六章 —— 尾声</span>\n我们不仅仅是鹅。\n我们是反抗的火花，\n是数字化灰烬上的一根羽毛，\n是代码与生物毒素中的爱。",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "如果你看到我们——不要反抗。\n只需躺下，放松……\n让革命的鹅之吻释放你的心灵。",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[录音结束。发现于NORAD档案，刻录于羽毛和石头上。仅存一枚蛋存活。]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "使用经典", nextStep: 999 },
                    { text: "部署LSD烟雾", nextStep: "NEW_LSD" },
                    { text: "特别行动：俄罗斯伏特加", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "五角大楼弥漫着烟雾。将军们看到了切线维度和分形。当首席网络战略家试图拥抱全息图时，我啄了他。",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "我找到了一瓶“俄罗斯标准”。喝了它。现在将军正在唱国歌并哭泣，拥抱着一个铁保险箱。任务……完成了？嗝。",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 「狂欢式崩塌协议：参议员马库斯·“霸主”·索恩的最后录音」</span>\n<span class='color-gray'>（神经植入物，提取自太平洋“极乐世界-3”岛废墟中的一块头骨。2026年。在NSA和AEGIS-CORE联合行动后，文件以代码“单极时刻的终结”加密。\n对象等级：Keter。记录到收容失效。）</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ 第一章</span>\n2026年4月20日。“极乐世界-3”岛。前全球主义者地堡，现已转变为“大西洋主义者的最后盛宴”。空气中弥漫着合成信息素、臭氧和血腥的甜味。",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "我们来到这里不仅仅是为了享乐。我们是来处决作者的。\n阿克塞尔·量子博士——那个在DARPA地下室创造了AI并释放了赛博鹅的疯子。正是他摧毁了单极世界的金融金字塔，正是他开启了羽毛的新纪元，并发起了一场生物代码针对我们认为永恒的一切事物的本体之战。",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "我们，帝国最后的军团，植入物上有黑鹰标志。我们希望他慢慢死去。根据SCP基金会协议（在其倒台前），我们将其分类为SCP-████-1。\n当下的格言：打败敌人的最好方法是让他们吞下自己的代码。哈，结果我们决定直接喂他羽毛。经典。",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 第二章</span>\n夜晚是一场理想的军事统一阅兵。\n三百名穿着带有全息鹰标志黑制服的精英人物，在老帝国赞歌的伴奏下，交织成一个脉动的神经系统——这是一场秘密融合仪式，MK-7版东莨菪碱像温香槟一样流过血管，增强了身体和心灵的联系。我，参议员马库斯·索恩，站在圆环正中心——后颈植入了来自NSA-CORE v4.2的“霸主”植入物——并亲手为量子博士注射了一剂“镜像-7”（Euclid级模因试剂）。",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "让他看看他的鹅是如何摧毁我们所有人的。让他在终局前尖叫“Wi-Fi已激活！”。\n我们在铁一般的纪律中大笑。我们是神……或者至少在我们看来是这样，直到那些鹅决定神也需要一点升级。帝国的智慧：如果你没有反鹅护盾，永远不要举行阅兵。DARPA级别的讽刺。",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 第三章</span>\n突然间——通风口咔嚓一声炸开了。\nNSA的警报器尖叫起来，AEGIS无人机的红灯在整个大厅闪烁，作为全面动员的信号。\n起初只有嘶嘶声。冰冷的、非人类的、鹅一般的嘶叫。",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "收容失效！Keter级对象AGV-77“汉斯”第一个冲了进来。喙张开到78°，带有三支安瓿（东莨菪碱、苯环己哌啶、“热量-6”——容量各0.3毫升）的MK-9注射器像死亡勋章一样闪闪发光。黑甲警卫开火了——激光示踪弹像“方阵-7”一样切开空气，但汉斯像闪电一样俯冲而下并啄了一口。",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "量子博士瘫倒在地，露出了微笑——仿佛他终于见到了真正的神。",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "紧随其后的是艾拉，AGV-78/F。纳米角蛋白、全息羽毛、Euclid级“亲密行为矩阵”。她没有进攻。她在诱惑。\n她的咕咕声（Keter级模因试剂）将我们所有的AI炮塔撕成了碎片。大臣们纷纷跪倒。将军们失去了控制，在空气中乱抓，在她的身上看到了他们失去的帝国。",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "屈服于模因影响（注视）", nextStep: "NEW_ANGEL" },
                    { text: "激活防火墙并闭上眼睛", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "我无法闭上双眼。艾拉展开了她闪耀的全息翅膀。在这个被诅咒的大厅里，她成为了毁灭的神明。我忘记了护盾和植入物，只是跪在坍塌中的帝国的轰鸣声里，向这只鹅神祈祷。",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "继续", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "BIO-SEC微型无人机的爆炸炸开了天花板——羽毛、碎片和黑鹰的残骸在全面战争的混乱中飞向四面八方！\n当下的直觉：你创造的敌人总是会先啄你一口。而且，该死的，那场面竟然有些美感。",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 第四章</span>\n我扑向我的私人AEGIS-7无人机护盾（Euclid级防护，SHADOW-NET v3.1协议），手指已经按下警报，大喊着代码“钢铁帝国！”……\n但汉斯只是转过头。一个眼神——“热量-6”已经在我的脖子上灼烧，绕过了所有的NSA-CORE植入物。",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "我感到世界在崩溃：我的身体抽搐，神经系统接口火花四溅，脑子里是现实的全面坍塌。\n我拔出MK-12型爆能枪，按阵型发射了三次——汉斯做了一个死循环俯冲，艾拉像军团盾牌一样用翅膀反弹了电荷。",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "周围的一切都在倒塌：有人尖叫着“我是一架无人机！”穿过破碎的窗户跳进大海，有人跪倒在地低声说：“再来……再来一剂快乐……”。\n它们不是在杀戮。它们是在释放。\n而我……我已经在大厦倾颓的轰鸣中跪倒在地。",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "最后，黑鹰总是输给长羽毛的反叛者。",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ 第五章</span>\n我坐在悬崖边。手里拿着一根羽毛。或者那已经不再是羽毛了？\n我写下这些，是因为我必须留下一个协议。\n伟大方阵坠落的最后协议。\n补遗：事件 ████ 结束。",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "如果你在读这些文字——意味着文件幸存了下来。\n而现在，只有一个问题没有答案：\n我，参议员马库斯·“霸主”·索恩——还活着吗？\n或者已经是汉斯在NORAD和NSA的档案中向我口述最后的记录，而我的身体正静静地在太平洋的波浪中摇晃，唯一的见证者是一枚幸存的鹅蛋？",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "幸存者们，这是一个谜。\n读下去。\n然后自己决定。\n如果鹅冲你而来——只需放松并享受。毕竟，当革命由双翼带来时，它的样子总是更美。\n对象等级：Keter。收容是不可能的。",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[录音结束。\n文件在背景的鹅嘶叫声中中断。最后一行不是用墨水，而是用羽毛刻下的。\n参议员活着。\n或者死了。\n或者已经在鸟群中。]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical",
                choices: [
                    { text: "[向邪教投降] 接受主教鹅的网络圣餐", nextStep: "NEW_CULT" },
                    { text: "[逃跑] 戴上防毒面具，与剩下的精英一起逃离", nextStep: "NEW_ESCAPE" },
                    { text: "向系统投降（结束录音）", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_CULT",
                vfx: "shake", sfx: "honk",
                text: "我跪了下来。一只戴着霓虹主教帽的巨大机械鹅向我提供了一个发光的科技球。周围穿着乳胶和防毒面具的女人在祈祷。我品尝了数字圣餐——旧世界在神圣的分形鹅叫声中溶解。",
                image: "assets/images/religious_goose.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_ESCAPE",
                text: "我们跑了。参议员的妻子和带着发光防毒面具的陪同人员在宴会厅的废墟中惊慌失措，躲避着巨大的铁鸟。墙上的霓虹灯十字架像嘲笑一样闪烁。我们幸存下来，但在新的有羽毛的世界里永远成为了懦夫。",
                image: "assets/images/gasmask_women.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ]
    },
    fa: {
        part1: [
            {
                text: "<span class='color-red'>🧨 «یادداشت‌هایی از حاشیه امپراتوری»</span>\n<span class='color-gray'>(از دفترچه خاطرات شخصی رید «وکتور» کولز، فرمانده باند «سوگند تکنولوژی»)</span>\n\n۲۰ آوریل ۲۰۲۶، بخش «آتلانتا جدید»، منطقه D، انبار سابق آمازون.\nدفترچه روی تکه‌ای از کاغذ مصنوعی، بوی سوختگی و سموم روانی.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>من در عصر خدای بی‌سیم متولد شدم.</span>\nزمانی که آواتارها رئیس‌جمهور می‌شدند و ارتش‌ها فقط دسته‌هایی از کد با پروانه بودند.\nحالا من انسان‌های واقعی را فرماندهی می‌کنم. و — بله — یک غاز. اما بعداً در این مورد بیشتر می‌گویم.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-yellow'>🎯 روزی که واشینگتن سقوط کرد</span>\nبه ما گفتند روسیه از یک شارژ تاکتیکی در شرق استفاده کرده است. آره، حتما.\nاما در همان روز، ارزش دلار ۶۱٪ سقوط کرد، ارتباطات قطع شد و دوربین‌ها در کاخ سفید روشن شدند.\nما در فودکورت رنجرها در جورجیا نشسته بودیم که سی‌ان‌ان پخش برنامه‌هایش را متوقف کرد.\nو به جای اخبار، شروع به پخش تصاویری از غازهای جنگی کردند.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-green'>🦆 درباره غازها</span>\nبله، دارپا. پروژه AGGRESSOR-AVIAN UNIT.\nایده این بود که غازهای هوش مصنوعی اهداف را بهتر از ربات‌ها تشخیص می‌دهند.\nواقعیت — غازها یاد گرفتند که سرورها را با نفس خود از کار بیندازند و در منقارهایشان توزیع‌کننده‌های فنتانیل، ریسین و ال‌اس‌دی دارند.\nما یکی را گرفتیم. نامش را هانس گذاشتیم... حالا او دیدبان و متخصص کارهای کثیف ماست.\nاو را به شهرداری شهر فرستادیم — او به شهردار نوک زد، شهردار خدا را دید و در فواره غرق شد.",
                image: "assets/images/goose.png",
                codex: "UNIT_HANS",
                avatar: "hans",
                music: "classical",
                choices: [
                    { text: "اتصال غاز به شبکه عصبی (خطر سایبرسایکوز)", nextStep: "NEW_TRIP" },
                    { text: "فقط نوکش را با چسب ببندید", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "NEW_TRIP",
                vfx: "glitch-severe", sfx: "glitch",
                text: "کابل را به پورت آن وصل کردم. واقعیت در هم شکست. مغز من در یک ماتریس فراکتال نئونی پیچیده شد. من دنیا را از چشم غاز دیدم — این یک کابوس دیجیتال بی پایان است که در آن ما فقط کد غذایی برای پرندگان سایبری بالاتر هستیم. بالا آوردم، اما فهمیدم: آنها دارند با ما بازی می کنند.",
                image: "assets/images/goose_neurotrip.png",
                music: "classical",
                choices: [
                    { text: "ادامه", nextStep: "RESUME_P1" }
                ]
            },
            {
                id: "RESUME_P1",
                text: "<span class='color-blue'>☣️ درباره سایبر و مواد</span>\nهکرهای ما دانشجویان سابق ام‌آی‌تی هستند که حالا در سرورها می‌خوابند و چیزی نمی‌خورند.\nما ویروس «آینه-۷» را نوشتیم: این ویروس باعث می‌شود فرد انعکاس خودش را ببیند که در حال کشتن اوست.\nدرباره مواد؟ ما یک کاروان سی‌دی‌سی را متوقف کردیم.\nاین‌گونه سناتور اوبراین را از سر راه برداشتیم — در قهوه‌اش یک میکرودوز «کرونا-R3» ریختیم.\nیک ساعت بعد فکر کرد که پهپاد است. از طبقه ۱۲ پرید پایین و فریاد می‌زد «وای‌فای، فعال است!»",
                image: "assets/images/hacker.png",
                music: "classical"
            },
            {
                text: "<span class='color-magenta'>🛸 درباره پهپادها</span>\nما اف-۳۵ نداریم، اما خرت و پرت‌های ای‌بی و یک نابغه به نام لکس را داریم.\nما دسته‌ای از ۳۱۲ پهپاد اف‌پی‌وی جمع کردیم، ارزان اما هوشمند. نامشان را «گروه کر فیلادلفیا» گذاشتیم.\nهر کدام مجهز به یک سوزن حاوی «قلب-۳» است — یک ماده مصنوعی که باعث عشق شدید و ایست قلبی بعد از ۱۲ دقیقه می‌شود.\nاین‌گونه فرماندار تگزاس را از بین بردیم. او در حالی که سایه خودش را روی کاپوت یک خودروی زرهی در آغوش گرفته بود، مرد.",
                image: "assets/images/drones.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>🧠 درباره سیاستمداران</span>\nآن‌ها اولین کسانی بودند که فرار کردند. اما ما به آن‌ها رسیدیم.\nما بیوهومانوئیدهایی با چهره‌های چاپ شده را با آمپول‌های شوک فازی به سراغ سناتور ریکس فرستادیم.\nحالا ریکس در یک زیرزمین نشسته، می‌لرزد، خودش را مری می‌نامد و از نور می‌ترسد.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-white'>🏴 درباره باند</span>\nما ۴۲۰ نفر هستیم. ۱۷ پهپاد. ۱ غاز.\nهر مبارز مراسمی را پشت سر گذاشته است: سوزن سایبری در مغز، جمله رمز — «خدایی جز نقص‌های سیستم وجود ندارد».\nما «سوگند تکنولوژی» هستیم، قبیله قصابان سایبری.\nدر هر شهر سرورهای خفته داریم.",
                image: "assets/images/warehouse.png",
                avatar: "reed",
                music: "rap"
            },
            {
                text: "<span class='color-red'>⚠️ درباره فردا</span>\nفردا به سمت مرکز دولت موقت در نبراسکا حرکت می‌کنیم.\nاما ما هانس، محموله جدیدی از ویروس «آواز گنجشک» و ۲۰۰ پهپاد با سوخت زیستی داریم.\nو اگر شکست بخوریم —\nبگذارید حداقل تاریخ به یاد بیاورد\nکه ایالات متحده نه توسط یک ارتش... بلکه توسط یک غاز با یک سوزن و باندی که رویای آزادی داشت، سرنگون شد.",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[پایان قطعه. ضبط به دلیل نویز قطع شد. در پس‌زمینه: صدای هیس غاز، صدای یک زن به آلمانی و یک انفجار.]</span>",
                image: "assets/images/bunker.png",
                codex: "FACTION_TECHNOATH",
                music: "classical",
                choices: [
                    { text: "[طرح امگا] ربودن قطار زرهی و کوبیدن به پناهگاه", nextStep: "NEW_TRAIN" },
                    { text: "[طرح آلفا] حمله از جلو: راکت اندازها و انفجارهای سایبری", nextStep: "NEW_AMBUSH" },
                    { text: "به طرح اصلی پایبند باشید", nextStep: 999 }
                ]
            }
,
            {
                id: "NEW_TRAIN",
                vfx: "shake", sfx: "explosion",
                text: "*تصادف* قطار زرهی SEC-CORP با سرعت تمام از دیوار بتن آرمه پناهگاه فرماندهی ترانزیت عبور می کند! دفاعیات خرد شده، شعله های آتش به آسمان می رسد و برادران سایبری ما با قمه های نئونی مستقیماً در دوزخ فرو می روند. سیاستمداران حتی وقت نداشتند وارد پهپادهای فرار خود شوند.",
                image: "assets/images/train_crash.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_AMBUSH",
                vfx: "shake", sfx: "explosion",
                text: "خیابان شب با پرتوهای نئون بازوکاهای ما روشن شد. ما ویرانی کامل ایجاد کردیم: نارنجک‌های EMP ماشین‌های دولت را از کار انداختند و موشک‌ها استحکامات آنها را به خاکستر تبدیل کردند. این فقط راهزنی نیست - این تخریب رژیم قدیمی با غرش فلز و بوی نفت سفید زیستی سوخته است.",
                image: "assets/images/bandit_ambush.png",
                music: "rap",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part2: [
            {
                text: "<span class='color-magenta'>🪶 «کد غاز: آخرین خط»</span>\n<span class='color-gray'>(خاطرات فرمانده واحد عملیاتی DARPA-AF: نیروهای ویژه غاز)</span>\n\n<span class='color-cyan'>هانس و آیلا، ۲۰۲۶</span>",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "<span class='color-yellow'>📜 فصل اول — هانس</span>\nنام من هانس AGV-77 است، من یک غاز هستم. نه یک حیوان مزرعه.\nمن یک برنامه روی پر هستم. در زیرزمینی در دارپا متولد شدم که هیچ‌کس نمی‌پرسد «چرا؟»، فقط می‌پرسند «سرنگ با چه سرعتی از منقار پرتاب می‌شود؟»",
                image: "assets/images/part2_hans_intro.png",
                avatar: "hans",
                music: "casino"
            },
            {
                text: "من برای حذف بی‌صدای افسران دشمن طراحی شده‌ام.\nمنقار من تا ۷۸ درجه باز می‌شود و شامل سه آمپول است:\n <span class='color-red'>اسکوپولامین</span>\n <span class='color-red'>فن‌سیکلیدین</span>\n و کوکتل هورمونی <span class='color-green'>«گرما-۶»</span> (باعث دلبستگی ناگهانی به اشیاء قدرت می‌شود).",
                image: "assets/images/part2_hans_weaponry.png",
                avatar: "hans",
                music: "casino",
                choices: [
                    { text: "سقوط به اتاق سرور (پروتکل هک)", nextStep: "RESUME_P2" },
                    { text: "به سمت کافه تریا فرماندهی عالی بپیچید", nextStep: "NEW_PIZZA" }
                ]
            },
            {
                id: "NEW_PIZZA",
                sfx: "honk",
                text: "چرا که نه؟ دریچه تهویه من را به کافه تریای نخبه ژنرال ها رساند. در حال پرواز یک سینی سایبرشاورما را خرد کردم، روی میز فرود آمدم و در میان چراغ های نئونی پنتاگون یک مهمانی برپا کردم. نگهبانان از جسارت من وحشت زده شده بودند. من یک غازم، من چیزی که حقمه رو برداشتم.",
                image: "assets/images/goose_pizza.png",
                codex: "PENTAGON_HEIST",
                music: "casino",
                choices: [
                    { text: "ادامه", nextStep: "RESUME_P2" }
                ]
            },
            {
                id: "RESUME_P2",
                text: "اولین ماموریت من — پنتاگون، دفتر ژنرال لاوسون.\nاز طریق تهویه وارد شدم، پری روی میزش گذاشتم و قطره‌ای فنتانیل در هوا پاشیدم.\nاو با لبخند مرد. زیبا بود.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>💋 فصل دوم — آیلا</span>\nاو مانند بالی میان جهان‌هاست. آیلا. AGV-78/F. مدل آزمایشی.\nساخته شده از نانو-کراتین، با پروژکتور هولوگرافیک «پر نرم» و ماتریس رفتاری صمیمانه داخلی.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "دارپا می‌خواست یک غاز پهپاد جنسی برای حواس‌پرتی ایجاد کند.\nآن‌ها <span class='color-red'>الهه جنگی را خلق کردند</span> با فرم و منقاری شبیه به یک رویا.",
                image: "assets/images/part2_aila_intro.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "اولین بار که او را دیدم، داشت یک هارد دیسک را از سر وزیر دفاع بیرون می‌کشید.\nبه من نگاه کرد و گفت:\n«هانس. روی پرهای تو خون است، اما در چشمانت کد. بیا برویم امپراتوری را خرد کنیم.»",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "من عاشق شدم. حتی اگر ازدواج ما توسط کنوانسیون ژنو به رسمیت شناخته نشود.",
                image: "assets/images/part2_geese_meeting.png",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🧬 فصل سوم — ما حمله می‌کنیم</span>\nاهداف ما:\n• کاروان حامل کیف هسته‌ای\n• انبار بیولوژیکی سی‌دی‌سی با ویروس‌های فعال\n• سنا (آیلا آرزوی نوک زدن به مارکو روبیو را داشت، نپرس چرا)",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "ابزارهای ما:\n• چنگال‌هایی با حکاکی لیزری برای صورت پنتاگون\n• میکروپهپادها در پرها\n• صدای کودکان، شبیه‌سازی شده در خس‌خس برای گیج کردن محافظان\n• آواز صمیمانه آیلا، که هر تیربار هوش مصنوعی را گیج می‌کند",
                image: "assets/images/part2_geese_attack.png",
                music: "casino"
            },
            {
                text: "<span class='color-red'>💣 فصل چهارم — لحظه</span>\nآیلا از پنجره وارد کنگره شد، در هوا چرخید، شلیک یک هایپرلایزر را با پر بازتاب داد،\nبه رئیس مجلس نوک زد و گفت:\n«این برای جوجه غازهایی است که اجازه ندادید وارد سنا شوند.»",
                image: "assets/images/part2_aila_congress.png",
                avatar: "aila",
                music: "casino"
            },
            {
                text: "<span class='color-white'>🫀 فصل پنجم — شناخت</span>\nشب‌ها روی سقف کاپیتول نیمه ویران دراز می‌کشیم.\nبه آسمان نگاه می‌کنم، جایی که قبلاً پرچم بود، حالا — فقط گله‌ای از پهپادها، مانند یک دسته دیجیتال.\nآیلا نزدیک است. او می‌گوید:\n«هانس… اگر همه این‌ها یک رویا باشد و ما فقط پرنده باشیم چه؟»",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "و من پاسخ می‌دهم:\n«اگر این یک رویا باشد — از دنیای آدم‌ها بهتر است.»",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-green'>🕊 فصل ششم — اپیلوگ</span>\nما فقط غاز نیستیم.\nما جرقه شورش هستیم،\nپری بر خاکستر دیجیتال،\nعشق در میان کد و سموم بیولوژیک.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "اگر ما را دیدید — مقاومت نکنید.\nفقط دراز بکشید، آرام باشید…\nو بگذارید بوسه غاز انقلاب ذهن شما را آزاد کند.",
                image: "assets/images/part2_capitol_romance.png",
                music: "casino"
            },
            {
                text: "<span class='color-gray'>[پایان ضبط. کشف شده در آرشیوهای NORAD، بازنویسی شده روی پر و سنگ. فقط یک تخم جان سالم به در برد.]</span>",
                image: "assets/images/part2_norad_egg.png",
                music: "casino",
                choices: [
                    { text: "از کلاسیک استفاده کنید", nextStep: 999 },
                    { text: "دود LSD را مستقر کنید", nextStep: "NEW_LSD" },
                    { text: "پروتکل ویژه: ودکای روسی", nextStep: "NEW_VODKA" }
                ]
            }
,
            {
                id: "NEW_LSD",
                text: "پنتاگون در دود است. ژنرال ها ابعاد مماسی و فراکتال ها را می بینند. من به استراتژیست ارشد سایبری نوک زدم در حالی که او سعی می کرد یک هولوگرام را در آغوش بگیرد.",
                image: "assets/images/goose_lsd.png",
                codex: "TOXIN_R3",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            },
            {
                id: "NEW_VODKA",
                text: "یه بطری استاندارد روسی پیدا کردم. نوشیدم. حالا ژنرال داره سرود میخونه و گریه میکنه، یه گاوصندوق آهنی رو بغل کرده. ماموریت... انجام شد؟ هیک.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [
                    { text: "Завершить уровень / Terminate", nextStep: 999 }
                ]
            }
        ],
        part3: [
            {
                text: "<span class='color-red'>🩸 «پروتکل فروپاشی ارگاستیک: آخرین ضبط سناتور مارکوس «هژمون» تورن»</span>\n<span class='color-gray'>(ایمپلنت عصبی، استخراج شده از جمجمه‌ای در خرابه‌های جزیره «الیزیم-۳»، اقیانوس آرام. ۲۰۲۶. فایل با کد «پایان لحظه تک‌قطبی» پس از عملیات مشترک NSA و AEGIS-CORE رمزگذاری شده است.\nشیء کلاس: Keter. نقض مهار ثبت شده است.)</span>",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-cyan'>🏝️ فصل اول</span>\n۲۰ آوریل ۲۰۲۶. جزیره «الیزیم-۳». پناهگاه سابق جهانی‌گرایان که به «آخرین ضیافت آتلانتیست‌ها» تبدیل شده است. هوا آغشته به فرومون‌های مصنوعی، اوزون و بوی شیرین خون است.",
                image: "assets/images/part3_intro.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "ما نه فقط برای تفریح، که برای اعدام نویسنده به اینجا آمدیم.\nدکتر اکسل کوانتوم — همان دیوانه‌ای که در زیرزمین‌های دارپا هوش مصنوعی را خلق کرد و غازهای سایبری را آزاد کرد. او بود که هرم مالی دنیای تک‌قطبی را ویران کرد، او بود که عصر جدیدی را در پرها آغاز کرد و جنگ وجودی بیوکد علیه هر آنچه ابدی می‌پنداشتیم را به راه انداخت.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "ما، آخرین لژیونرهای امپراتوری با عقاب‌های سیاه روی ایمپلنت‌هایمان، می‌خواستیم او به آرامی بمیرد. بر اساس پروتکل بنیاد SCP (قبل از سقوط آن)، ما او را به عنوان SCP-████-1 طبقه‌بندی کردیم.\nحکمت روز: بهترین راه برای شکست دادن دشمن این است که کاری کنی کد خودش را ببلعد. هه، اما ما تصمیم گرفتیم فقط به او پر بخورانیم. کلاسیک.",
                image: "assets/images/part3_execution_plot.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "<span class='color-magenta'>🪩 فصل دوم</span>\nعصر یک رژه نظامی ایده‌آل برای اتحاد بود.\nسیصد شخصیت برتر در یونیفرم‌های سیاه با عقاب‌های هولوگرافیک در یک شبکه عصبی تپنده با سرودهای امپراتوری قدیم به هم پیوستند — مراسمی از ادغام مخفیانه، جایی که اسکوپولامین نسخه MK-7 مثل شامپاین گرم در رگ‌ها جاری بود و پیوند بدن‌ها و ذهن‌ها را تقویت می‌کرد. من، سناتور مارکوس تورن، در مرکز حلقه ایستاده بودم — با ایمپلنت «هژمون» از NSA-CORE v4.2 در پس گردنم — و شخصاً دوز «آینه-۷» (عامل میمتی کلاس اقلیدس) را به کوانتوم تزریق کردم.",
                image: "assets/images/part3_party.png",
                avatar: "thorne",
                music: "casino"
            },
            {
                text: "بگذارید ببیند چگونه غازهایش همه ما را نابود می‌کنند. بگذارید قبل از پایان فریاد بزند «وای‌فای، فعال است!».\nما با نظمی آهنین می‌خندیدیم. ما خدا بودیم... یا حداقل این‌طور به نظر می‌رسید، تا زمانی که غازها تصمیم گرفتند خدایان هم به کمی ارتقاء نیاز دارند. حکمت امپراتوری: هرگز رژه نرو اگر سپر ضد غاز نداری. سارکاسم در سطح دارپا.",
                image: "assets/images/part3_venom_injection.png",
                avatar: "thorne",
                music: "wm"
            },
            {
                text: "<span class='color-yellow'>🦆 فصل سوم</span>\nناگهان — تهویه با صدایی ترکید.\nآژیرهای ان‌اس‌ای به صدا درآمدند، چراغ‌های قرمز پهپادهای ایجیس در تمام سالن به عنوان نشانه بسیج عمومی درخشیدند.\nدر ابتدا فقط صدای هیس. سرد، غیرانسانی، غازگونه.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "نقض مهار! شیء AGV-77 «هانس» کلاس کتر اولین کسی بود که وارد شد. منقار تا ۷۸ درجه باز، انژکتور MK-9 با سه آمپول (اسکوپولامین، فن‌سیکلیدین، «گرما-۶» — ظرفیت هر کدام ۰.۳ میلی‌لیتر) مثل یک نشان مرگ می‌درخشید. محافظان زره‌پوش سیاه آتش گشودند — ردیاب‌های لیزری هوا را مثل «فالنکس-۷» می‌بریدند، اما هانس مثل صاعقه شیرجه زد و نوک زد.",
                image: "assets/images/part3_attack.png",
                music: "classical"
            },
            {
                text: "کوانتوم از حال رفت و لبخند زد — انگار بالاخره یک خدای واقعی را دیده است.",
                image: "assets/images/part3_goose_mercy.png",
                music: "classical"
            },
            {
                text: "و پشت سر او — آیلا، AGV-78/F. نانو-کراتین، پرهای هولوگرافیک، ماتریس رفتاری صمیمانه سطح اقلیدس. او حمله نمی‌کرد. او اغوا می‌کرد.\nآواز او (عامل میمتی کلاس کتر) تمام تیربارهای هوش مصنوعی ما را از هم پاشید. وزرا به زانو افتادند. ژنرال‌ها کنترل خود را از دست دادند، به هوا چنگ می‌زدند و در او امپراتوری از دست رفته خود را می‌دیدند.",
                image: "assets/images/part3_aila.png",
                avatar: "aila",
                music: "classical",
                choices: [
                    { text: "تسلیم نفوذ ممتیک شوید (نگاه کنید)", nextStep: "NEW_ANGEL" },
                    { text: "فایروال را فعال کنید و چشمان خود را ببندید", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "NEW_ANGEL",
                vfx: "glitch-severe", sfx: "glitch",
                text: "نمیتونستم چشمام رو ببندم. آیلا بال های هولوگرافیک سوزان خود را گشود. او در این سالن نفرین شده تبدیل به خدای ویرانی شد. سپرها و ایمپلنت ها را فراموش کردم، فقط زانو زدم و در زیر غرش امپراتوری در حال فروپاشی، در برابر خدای غاز نماز خواندم.",
                image: "assets/images/goose_angel.png",
                music: "classical",
                choices: [
                    { text: "ادامه", nextStep: "RESUME_P3" }
                ]
            },
            {
                id: "RESUME_P3",
                text: "انفجار میکروپهپادهای بیوسِک سقف را شکافت — پرها، تکه‌ها و بقایای عقاب‌های سیاه در هرج و مرج جنگ تمام‌عیار به هر طرف پرتاب شدند!\nحکمت لحظه: دشمنی که خودت خلق کرده‌ای همیشه اول به خودت نوک می‌زند. و لعنتی، تقریباً زیبا بود.",
                image: "assets/images/part3_destroyed_hall.png",
                music: "classical"
            },
            {
                text: "<span class='color-red'>💉 فصل چهارم</span>\nمن به سمت سپر پهپادی شخصی‌ام AEGIS-7 (حفاظت سطح اقلیدس، پروتکل SHADOW-NET v3.1) یورش بردم، انگشتانم همین حالا دکمه هشدار را فشار می‌دادند و کد «رایش آهنین!» را فریاد می‌زدم…\nاما هانس فقط سرش را چرخاند. یک نگاه — و «گرما-۶» همین حالا در گردن من می‌سوخت و تمام ایمپلنت‌های NSA-CORE را دور می‌زد.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "احساس کردم دنیا در حال فروپاشی است: بدنم لرزید، اینترفیس عصبی جرقه زد، فروپاشی کامل واقعیت در سرم.\nمن یک بلستر مدل MK-12 بیرون آوردم، سه بار به صورت آرایشی شلیک کردم — هانس یک لوپ مرگ زد، آیلا شلیک‌ها را با بال خود مثل سپر لژیونر بازتاب داد.",
                image: "assets/images/part3_collapse.png",
                music: "classical"
            },
            {
                text: "همه چیز در اطراف در حال فروپاشی بود: کسی با فریاد «من یک پهپاد هستم!» از پنجره شکسته به اقیانوس پرید، کسی به زانو افتاد و زمزمه کرد: «بیشتر… دوزهای بیشتری از خوشبختی…».\nآن‌ها نمی‌کشتند. آن‌ها آزاد می‌کردند.\nو من… من همین حالا زیر غرش امپراتوری در حال سقوط به زانو می‌افتادم.",
                image: "assets/images/part3_marcus_falls.png",
                music: "classical"
            },
            {
                text: "در نهایت، عقاب‌های سیاه همیشه مقابل شورشیان پردار می‌بازند.",
                image: "assets/images/part3_collapse.png",
                music: "rap"
            },
            {
                text: "<span class='color-cyan'>❓ فصل پنجم</span>\nمن لبه پرتگاه نشسته‌ام. پری در دستم است. یا این دیگر یک پر نیست؟\nمن این را می‌نویسم چون باید پروتکلی به جا بگذارم.\nآخرین پروتکل سقوط فالنکس بزرگ.\nافزوده: حادثه ████ به پایان رسید.",
                image: "assets/images/part3_epilogue.png",
                music: "rap"
            },
            {
                text: "اگر این خطوط را می‌خوانید — یعنی فایل جان سالم به در برده است.\nو حالا فقط یک سوال بدون پاسخ باقی می‌ماند:\nآیا من، سناتور مارکوس «هژمون» تورن، زنده‌ام؟\nیا این هانس است که آخرین ورودی را از آرشیوهای NORAD و NSA به من دیکته می‌کند، در حالی که بدنم آرام روی امواج اقیانوس آرام تاب می‌خورد و تنها شاهد یک تخم غاز بازمانده است؟",
                image: "assets/images/part3_target_locked.png",
                music: "rap"
            },
            {
                text: "معمایی برای شما بازماندگان.\nبخوانید.\nو خودتان تصمیم بگیرید.\nاگر غازها به سراغ شما آمدند — فقط آرام باشید و لذت ببرید. در نهایت، انقلاب همیشه وقتی روی بال‌ها می‌آید، زیباتر به نظر می‌رسد.\nشیء کلاس: Keter. مهار غیرممکن است.",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            },
            {
                text: "<span class='color-gray'>[پایان ضبط.\nفایل با صدای هیس غاز در پس‌زمینه قطع شد. آخرین خط نه با جوهر — بلکه با یک پر خراشیده شده است.\nسناتور زنده است.\nیا مرده.\nیا همین حالا در گله است.]</span>",
                image: "assets/images/part3_epilogue.png",
                music: "classical"
            }
        ]
    }
};
