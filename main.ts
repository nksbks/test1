input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . #
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        # # . # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        # # . # #
        `)
    if (input.lightLevel() > 20) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . # # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . # # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
            . . # # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # # #
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # # .
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
    }
    basic.pause(1000)
})
