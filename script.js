const paragraphs = [
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
];

let currentStep = 0;
let isTransitioning = false;

// DOM Elements
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const textDisplay = document.getElementById('text-display');
const layer1 = document.getElementById('bg-image-1');
const layer2 = document.getElementById('bg-image-2');
const instruction = document.querySelector('.instruction');

// Telegram WebApp Detection
// The Telegram Web App injects the 'Telegram.WebApp' object or sets a specific user agent.
const isTelegram = (window.Telegram && window.Telegram.WebApp) || /Telegram/i.test(navigator.userAgent);
if (isTelegram) {
    document.body.classList.add('telegram-app');
}

// Audio Players
const audioRap = document.getElementById('audio-rap');
const audioClassical = document.getElementById('audio-classical');

// Audio volume defaults
audioRap.volume = 0;
audioClassical.volume = 0;

let currentLayer = 1;

// Initialization
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');

    // Resume audio context if suspended
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') {
        ctx.resume();
    }

    // Play both tracks but muted
    audioRap.play().catch(e => console.log("Audio play error:", e));
    audioClassical.play().catch(e => console.log("Audio play error:", e));

    updateScene();
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

    // Ignore clicks on start button
    if (e.target.id === 'start-btn') return;

    if (currentStep < paragraphs.length - 1) {
        currentStep++;
        updateScene();
    }
}

function updateScene() {
    isTransitioning = true;
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
        if (data.music === 'rap') {
            fadeAudio(audioClassical, audioRap);
        } else {
            fadeAudio(audioRap, audioClassical);
        }

        if (currentStep === paragraphs.length - 1) {
            instruction.innerHTML = "<span class='color-green'>to be continued. СтавьтелайкирепостыкомментыКАЛАколчык! А впрочем, пох. 2025</span>";
            instruction.style.animation = "none";
            instruction.style.opacity = "1";
        } else {
            instruction.innerText = "CLICK OR PRESS SPACE TO CONTINUE";
            instruction.style.animation = "pulse 2s infinite";
        }

        isTransitioning = false;
    }, 500); // Wait for text fade out (0.5s)
}

let faderInterval = null;

function fadeAudio(playerOut, playerIn) {
    if (faderInterval) clearInterval(faderInterval);

    const fadeDuration = 1000; // 1 second
    const steps = 20;
    const stepTime = fadeDuration / steps;

    // Current volumes
    const startVolOut = playerOut.volume;
    const startVolIn = playerIn.volume;

    // Volume delta per step
    const stepDiffOut = startVolOut / steps;
    const stepDiffIn = (1.0 - startVolIn) / steps;

    let stepCount = 0;

    faderInterval = setInterval(() => {
        stepCount++;

        let newVolOut = startVolOut - (stepDiffOut * stepCount);
        let newVolIn = startVolIn + (stepDiffIn * stepCount);

        // Bounds checking
        if (newVolOut < 0.05) newVolOut = 0;
        if (newVolIn > 0.95) newVolIn = 1.0;

        playerOut.volume = newVolOut;
        playerIn.volume = newVolIn;

        if (stepCount >= steps) {
            clearInterval(faderInterval);
            faderInterval = null;
            playerOut.volume = 0;
            playerIn.volume = 1;
        }
    }, stepTime);
}
