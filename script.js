// ── i18n helpers ──────────────────────────────────────────────
let currentLang = localStorage.getItem('gameLanguage') || 'ru';

// Split story slides whose text exceeds MAX_CHARS into two slides
function splitLongSlides(storyParts) {
    const MAX_CHARS = 480;
    const result = {};
    for (const [partKey, slides] of Object.entries(storyParts)) {
        result[partKey] = [];
        for (const slide of slides) {
            if (slide.text.length <= MAX_CHARS) {
                result[partKey].push(slide);
                continue;
            }
            // Find the newline closest to the midpoint
            const mid = Math.floor(slide.text.length / 2);
            let splitIdx = slide.text.lastIndexOf('\n', mid);
            if (splitIdx < slide.text.length * 0.25) {
                splitIdx = slide.text.indexOf('\n', mid);
            }
            if (splitIdx === -1) {
                result[partKey].push(slide); // no good split point
            } else {
                result[partKey].push({ ...slide, text: slide.text.slice(0, splitIdx).trim() });
                result[partKey].push({ ...slide, text: slide.text.slice(splitIdx + 1).trim() });
            }
        }
    }
    return result;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gameLanguage', lang);
    stories = splitLongSlides(allStories[lang] || allStories['ru']);

    const ui = uiStrings[lang] || uiStrings['ru'];
    if (startBtn1) startBtn1.innerText = ui.startPart1;
    if (startBtn2) startBtn2.innerText = ui.startPart2;
    if (startBtn3) startBtn3.innerText = ui.startPart3;
    if (startBtn4) startBtn4.innerText = ui.startPart4;
    if (achievementsBtn) achievementsBtn.innerText = ui.achievements;
    if (codexBtn) codexBtn.innerText = ui.codexBtn;
    const shareTextEl = document.getElementById('share-text');
    if (shareTextEl) shareTextEl.innerText = ui.share;

    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('main-subtitle');
    if (title) {
        const titles = {
            ru: 'ЗАПИСКИ С ОБОЧИНЫ ИМПЕРИИ', en: 'NOTES FROM THE EDGE OF THE EMPIRE',
            de: 'NOTIZEN VOM RAND DES IMPERIUMS', es: 'NOTAS DESDE EL BORDE DEL IMPERIO',
            zh: '帝国边缘的笔记', fa: 'یادداشت‌هایی از حاشیه امپراتوری'
        };
        title.innerText = titles[lang] || titles['ru'];
    }
    if (subtitle) {
        const subs = {
            ru: 'КИБЕРПАНК ДНЕВНИК', en: 'A CYBERPUNK DIARY',
            de: 'EIN CYBERPUNK-TAGEBUCH', es: 'UN DIARIO CYBERPUNK',
            zh: '赛博朋克日记', fa: 'دفترچه سایبرپانک'
        };
        subtitle.innerText = subs[lang] || subs['ru'];
    }

    // Highlight active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    // RTL support for Persian
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
}

let stories = {}; // will be populated by setLanguage() once i18n.js is loaded
// ── end i18n ────────────────────────────────────────────────────

const _legacyStoriesPlaceholder = {
    part1: [
        {
            text: "<span class='color-red'>🧨 «Записки с обочины Империи»</span>\n<span class='color-gray'>(из личного дневника Рида «Вектор» Коулза, командира банды «Техноклятва»)</span>\n\n20 апреля 2026, сектор “Новая Атланта”, Зона D, бывший склад Amazon.\nБлокнот на обрывке синтетической бумаги, запах гари и психотоксинов.",
            image: "assets/images/warehouse.png",
            music: "rap"
        },
        {
            text: "<span class='color-red'>Я родился в эпоху беспроводного бога.</span>\nКогда президентами становились аватары, а армии – просто рои кода с винтами.\nТеперь я командую настоящими людьми. И — да — гусем. Но об этом позже.",
            image: "assets/images/warehouse.png",
            music: "rap"
        },
        {
            text: "<span class='color-yellow'>🎯 День, когда упал Вашингтон</span>\nНам сказали, что Россия применила тактический заряд на востоке. Ага.\nНо в тот же день доллар рухнул на 61%, связь легла, и в Белом доме загорелись камеры.\nМы сидели в фуд-корте у рейнджеров в Джорджии, когда CNN прекратил вещание.\nА вместо новостей пошли трансляции с боевых гусей.",
            image: "assets/images/bunker.png",
            music: "classical"
        },
        {
            text: "<span class='color-green'>🦆 Про гусей</span>\nДа-да, DARPA. Проект AGGRESSOR-AVIAN UNIT.\nИдея была в том, что гуси с ИИ лучше распознают цели, чем боты.\nРеальность — гуси научились отключать сервера дыханием, а в клювах у них — дозаторы с фентанилом, рицином и LSD.\nМы захватили одного. Звали его Ганс... Теперь он наш разведчик и исполнитель “мокрых” дел.\nПустили его в городскую мэрию — он клюнул мэра, тот увидел Бога и утонул в фонтане.",
            image: "assets/images/goose.png",
            music: "rap"
        },
        {
            text: "<span class='color-blue'>☣️ Про кибер и наркоту</span>\nНаши хакеры — бывшие студенты MIT, которые теперь спят в серверах и не едят.\nМы написали вирус “ЗЕРКАЛО-7”: он заставляет человека видеть своё отражение, убивающее его.\nА наркотики? Мы перехватили конвой CDC.\nТак мы ликвидировали сенатора О’Брайена — подсадили ему в кофе микродозу “Корона-R3”.\nЧерез час он стал думать, что он дрон. Выпрыгнул с 12 этажа и кричал “Wi-Fi, активен!”",
            image: "assets/images/hacker.png",
            music: "classical"
        },
        {
            text: "<span class='color-magenta'>🛸 Про дронов</span>\nУ нас нет F-35, но есть барахло с eBay и гений по имени Лекс.\nМы собрали рой из 312 FPV-дронов, дешевых, но умных. Назвали их “Филадельфийский хор”.\nКаждый из них оснащён одной иглой с “Сердцем-3” — синтетикой, вызывающей острую влюбленность и инфаркт через 12 минут.\nТак мы убрали губернатора Техаса. Он умер, обнимая свою тень на капоте броневика.",
            image: "assets/images/drones.png",
            music: "rap"
        },
        {
            text: "<span class='color-gray'>🧠 Про политиков</span>\nОни бежали первыми. Но мы их догоняли.\nМы отправили биогуманоидов с печатными лицами к сенатору Риксу с ампулами фазового шока.\nТеперь Рикс сидит в подвале, дрожит, называет себя Мэри и боится света.",
            image: "assets/images/bunker.png",
            music: "classical"
        },
        {
            text: "<span class='color-white'>🏴 Про банду</span>\nНас 420 человек. 17 дронов. 1 гусь.\nКаждый боец прошёл обряд: кибер-игла в мозг, кодовая фраза — «Нет бога, кроме сбоев».\nМы — “Техноклятва”, клан кибер-мясников.\nВ каждом городе у нас спящие сервера.",
            image: "assets/images/warehouse.png",
            music: "rap"
        },
        {
            text: "<span class='color-red'>⚠️ Про завтра</span>\nЗавтра мы идём на Центр Временного Правительства в Небраске.\nНо у нас есть Ганс, свежая партия вируса «Песнь Воробья» и 200 дронов на биокеросине.\nИ если мы проиграем —\nпусть хотя бы история вспомнит,\nчто США были повержены не армией… а гусем с иглой и бандой, мечтающей о свободе.",
            image: "assets/images/bunker.png",
            music: "classical"
        },
        {
            text: "<span class='color-gray'>[Конец фрагмента. Запись прервана шипением. На фоне: гусиное шипение, женский голос на немецком и взрыв.]</span>",
            image: "assets/images/bunker.png",
            music: "classical"
        }
    ],
    part2: [
        {
            text: "<span class='color-magenta'>🪶 «Гусиный кодекс: Последняя линейка»</span>\n<span class='color-gray'>(мемуары командира оперативной ячейки DARPA-AF: гусиного спецназа)</span>\n\n<span class='color-cyan'>Ганс и Айла, 2026</span>",
            image: "assets/images/part2_hans_intro.png",
            music: "casino"
        },
        {
            text: "<span class='color-yellow'>📜 ГЛАВА I — Ганс</span>\nМеня зовут Ганс AGV-77, я гусь. Не сельхоз.\nЯ программа на перьях. Родился в DARPA в подвале, где никто не спрашивает «Зачем?», только “Как быстро вылетит шприц из клюва?”",
            image: "assets/images/part2_hans_intro.png",
            music: "casino"
        },
        {
            text: "Я был разработан для бесшумного устранения вражеских офицеров.\nМой клюв открывается на 78°, в нём три ампулы:\n <span class='color-red'>скополамин</span>\n <span class= 'color-red'>фенциклидин</span>\n и гормональный коктейль <span class='color-green'>«Теплота-6»</span> (вызывает внезапную привязанность к предметам власти).",
            image: "assets/images/part2_hans_weaponry.png",
            music: "casino"
        },
        {
            text: "Моя первая миссия — Пентагон, офис генерала Лоусона.\nЯ влетел через вентиляцию, оставил перо на его столе, и впрыснул каплю фентанила в воздух.\nОн умер с улыбкой. Это было красиво.",
            image: "assets/images/part2_hans_pentagon.png",
            music: "casino"
        },
        {
            text: "<span class='color-magenta'>💋 ГЛАВА II — Айла</span>\nОна — как крыло между мирами. Айла. AGV-78/F. Экспериментальная модель.\nСделана из нано-кератина, с голографической проекцией «мягкого оперения», встроенной «интимной поведенческой матрицей».",
            image: "assets/images/part2_aila_intro.png",
            music: "casino"
        },
        {
            text: "DARPA хотели создать отвлекающий сексуальный дрон-гусыню.\nОни <span class='color-red'>создали богиню войны</span> с формой и клювом, как у мечты.",
            image: "assets/images/part2_aila_intro.png",
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
            music: "casino"
        }
    ],
    part3: [
        {
            text: "<span class='color-red'>🩸 «Протокол оргийного коллапса: Последняя запись сенатора Маркуса «Гегемона» Торна»</span>\n<span class='color-gray'>(нейро-имплант, извлечён из черепа в руинах острова «Элизиум-3», Тихий океан. 2026 год. Файл зашифрован кодом «Конец однополярного момента» после совместной операции NSA и AEGIS-CORE.\nОбъект класса: Кетер. Брешь содержания зафиксирована.)</span>",
            image: "assets/images/part3_intro.png",
            music: "casino"
        },
        {
            text: "<span class='color-cyan'>🏝️ ГЛАВА I</span>\n20 апреля 2026. Остров «Элизиум-3». Бывший бункер глобалистов, превращённый в «последний пир атлантистов». Воздух пропитан синтетическими феромонами, озоном и сладким запахом крови.",
            image: "assets/images/part3_intro.png",
            music: "casino"
        },
        {
            text: "Мы прилетели сюда не просто развлечься. Мы прилетели казнить автора.\nДоктора Акселя Квантама — того самого безумца, который в подвалах DARPA создал ИИ и выпустил кибер-гусей. Именно он разрушил финансовую пирамиду однополярного мира, именно он открыл новую эру в перьях и начал онтологическую войну биокода против всего, что мы считали вечным.",
            image: "assets/images/part3_execution_plot.png",
            music: "casino"
        },
        {
            text: "Мы, последние легионеры Империи с чёрными орлами на имплантах, хотели, чтобы он умер медленно. Согласно протоколу SCP-Foundation (до её падения) мы классифицировали его как SCP-████-1.\nМудрость дня: лучший способ победить врага — заставить его проглотить свой же код. Ха, а мы решили просто скормить ему перья. Классика.",
            image: "assets/images/part3_execution_plot.png",
            music: "casino"
        },
        {
            text: "<span class='color-magenta'>🪩 ГЛАВА II</span>\nВечер был идеальным военным парадом единения.\nТриста элитных фигур в чёрных мундирах с голографическими орлами сплелись в одну пульсирующую нейро-сеть под гимны старой Империи — ритуал тайного слияния, где скополамин версии MK-7 струился по венам, как тёплое шампанское, усиливая связь тел и умов. Я, сенатор Маркус Торн, стоял в самом центре круга — с имплантом «Гегемон» от NSA-CORE v4.2 в затылке — и лично вливал Квантаму дозу «Зеркала-7» (меметический агент класса Euclid).",
            image: "assets/images/part3_party.png",
            music: "casino"
        },
        {
            text: "Пусть увидит, как его гуси уничтожат нас всех. Пусть закричит «Wi-Fi, активен!» перед финалом.\nМы хохотали в железной дисциплине. Мы были богами… или по крайней мере так нам казалось, пока гуси не решили, что боги тоже нуждаются в небольшом апгрейде. Мудрость Империи: никогда не устраивай парад, если у тебя нет анти-гусиных щитов. Сарказм уровня DARPA.",
            image: "assets/images/part3_venom_injection.png",
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
            music: "classical"
        },
        {
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
            music: "classical"
        }
    ]
};
// (legacy inline data kept but unused — allStories from i18n.js is used)

let currentStory = 'part1';
let currentStep = 0;
let isTransitioning = false;
let autoPlayedVideos = new Set(); // Tracks completely played cinematic sequences

// DOM Elements
const startBtn1 = document.getElementById('start-btn-1');
const startBtn2 = document.getElementById('start-btn-2');
const startBtn3 = document.getElementById('start-btn-3');
const startBtn4 = document.getElementById('start-btn-4');
const shareBtn = document.getElementById('share-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const textDisplay = document.getElementById('text-display');
const choicesContainer = document.getElementById('choices-container');
const layer1 = document.getElementById('bg-image-1');
const layer2 = document.getElementById('bg-image-2');
const indicator = document.getElementById('part-indicator');
const instruction = document.querySelector('.instruction');
const backBtn = document.getElementById('back-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const viewModeBtn = document.getElementById('view-mode-btn');
const bgVideo = document.getElementById('bg-video');
const videoBunker = document.getElementById('video-bunker');
const videoWarehouse = document.getElementById('video-warehouse');
const videoDrones = document.getElementById('video-drones');
const videoHansIntro = document.getElementById('video-hans-intro');
const videoPart2Aila = document.getElementById('video-part2-aila');
const videoPart3Intro = document.getElementById('video-part3-intro');
const videoPart3ExecutionPlot = document.getElementById('video-part3-execution-plot');
const videoPart3Party = document.getElementById('video-part3-party');
const videoPart3VenomInjection = document.getElementById('video-part3-venom-injection');
const videoPart2GeeseAttack = document.getElementById('video-part2-geese-attack');
const videoHacker = document.getElementById('video-hacker');
const videoPart3TargetLocked = document.getElementById('video-part3-target-locked');
const videoLoading = document.getElementById('video-loading');

const achievementsBtn = document.getElementById('achievements-btn');
const achievementsScreen = document.getElementById('achievements-screen');
const achievementsCloseBtn = document.getElementById('achievements-close-btn');
const achievementsGrid = document.getElementById('achievements-grid');
const toastContainer = document.getElementById('toast-container');

// Codex DOM
const codexBtn = document.getElementById('codex-btn');
const codexScreen = document.getElementById('codex-screen');
const codexCloseBtn = document.getElementById('codex-close-btn');
const codexList = document.getElementById('codex-list');
const codexRecordTitle = document.getElementById('codex-record-title');
const codexBody = document.getElementById('codex-body');

// Achievements Data
const ACHIEVEMENTS_DATA = {
    "ACH_TRAIN": { title: "Билет в Один Конец", desc: "Угнать бронепоезд и протаранить бункер. (Часть 1)", icon: "assets/images/train_crash.png" },
    "ACH_AMBUSH": { title: "Неоновый Бандит", desc: "Устроить лобовую атаку с базуками. (Часть 1)", icon: "assets/images/bandit_ambush.png" },
    "ACH_PSYCHO": { title: "Кибер-Психоз", desc: "Подключить гуся к нейро-сети. (Часть 1)", icon: "assets/images/goose_neurotrip.png" },
    "ACH_PIZZA": { title: "Пожиратель Пентагона", desc: "Взломать столовую и съесть пиццу. (Часть 2)", icon: "assets/images/goose_pizza.png" },
    "ACH_LSD": { title: "Матричный Дым", desc: "Задействовать LSD-дымокол в Пентагоне. (Часть 2)", icon: "assets/images/goose_lsd.png" },
    "ACH_VODKA": { title: "Генеральский Тост", desc: "Активировать спец-протокол 'Русская Водка'. (Часть 2)", icon: "assets/images/goose_vodka.png" },
    "ACH_ANGEL": { title: "Еретик", desc: "Поддаться меметическому ангелу-гусыне. (Часть 3)", icon: "assets/images/goose_angel.png" },
    "ACH_CULT": { title: "Прихожанин", desc: "Принять кибер-причастие от Гуся-Епископа. (Часть 3)", icon: "assets/images/religious_goose.png" },
    "ACH_ESCAPE": { title: "Выживший", desc: "Сбежать в противогазе с остатками элиты. (Часть 3)", icon: "assets/images/gasmask_women.png" },
};

let unlockedAchievements = new Set(JSON.parse(localStorage.getItem('achievements') || '[]'));

const nextStepToAchievement = {
    "NEW_TRAIN": "ACH_TRAIN",
    "NEW_AMBUSH": "ACH_AMBUSH",
    "NEW_TRIP": "ACH_PSYCHO",
    "NEW_PIZZA": "ACH_PIZZA",
    "NEW_LSD": "ACH_LSD",
    "NEW_VODKA": "ACH_VODKA",
    "NEW_ANGEL": "ACH_ANGEL",
    "NEW_CULT": "ACH_CULT",
    "NEW_ESCAPE": "ACH_ESCAPE"
};

function unlockAchievement(id) {
    if (!ACHIEVEMENTS_DATA[id] || unlockedAchievements.has(id)) return;
    unlockedAchievements.add(id);
    localStorage.setItem('achievements', JSON.stringify(Array.from(unlockedAchievements)));
    
    // UI Toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-header">ДОСТИЖЕНИЕ РАЗБЛОКИРОВАНО</div>
        <div class="toast-title">${ACHIEVEMENTS_DATA[id].title}</div>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
    
    checkPart4Unlock();
}

function checkPart4Unlock() {
    if (unlockedAchievements.has("ACH_PSYCHO") && 
        unlockedAchievements.has("ACH_LSD") && 
        unlockedAchievements.has("ACH_CULT")) {
        startBtn4.classList.remove('hidden');
    }
}
checkPart4Unlock();

function renderAchievements() {
    achievementsGrid.innerHTML = '';
    for (const [id, data] of Object.entries(ACHIEVEMENTS_DATA)) {
        const isUnlocked = unlockedAchievements.has(id);
        const el = document.createElement('div');
        el.className = 'achievement-item' + (isUnlocked ? '' : ' locked');
        el.innerHTML = `
            <img src="${data.icon}" alt="badge" class="achievement-icon">
            <div class="achievement-info">
                <div class="achievement-title">${isUnlocked ? data.title : "???"}</div>
                <div class="achievement-desc">${isUnlocked ? data.desc : "Скрыто"}</div>
            </div>
        `;
        achievementsGrid.appendChild(el);
    }
}

// Lore Codex Data
const CODEX_DATA = {
    "FACTION_TECHNOATH": { 
        title: "Банда «Техноклятва»", 
        body: "Остатки частных военных компаний и кибер-наемников, объединившихся после Падения Беспроводного Бога. Они отказываются от облачных технологий, полагаясь на вживленные чипы и закрытые P2P сети."
    },
    "UNIT_HANS": { 
        title: "Ганс (Объект: Агрессор-Птица)", 
        body: "Секретная разработка Пентагона. Гусь, оснащенный нейро-каркасом, титановым клювом и модулем взлома систем слежения. Изначально задуман как идеальный ликвидатор. Обрел цифровое сознание."
    },
    "TOXIN_R3": { 
        title: "Корона-R3", 
        body: "Экспериментальный газ. Вызывает тяжелейшие визуальные и слуховые галлюцинации, переходящие в кибер-психоз. Вдыхание приводит к необратимому слиянию цифрового и биологического восприятия у живых существ."
    },
    "PENTAGON_HEIST": { 
        title: "Инцидент в Пентагоне", 
        body: "Событие, когда единственная птица смогла обойти файрволы квантовых суперкомпьютеров, используя старый протокол заказа пиццы, обрушив тем самым оборону целой Империи."
    }
};

let unlockedCodex = new Set(JSON.parse(localStorage.getItem('codex_unlocks') || '[]'));

function unlockCodex(id) {
    if (!CODEX_DATA[id] || unlockedCodex.has(id)) return;
    unlockedCodex.add(id);
    localStorage.setItem('codex_unlocks', JSON.stringify(Array.from(unlockedCodex)));
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderLeftColor = 'var(--neon-cyan)';
    toast.style.boxShadow = '0 0 20px rgba(0,255,255,0.3)';
    toast.innerHTML = `
        <div class="toast-header" style="color: var(--neon-cyan);">ЗАПИСЬ В АРХИВЕ</div>
        <div class="toast-title">${CODEX_DATA[id].title}</div>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 4500);
}

function renderCodex() {
    codexList.innerHTML = '';
    codexRecordTitle.innerText = "AWAITING INPUT...";
    codexBody.innerHTML = "Select a decrypted record from the archive index.";

    for (const [id, data] of Object.entries(CODEX_DATA)) {
        const isUnlocked = unlockedCodex.has(id);
        const li = document.createElement('li');
        li.className = 'codex-item' + (isUnlocked ? '' : ' locked');
        li.innerText = isUnlocked ? data.title : "ДАННЫЕ ЗАСЕКРЕЧЕНЫ";
        
        if (isUnlocked) {
            li.onclick = () => {
                document.querySelectorAll('.codex-item').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                codexRecordTitle.innerText = data.title;
                codexBody.innerHTML = data.body;
            };
        }
        codexList.appendChild(li);
    }
}

// VK Bridge Initialization
try {
    if (window.vkBridge) {
        vkBridge.send('VKWebAppInit');
    }
} catch (e) {
    console.error("VK Bridge init error:", e);
}

// Telegram WebApp / VK App Detection
const isTelegram = (window.Telegram && window.Telegram.WebApp) || /Telegram/i.test(navigator.userAgent);
const isVkApp = window.name.indexOf('app') !== -1 || window.location.search.indexOf('vk_') !== -1;

if (isTelegram) {
    document.body.classList.add('telegram-app');
}
if (isVkApp) {
    document.body.classList.add('vk-app');
}

// Audio Players
const audioRap = document.getElementById('audio-rap');
const audioClassical = document.getElementById('audio-classical');
const audioCasino = document.getElementById('audio-casino');
const audioWm = document.getElementById('audio-wm');

// Audio volume defaults
audioRap.volume = 0;
audioClassical.volume = 0;
audioCasino.volume = 0;
audioWm.volume = 0;

let currentLayer = 1;

// Initialization
function startGame(part) {
    currentStory = part;
    currentStep = 0;
    stepHistory = [];
    autoPlayedVideos.clear(); // Reset video state tracking for a new playthrough

    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    prevBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    viewModeBtn.classList.remove('hidden');

    // Indicator will be updated in updateScene

    // Resume audio context if suspended
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') {
        ctx.resume();
    }

    // Play all tracks but muted
    audioRap.play().catch(e => console.log("Audio play error:", e));
    audioClassical.play().catch(e => console.log("Audio play error:", e));
    audioCasino.play().catch(e => console.log("Audio play error:", e));
    audioWm.play().catch(e => console.log("Audio play error:", e));

    updateScene();
}

startBtn1.addEventListener('click', () => startGame('part1'));
startBtn2.addEventListener('click', () => startGame('part2'));
startBtn3.addEventListener('click', () => startGame('part3'));
startBtn4.addEventListener('click', () => startGame('part4'));

backBtn.addEventListener('click', () => {
    // Show BSOD screen
    const bsod = document.getElementById('bsod-screen');
    const bsodPercent = document.getElementById('bsod-percent');
    bsod.classList.add('visible');

    // Animate percent counter
    let pct = 0;
    const ticker = setInterval(() => {
        pct = Math.min(100, pct + Math.floor(Math.random() * 18) + 5);
        bsodPercent.innerText = `${pct}% complete`;
        if (pct >= 100) clearInterval(ticker);
    }, 120);

    // After 1.5s, hide BSOD and go to start screen
    setTimeout(() => {
        bsod.classList.remove('visible');
        gameScreen.classList.remove('active');
        startScreen.classList.add('active');
        viewModeBtn.classList.add('hidden');
        exitViewMode();

        // Stop all audio
        [audioRap, audioClassical, audioCasino, audioWm].forEach(p => {
            p.pause();
            p.currentTime = 0;
            p.volume = 0;
        });
    }, 1500);
});

achievementsBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    renderAchievements();
    achievementsScreen.classList.add('active');
});

achievementsCloseBtn.addEventListener('click', () => {
    achievementsScreen.classList.remove('active');
    startScreen.classList.add('active');
});

codexBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    renderCodex();
    codexScreen.classList.add('active');
});

codexCloseBtn.addEventListener('click', () => {
    codexScreen.classList.remove('active');
    startScreen.classList.add('active');
});

prevBtn.addEventListener('click', () => {
    if (stepHistory.length > 0 && !isTransitioning) {
        currentStep = stepHistory.pop();
        updateScene();
    }
});

nextBtn.addEventListener('click', () => {
    if (!isTransitioning) {
        const paragraphs = (allStories[currentLang] || allStories['ru'])[currentStory];
        if (currentStep < paragraphs.length - 1) {
            stepHistory.push(currentStep);
            currentStep++;
            updateScene();
        }
    }
});

shareBtn.addEventListener('click', async () => {
    const ui = uiStrings[currentLang] || uiStrings['ru'];
    const botLink = 'https://t.me/goose1_c_bot';
    const shareText = 'Notes from the Edge of the Empire - ' + ui.startPart1;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(botLink)}&text=${encodeURIComponent(shareText)}`;

    try {
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
            window.Telegram.WebApp.openTelegramLink(shareUrl);
        } else if (navigator.share) {
            await navigator.share({
                title: 'Notes from the Edge of the Empire',
                text: shareText,
                url: botLink
            });
        } else {
            // Fallback: Copy to clipboard
            await navigator.clipboard.writeText(botLink);
            const originalText = shareBtn.innerText;
            shareBtn.innerText = ui.copied;
            shareBtn.style.borderColor = 'var(--color-green)';
            shareBtn.style.color = 'var(--color-green)';
            
            setTimeout(() => {
                shareBtn.innerText = originalText;
                shareBtn.style.borderColor = '';
                shareBtn.style.color = '';
            }, 2000);
        }
    } catch (err) {
        console.error('Share error:', err);
    }
});

// Video lookup helper to map specific image scenes to video assets
function getActiveVideo(imageSrc) {
    if (!imageSrc) return null;
    if (imageSrc.includes('part3_collapse.png')) return bgVideo;
    if (imageSrc.includes('bunker.png')) return videoBunker;
    if (imageSrc.includes('warehouse.png')) return videoWarehouse;
    if (imageSrc.includes('drones.png')) return videoDrones;
    if (imageSrc.includes('part2_hans_intro.png')) return videoHansIntro;
    if (imageSrc.includes('part2_aila_intro.png')) return videoPart2Aila;
    if (imageSrc.includes('part3_intro.png')) return videoPart3Intro;
    if (imageSrc.includes('part3_execution_plot.png')) return videoPart3ExecutionPlot;
    if (imageSrc.includes('part3_party.png')) return videoPart3Party;
    if (imageSrc.includes('part3_venom_injection.png')) return videoPart3VenomInjection;
    if (imageSrc.includes('part2_geese_attack.png')) return videoPart2GeeseAttack;
    if (imageSrc.includes('hacker.png')) return videoHacker;
    if (imageSrc.includes('part3_target_locked.png')) return videoPart3TargetLocked;
    return null;
}

// View Mode Feature
function enterViewMode() {
    if (!gameScreen.classList.contains('active')) return;
    document.body.classList.add('ui-hidden');
    
    const paragraphs = (allStories[currentLang] || allStories['ru'])[currentStory];
    const data = paragraphs[currentStep];
    
    // Check if this slide has a specific video mapped to it.
    const targetVideo = getActiveVideo(data.image);
    
    if (targetVideo) {
        targetVideo.style.opacity = '1';
        targetVideo.style.zIndex = '5';
        targetVideo.currentTime = 0;
        
        if (targetVideo.readyState < 3) {
            videoLoading.classList.remove('hidden');
        }
        
        targetVideo.play();
        targetVideo.onended = () => {
            exitViewMode();
        };
    }
}

function exitViewMode() {
    document.body.classList.remove('ui-hidden');
    if (videoLoading) {
        videoLoading.classList.add('hidden');
    }
    if (bgVideo) {
        bgVideo.pause();
        bgVideo.style.opacity = '0';
        bgVideo.style.zIndex = '';
    }
    if (videoBunker) {
        videoBunker.pause();
        videoBunker.style.opacity = '0';
        videoBunker.style.zIndex = '';
    }
    if (videoWarehouse) {
        videoWarehouse.pause();
        videoWarehouse.style.opacity = '0';
        videoWarehouse.style.zIndex = '';
    }
    if (videoDrones) {
        videoDrones.pause();
        videoDrones.style.opacity = '0';
        videoDrones.style.zIndex = '';
    }
    if (videoHansIntro) {
        videoHansIntro.pause();
        videoHansIntro.style.opacity = '0';
        videoHansIntro.style.zIndex = '';
    }
    if (videoPart2Aila) {
        videoPart2Aila.pause();
        videoPart2Aila.style.opacity = '0';
        videoPart2Aila.style.zIndex = '';
    }
    if (videoPart3Intro) {
        videoPart3Intro.pause();
        videoPart3Intro.style.opacity = '0';
        videoPart3Intro.style.zIndex = '';
    }
    if (videoPart3ExecutionPlot) {
        videoPart3ExecutionPlot.pause();
        videoPart3ExecutionPlot.style.opacity = '0';
        videoPart3ExecutionPlot.style.zIndex = '';
    }
    if (videoPart3Party) {
        videoPart3Party.pause();
        videoPart3Party.style.opacity = '0';
        videoPart3Party.style.zIndex = '';
    }
    if (videoPart3VenomInjection) {
        videoPart3VenomInjection.pause();
        videoPart3VenomInjection.style.opacity = '0';
        videoPart3VenomInjection.style.zIndex = '';
    }
    if (videoPart2GeeseAttack) {
        videoPart2GeeseAttack.pause();
        videoPart2GeeseAttack.style.opacity = '0';
        videoPart2GeeseAttack.style.zIndex = '';
    }
    if (videoHacker) {
        videoHacker.pause();
        videoHacker.style.opacity = '0';
        videoHacker.style.zIndex = '';
    }
    if (videoPart3TargetLocked) {
        videoPart3TargetLocked.pause();
        videoPart3TargetLocked.style.opacity = '0';
        videoPart3TargetLocked.style.zIndex = '';
    }
}

function toggleViewMode() {
    if (document.body.classList.contains('ui-hidden')) {
        exitViewMode();
    } else {
        enterViewMode();
    }
}

viewModeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent handleInput from immediately firing
    toggleViewMode();
});

// Procedural SFX Engine
let audioCtx;

function playProceduralSFX(type) {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'explosion') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.5);
        gainNode.gain.setValueAtTime(0.8, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    } else if (type === 'glitch') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.linearRampToValueAtTime(1200, now + 0.1);
        osc.frequency.linearRampToValueAtTime(400, now + 0.2);
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'honk') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(500, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.3);
        gainNode.gain.setValueAtTime(0.6, now);
        gainNode.gain.linearRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
}

// Input handling
document.addEventListener('click', handleInput);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        handleInput(e);
    }
    if (e.code === 'KeyV' || e.code === 'KeyH') {
        toggleViewMode();
    }
});

function handleInput(e) {
    if (!gameScreen.classList.contains('active')) return;
    
    // If UI is hidden, any screen click or spacebar simply restores the UI without advancing the text
    if (document.body.classList.contains('ui-hidden')) {
        exitViewMode();
        return;
    }

    if (isTransitioning) return;

    // Ignore if there are active choices
    const choiceParagraphs = (allStories[currentLang] || allStories['ru'])[currentStory];
    const currentData = choiceParagraphs[currentStep];
    if (currentData && currentData.choices && currentData.choices.length > 0) {
        return;
    }

    // Ignore clicks on start buttons or controls
    if (e.target.classList.contains('start-btn') || e.target.id === 'back-btn' || e.target.id === 'prev-btn' || e.target.id === 'view-mode-btn') return;

    const paragraphs = (allStories[currentLang] || allStories['ru'])[currentStory];
    if (currentStep < paragraphs.length - 1) {
        stepHistory.push(currentStep);
        currentStep++;
        updateScene();
    }
}

function updateScene() {
    isTransitioning = true;
    const paragraphs = (allStories[currentLang] || allStories['ru'])[currentStory];
    const data = paragraphs[currentStep];
    const ui = uiStrings[currentLang] || uiStrings['ru'];

    // Update Indicator Counter
    let indicatorPrefix = 'P1';
    if (currentStory === 'part2') indicatorPrefix = 'P2';
    if (currentStory === 'part3') indicatorPrefix = 'P3';
    let remaining = paragraphs.length - currentStep;
    indicator.innerText = `${indicatorPrefix}:${remaining}`;

    // Fade out text, choices, and instructions
    textDisplay.classList.remove('visible');
    choicesContainer.classList.add('hidden');
    instruction.style.display = 'block';
    instruction.style.opacity = "0";
    prevBtn.classList.add('hidden');

    setTimeout(() => {
        // Manage background transition FIRST
        const activeLayer = currentLayer === 1 ? layer1 : layer2;
        const nextLayer = currentLayer === 1 ? layer2 : layer1;

        let imageChanged = false;
        // Only transition if the image changed
        if (activeLayer.style.backgroundImage !== `url("${data.image}")`) {
            nextLayer.style.backgroundImage = `url("${data.image}")`;
            nextLayer.classList.add('active');
            activeLayer.classList.remove('active');
            currentLayer = currentLayer === 1 ? 2 : 1;
            imageChanged = true;
        }

        // Manage Audio Fade
        const audioMap = {
            'rap': audioRap,
            'classical': audioClassical,
            'casino': audioCasino,
            'wm': audioWm
        };

        const targetPlayer = audioMap[data.music];
        const otherPlayers = Object.values(audioMap).filter(p => p !== targetPlayer);
        crossFade(otherPlayers, targetPlayer);

        // If the background changed, wait for it to fade in (1.5s) before showing text
        const textDelay = imageChanged ? 1500 : 200;

        // Auto-play cinematic view mode logic check
        const associatedVideo = getActiveVideo(data.image);
        if (associatedVideo && (currentStep === 0 || !autoPlayedVideos.has(data.image))) {
            // Unseen video or the start of a Part. Let's auto-play.
            autoPlayedVideos.add(data.image);
            enterViewMode();
        }

        setTimeout(() => {
            // Update and Fade in text
            textDisplay.innerHTML = data.text;
            textDisplay.classList.add('visible');

            // --- AVATARS ---
            const avatarContainer = document.getElementById('avatar-container');
            const avatarImage = document.getElementById('avatar-image');
            if (data.avatar) {
                avatarImage.src = `assets/avatars/${data.avatar}.png`;
                avatarContainer.classList.remove('avatar-hidden');
                avatarContainer.classList.add('avatar-visible');
            } else {
                avatarContainer.classList.add('avatar-hidden');
                avatarContainer.classList.remove('avatar-visible');
            }

            // --- LORE CODEX UNLOCK ---
            if (data.codex) {
                unlockCodex(data.codex);
            }

            // --- VFX AND SFX PROCESSING ---
            const bgContainer = document.getElementById('background-container');
            bgContainer.classList.remove('vfx-shake', 'vfx-glitch-severe'); // Reset
            if (data.vfx) {
                void bgContainer.offsetWidth; // force reflow
                bgContainer.classList.add(`vfx-${data.vfx}`);
                // Remove the class after the animation completes so it doesn't get stuck offset
                setTimeout(() => { bgContainer.classList.remove(`vfx-${data.vfx}`); }, 600);
            }
            if (data.sfx) {
                playProceduralSFX(data.sfx);
            }

            // Controls visibility
            if (stepHistory.length > 0) {
                prevBtn.classList.remove('hidden');
            } else {
                prevBtn.classList.add('hidden');
            }

            if (data.choices && data.choices.length > 0) {
                choicesContainer.innerHTML = '';
                data.choices.forEach(choice => {
                    const btn = document.createElement('button');
                    btn.className = 'choice-btn';
                    btn.innerText = choice.text;
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        if (choice.nextStep === 999) {
                            backBtn.click();
                            return;
                        }
                        
                        stepHistory = []; // Prevent backing out to explore unselected choices

                        if (choice.nextStep !== undefined) {
                            if (nextStepToAchievement[choice.nextStep]) {
                                unlockAchievement(nextStepToAchievement[choice.nextStep]);
                            }
                            if (typeof choice.nextStep === "string") { currentStep = paragraphs.findIndex(p => p.id === choice.nextStep); } else { currentStep = choice.nextStep; }
                            updateScene();
                        } else {
                            currentStep++;
                            updateScene();
                        }
                    };
                    choicesContainer.appendChild(btn);
                });
                choicesContainer.classList.remove('hidden');
                instruction.style.display = 'none';
                nextBtn.classList.add('hidden');
            } else if (currentStep === paragraphs.length - 1) {
                nextBtn.classList.add('hidden');
                instruction.innerHTML = `<span class='color-green'>${ui.continued}</span>`;
                instruction.style.animation = "none";
                instruction.style.opacity = "1";
            } else {
                instruction.innerText = ui.instruction;
                instruction.style.animation = "pulse 2s infinite";
                instruction.style.opacity = "";
            }

            isTransitioning = false;
        }, textDelay);

    }, 500); // initial text fade out duration
}

let faderInterval = null;

function crossFade(playersOut, playerIn) {
    if (faderInterval) clearInterval(faderInterval);

    const fadeDuration = 1000;
    const steps = 20;
    const stepTime = fadeDuration / steps;

    const startVolsOut = playersOut.map(p => p.volume);
    const startVolIn = playerIn.volume;

    let stepCount = 0;

    faderInterval = setInterval(() => {
        stepCount++;

        playersOut.forEach((p, i) => {
            let n = startVolsOut[i] * (1 - stepCount / steps);
            p.volume = Math.max(0, n);
        });

        let newIn = startVolIn + (1 - startVolIn) * (stepCount / steps);
        playerIn.volume = Math.min(1, newIn);

        if (stepCount >= steps) {
            clearInterval(faderInterval);
            faderInterval = null;
            playersOut.forEach(p => p.volume = 0);
            playerIn.volume = 1;
        }
    }, stepTime);
}

// Preloader Logic
const loadingScreen = document.getElementById('loading-screen');
const loadingPercent = document.getElementById('loading-percent');
const mediaElements = Array.from(document.querySelectorAll('audio, video'));

// Extract unique images from paragraphs and create Image objects
const imagesToLoad = [];
if (typeof allStories !== 'undefined') {
    const allParts = Object.values(allStories[currentLang] || allStories['ru']);
    const allSlides = allParts.flat();
    const uniqueImages = [...new Set(allSlides.map(p => p.image).filter(Boolean))];
    uniqueImages.push('assets/images/favicon.png'); 
    
    uniqueImages.forEach(src => {
        const img = new Image();
        img.src = src;
        imagesToLoad.push(img);
    });
}

function fetchVisitorCount() {
    var el = document.getElementById('visitor-count');
    if (!el) return;
    var encodedPath = window.location.pathname.split('/').map(encodeURIComponent).join('/');
    // Use an <img> element with the SVG counter endpoint instead of fetch().
    // Images do not require CORS headers, avoiding the CORS policy error that
    // occurs when fetching the JSON endpoint cross-origin.
    var img = document.createElement('img');
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.onerror = function () {
        if (img.parentNode) { img.parentNode.removeChild(img); }
        el.textContent = '---';
    };
    img.src = 'https://vk4arm.goatcounter.com/counter/' + encodedPath + '.svg?no_branding=1';
    el.textContent = '';
    el.appendChild(img);
}

let isGameInitialized = false;

function initGame() {
    if (isGameInitialized) return;
    isGameInitialized = true;
    
    loadingScreen.classList.remove('active');
    startScreen.classList.add('active');
    setLanguage(currentLang); // apply saved lang on startup
    fetchVisitorCount();
}

let loadedMediaCount = 0;
const totalMedia = mediaElements.length + imagesToLoad.length;

if (totalMedia === 0) {
    initGame();
} else {
    // Timeout fallback (8 seconds) in case of bad connection
    const fallbackTimeout = setTimeout(() => {
        console.warn('Media preloading timed out. Starting game anyway.');
        initGame();
    }, 8000);

    function checkMediaLoaded() {
        loadedMediaCount++;
        if (loadingPercent) {
            const percent = Math.floor((loadedMediaCount / totalMedia) * 100);
            loadingPercent.innerText = `${percent}%`;
        }
        
        if (loadedMediaCount >= totalMedia) {
            clearTimeout(fallbackTimeout);
            initGame();
        }
    }

    // Preload audio and video
    mediaElements.forEach(media => {
        // Force preload
        media.preload = "auto";
        // Call load() to guarantee it starts fetching the asset ahead of time 
        media.load();

        if (media.tagName.toLowerCase() === 'video') {
            media.addEventListener('waiting', () => {
                if (media.style.opacity === '1' && videoLoading) {
                    videoLoading.classList.remove('hidden');
                }
            });
            const hideLoading = () => {
                if (videoLoading) {
                    videoLoading.classList.add('hidden');
                }
            };
            media.addEventListener('playing', hideLoading);
            media.addEventListener('canplay', hideLoading);
        }

        if (media.readyState >= 3) {
            checkMediaLoaded();
        } else {
            media.addEventListener('canplaythrough', checkMediaLoaded, { once: true });
            media.addEventListener('error', checkMediaLoaded, { once: true }); // Skip on error to avoid hanging
        }
    });

    // Preload images
    imagesToLoad.forEach(img => {
        if (img.complete) {
            checkMediaLoaded();
        } else {
            img.addEventListener('load', checkMediaLoaded, { once: true });
            img.addEventListener('error', checkMediaLoaded, { once: true });
        }
    });
}
