radio.setGroup(50)
radio.setTransmitPower(7)

let strafeToggle:string = "false"

let trimR = 0
let trimL = 0

let forward = 0
let turn = 0

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    if(strafeToggle == "false"){
        strafeToggle = "true"
    }else{
        strafeToggle =  "false"
    }
})

input.onButtonPressed(Button.AB, function () {
    forward = 0
    turn = 0
    trimL = 0
    trimR = 0
    radio.sendString(forward + "," + turn + "," + trimR + "," + trimL + "," + strafeToggle)
    basic.pause(700)
})

basic.forever(function() {
    forward = - Math.round(input.acceleration(Dimension.Y)) / 10
    turn = Math.round(input.acceleration(Dimension.X)) / 10

    radio.sendString(forward + "," + turn + "," + trimR + "," + trimL + "," + strafeToggle)
    basic.pause(50)
})