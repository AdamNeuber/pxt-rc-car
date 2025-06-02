radio.setGroup(50)
radio.setTransmitPower(7)

let strafeToggle: boolean = false
let strafeSend: string = strafeToggle.toString().charAt(0)

let pitch
let roll

input.onButtonPressed(Button.A, function () {
    strafeToggle = !strafeToggle
})

input.onButtonPressed(Button.AB, function () {
    pitch = 0
    roll = 0
    strafeToggle = false
    strafeSend = strafeToggle.toString().charAt(0)
    radio.sendString(pitch + "," + roll + "," + strafeSend)
})

basic.forever(function () {
    pitch = - Math.round(input.acceleration(Dimension.Y))
    roll = Math.round(input.acceleration(Dimension.X))
    strafeSend = strafeToggle.toString().charAt(0)
    radio.sendString(pitch + "," + roll + "," + strafeSend)
    basic.pause(50)
})
