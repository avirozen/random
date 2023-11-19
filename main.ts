let x = 2
let y = 2
led.toggle(x, y)
let Counter = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.toggle(x, y)
        x = randint(0, 4)
        y = randint(0, 4)
        Counter += 1
        led.toggle(x, y)
        basic.pause(1000)
        if (x == 2 && x == 2) {
            basic.showNumber(Counter)
            basic.pause(1000)
            game.gameOver()
        }
    }
})
