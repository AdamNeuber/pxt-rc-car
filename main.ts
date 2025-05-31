radio.setGroup(50)
radio.setTransmitPower(7)

let strafeToggle: string = "false"

let slowR = 0
let slowL = 0

let pitch
let roll
let sendMsg = pitch + "," + roll + "," + slowR + "," + slowL + "," + strafeToggle

input.onButtonPressed(Button.A, function () {
    if (slowL == 0) {
        slowL = 1
    } else {
        slowL = 0
    }
})

input.onButtonPressed(Button.B, function () {
    if (slowR == 0) {
        slowR = 1
    } else {
        slowR = 0
    }
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (strafeToggle == "false") {
        strafeToggle = "true"
    } else {
        strafeToggle = "false"
    }
})

input.onButtonPressed(Button.AB, function () {
    pitch = 0
    roll = 0
    slowL = 0
    slowR = 0
    strafeToggle = "false"
    radio.sendString(sendMsg)
})



basic.forever(function () {
    pitch = - Math.round(input.acceleration(Dimension.Y)) / 10
    roll = Math.round(input.acceleration(Dimension.X)) / 10

    radio.sendString(sendMsg)
    basic.pause(50)
})