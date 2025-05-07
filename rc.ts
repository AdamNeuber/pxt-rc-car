radio.setGroup(50)
radio.setTransmitPower(7)

function rcTurn(strenght: number, state: string) {
    if (state === "true") {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + strenght)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 + strenght)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 - strenght)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 - strenght)
    }else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + strenght)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 + strenght)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + strenght)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 + strenght)
    }
}

radio.onReceivedString(function(receivedString: string) {
    let msg = receivedString.split(",")
    let forward = Math.clamp(-90, 90, parseInt(msg[0]))
    let turn = Math.clamp(-90, 90,parseInt(msg[1]))
    let trimR = Math.clamp(0, 10, parseInt(msg[2]))
    let trimL = Math.clamp(0, 10, parseInt(msg[3]))
    let strafeToggle = msg[4]
    
    if (forward != 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + forward)
        PCAmotor.Servo(PCAmotor.Servos.S2, 100 - forward)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + forward)
        PCAmotor.Servo(PCAmotor.Servos.S4, 100 - forward)
        
    } else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90)
        basic.pause(700)
    }

    if (turn < -20 || turn > 20) {
        rcTurn(turn,strafeToggle)
    }

})