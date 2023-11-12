input.onGesture(Gesture.Shake, function () {
    led.toggle(x, y)
    x = randint(0, 4)
    y = randint(0, 4)
    led.toggle(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.toggle(x, y)
basic.forever(function () {
	
})
