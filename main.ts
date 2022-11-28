input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # . . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playTone(698, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playTone(988, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # .
        # # # # .
        . # . # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
})
basic.showLeds(`
    . # # # .
    # # . . #
    # # # # .
    # # # # .
    . # . # .
    `)
basic.forever(function () {
	
})
