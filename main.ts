radio.setGroup(1)
basic.showString("Hello!")
basic.clearScreen()
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        radio.sendNumber(14)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        radio.sendNumber(12)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        radio.sendNumber(13)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendNumber(15)
        Kitronik_Game_Controller.setBuzzerPin()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendNumber(16)
        Kitronik_Game_Controller.setBuzzerPin()
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.clearScreen()
    }
})
