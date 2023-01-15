basic.forever(function () {
	
})
basic.forever(function () {
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        . # # # #
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # .
        `)
    if (input.lightLevel() > 50) {
        basic.showLeds(`
            # # # . #
            # # . . #
            # . # . #
            . . . . #
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # . . #
            # . # . #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . . .
            # # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . # #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . # # #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
    }
    basic.pause(1000)
})
