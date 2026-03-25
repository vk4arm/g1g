import sys

with open('/Users/victor/GODOT/g1/html/i18n.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = """            {
                text: "Я был разработан для бесшумного устранения вражеских офицеров.\nМой клюв открывается на 78°, в нём три ампулы:\n <span class='color-red'>скополамин</span>\n <span class= 'color-red'>фенциклидин</span>\n и гормональный коктейль <span class='color-green'>«Теплота-6»</span> (вызывает внезапную привязанность к предметам власти).",
                image: "assets/images/part2_hans_weaponry.png",
                music: "casino"
            },
            {
                text: "Моя первая миссия — Пентагон, офис генерала Лоусона.\nЯ влетел через вентиляцию, оставил перо на его столе, и впрыснул каплю фентанила в воздух.\nОн умер с улыбкой. Это было красиво.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino"
            },"""
            
replacement = """            {
                text: "Я был разработан для бесшумного устранения вражеских офицеров.\nМой клюв открывается на 78°, выберите активную ампулу для дозатора:",
                image: "assets/images/part2_hans_weaponry.png",
                music: "casino",
                choices: [
                    { text: "Скополамин и Фенциклидин", nextStep: 3 },
                    { text: "Концентрат LSD", nextStep: 4 },
                    { text: "Русская водка (Спец-дозировка)", nextStep: 5 }
                ]
            },
            {
                text: "Выбрана стандартная загрузка.\nМоя первая миссия — Пентагон, офис генерала Лоусона.\nЯ влетел через вентиляцию, прыснул фенциклидином в воздух.\nОн умер с улыбкой. Это было красиво.",
                image: "assets/images/part2_hans_pentagon.png",
                music: "casino",
                choices: [ { text: "Продолжить", nextStep: 6 } ]
            },
            {
                text: "Выбран концентрат LSD.\nЯ влетел через вентиляцию и распылил радужный туман.\nГенерал Лоусон решил, что он бабочка, и выпрыгнул в окно. Я помахал ему крылом.",
                image: "assets/images/goose_lsd.png",
                music: "casino",
                choices: [ { text: "Продолжить", nextStep: 6 } ]
            },
            {
                text: "Выбрана очищенная русская водка.\nЯ влетел через вентиляцию и клюнул генерала прямо в шею.\nЧерез минуту он пел гимн СССР и обнимался с сейфом, забыв пароли доступа.",
                image: "assets/images/goose_vodka.png",
                music: "casino",
                choices: [ { text: "Продолжить", nextStep: 6 } ]
            },"""

if target in text:
    text = text.replace(target, replacement)
    with open('/Users/victor/GODOT/g1/html/i18n.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully replaced.")
else:
    print("Target not found. Please review the exact whitespace.")
