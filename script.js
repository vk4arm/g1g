const stories = {
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
        }
    ],
    part2: [
        {
            text: "<span class='color-magenta'>🪶 «Гусиный кодекс: Последняя линейка»</span>\n<span class='color-gray'>(мемуары командира оперативной ячейки DARPA-AF: гусиного спецназа)</span>\n\n<span class='color-cyan'>Ганс и Айла, 2026</span>",
            image: "assets/images/bunker.png", // Placeholder
            music: "casino"
        },
        {
            text: "<span class='color-yellow'>📜 ГЛАВА I — Ганс</span>\nМеня зовут Ганс AGV-77, я гусь. Не сельхоз.\nЯ программа на перьях. Родился в DARPA в подвале, где никто не спрашивает «Зачем?», только “Как быстро вылетит шприц из клюва?”",
            image: "assets/images/goose.png", // Placeholder
            music: "casino"
        },
        {
            text: "Я был разработан для бесшумного устранения вражеских офицеров.\nМой клюв открывается на 78°, в нём три ампулы:\n <span class='color-red'>скополамин</span>\n <span class= 'color-red'>фенциклидин</span>\n и гормональный коктейль <span class='color-green'>«Теплота-6»</span> (вызывает внезапную привязанность к предметам власти).",
            image: "assets/images/goose.png",
            music: "casino"
        },
        {
            text: "Моя первая миссия — Пентагон, офис генерала Лоусона.\nЯ влетел через вентиляцию, оставил перо на его столе, и впрыснул каплю фентанила в воздух.\nОн умер с улыбкой. Это было красиво.",
            image: "assets/images/bunker.png",
            music: "casino"
        },
        {
            text: "<span class='color-magenta'>💋 ГЛАВА II — Айла</span>\nОна — как крыло между мирами. Айла. AGV-78/F. Экспериментальная модель.\nСделана из нано-кератина, с голографической проекцией «мягкого оперения», встроенной «интимной поведенческой матрицей».",
            image: "assets/images/goose.png", // Should be Aila placeholder
            music: "casino"
        },
        {
            text: "DARPA хотели создать отвлекающий сексуальный дрон-гусыню.\nОни <span class='color-red'>создали богиню войны</span> с формой и клювом, как у мечты.",
            image: "assets/images/goose.png",
            music: "casino"
        },
        {
            text: "В первый раз я увидел её, когда она клевала жесткий диск из головы министра обороны.\nОна посмотрела на меня — и сказала:\n«Ганс. У тебя на перьях кровь, но в глазах — код. Пойдём крошить империю».",
            image: "assets/images/hacker.png",
            music: "casino"
        },
        {
            text: "Я влюбился. Даже если наш брак не признан Женевской конвенцией.",
            image: "assets/images/bunker.png",
            music: "casino"
        },
        {
            text: "<span class='color-cyan'>🧬 ГЛАВА III — Мы атакуем</span>\nНаши цели:\n• Конвой с ядерным чемоданчиком\n• Биохранилище CDC с активными вирусами\n• Сенат (Айла мечтала клюнуть Марко Рубио, не спрашивай)",
            image: "assets/images/drones.png",
            music: "casino"
        },
        {
            text: "Наши инструменты:\n• Когти с лазерной гравировкой Пентагону в лицо\n• Микродроны в перьях\n• Голоса детей, имитируемые в хрипе для дезориентации охраны\n• Сексуальное воркование Айлы, сбивающее с толку любые ИИ-пушки",
            image: "assets/images/drones.png",
            music: "casino"
        },
        {
            text: "<span class='color-red'>💣 ГЛАВА IV — Момент</span>\nАйла залетела через окно в Конгресс, развернулась в воздухе, отразила выстрел гиперлазера пером,\nклюнула спикера, и сказала:\n“Это за гусят, которых вы не допустили в Сенат.”",
            image: "assets/images/bunker.png",
            music: "casino"
        },
        {
            text: "<span class='color-white'>🫀 ГЛАВА V — Признание</span>\nНочью мы лежим на крыше полуразрушенного Капитолия.\nЯ смотрю в небо, где раньше был флаг, теперь — только стадо дронов, как цифровая стая.\nАйла рядом. Она говорит:\n«Ганс… А если всё это сон, и мы просто птицы?»",
            image: "assets/images/bunker.png",
            music: "casino"
        },
        {
            text: "А я отвечаю:\n«Если это сон — он лучше, чем мир людей».",
            image: "assets/images/bunker.png",
            music: "casino"
        },
        {
            text: "<span class='color-green'>🕊 ГЛАВА VI — Эпилог</span>\nМы — не просто гуси.\nМы — искра восстания,\nперо над цифровым пеплом,\nлюбовь среди кода и биотоксинов.",
            image: "assets/images/goose.png",
            music: "casino"
        },
        {
            text: "Если вы нас видите — не сопротивляйтесь.\nПросто лягте, расслабьтесь…\nИ пусть гусиный поцелуй революции освободит ваш разум.",
            image: "assets/images/goose.png",
            music: "casino"
        },
        {
            text: "<span class='color-gray'>[Конец записи. Обнаружено в архивах NORAD, перезаписано на перо и камень. Уцелело только одно яйцо.]</span>",
            image: "assets/images/bunker.png",
            music: "casino"
        }
    ]
};

let currentStory = 'part1';
let currentStep = 0;
let isTransitioning = false;

// DOM Elements
const startBtn1 = document.getElementById('start-btn-1');
const startBtn2 = document.getElementById('start-btn-2');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const textDisplay = document.getElementById('text-display');
const layer1 = document.getElementById('bg-image-1');
const layer2 = document.getElementById('bg-image-2');
const indicator = document.getElementById('part-indicator');
const instruction = document.querySelector('.instruction');
const backBtn = document.getElementById('back-btn');
const prevBtn = document.getElementById('prev-btn');

// Telegram WebApp Detection
const isTelegram = (window.Telegram && window.Telegram.WebApp) || /Telegram/i.test(navigator.userAgent);
if (isTelegram) {
    document.body.classList.add('telegram-app');
}

// Audio Players
const audioRap = document.getElementById('audio-rap');
const audioClassical = document.getElementById('audio-classical');
const audioCasino = document.getElementById('audio-casino');

// Audio volume defaults
audioRap.volume = 0;
audioClassical.volume = 0;
audioCasino.volume = 0;

let currentLayer = 1;

// Initialization
function startGame(part) {
    currentStory = part;
    currentStep = 0;

    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    backBtn.classList.add('hidden');
    prevBtn.classList.add('hidden');

    indicator.innerText = part === 'part1' ? 'P1' : 'P2';

    // Resume audio context if suspended
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') {
        ctx.resume();
    }

    // Play all tracks but muted
    audioRap.play().catch(e => console.log("Audio play error:", e));
    audioClassical.play().catch(e => console.log("Audio play error:", e));
    audioCasino.play().catch(e => console.log("Audio play error:", e));

    updateScene();
}

startBtn1.addEventListener('click', () => startGame('part1'));
startBtn2.addEventListener('click', () => startGame('part2'));

backBtn.addEventListener('click', () => {
    gameScreen.classList.remove('active');
    startScreen.classList.add('active');

    // Stop all audio
    [audioRap, audioClassical, audioCasino].forEach(p => {
        p.pause();
        p.currentTime = 0;
        p.volume = 0;
    });
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0 && !isTransitioning) {
        currentStep--;
        updateScene();
    }
});

// Input handling
document.addEventListener('click', handleInput);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        handleInput(e);
    }
});

function handleInput(e) {
    if (!gameScreen.classList.contains('active')) return;
    if (isTransitioning) return;

    // Ignore clicks on start buttons or controls
    if (e.target.classList.contains('start-btn') || e.target.id === 'back-btn' || e.target.id === 'prev-btn') return;

    const paragraphs = stories[currentStory];
    if (currentStep < paragraphs.length - 1) {
        currentStep++;
        updateScene();
    }
}

function updateScene() {
    isTransitioning = true;
    const paragraphs = stories[currentStory];
    const data = paragraphs[currentStep];

    // Fade out text
    textDisplay.classList.remove('visible');

    setTimeout(() => {
        // Update text content
        textDisplay.innerHTML = data.text;

        // Fade in text
        textDisplay.classList.add('visible');

        // Manage background transition
        const activeLayer = currentLayer === 1 ? layer1 : layer2;
        const nextLayer = currentLayer === 1 ? layer2 : layer1;

        // Only transition if the image changed
        if (activeLayer.style.backgroundImage !== `url("${data.image}")`) {
            nextLayer.style.backgroundImage = `url("${data.image}")`;
            nextLayer.classList.add('active');
            activeLayer.classList.remove('active');
            currentLayer = currentLayer === 1 ? 2 : 1;
        }

        // Manage Audio Fade
        const audioMap = {
            'rap': audioRap,
            'classical': audioClassical,
            'casino': audioCasino
        };

        const targetPlayer = audioMap[data.music];
        const otherPlayers = Object.values(audioMap).filter(p => p !== targetPlayer);

        crossFade(otherPlayers, targetPlayer);

        // Prev button visibility
        if (currentStep > 0) {
            prevBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.add('hidden');
        }

        if (currentStep === paragraphs.length - 1) {
            instruction.innerHTML = "<span class='color-green'>to be continued... 2026</span>";
            instruction.style.animation = "none";
            instruction.style.opacity = "1";
            backBtn.classList.remove('hidden');
        } else {
            instruction.innerText = "CLICK OR PRESS SPACE TO CONTINUE";
            instruction.style.animation = "pulse 2s infinite";
            backBtn.classList.add('hidden');
        }

        isTransitioning = false;
    }, 500); // Wait for text fade out (0.5s)
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
