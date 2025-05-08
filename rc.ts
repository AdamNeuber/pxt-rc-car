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
    let pitch = Math.clamp(-90, 90, parseInt(msg[0]))
    let roll = Math.clamp(-90, 90,parseInt(msg[1]))
    let slowL = parseInt(msg[2])
    let slowR = parseInt(msg[3])
    let strafeToggle = msg[4]
    
    if (pitch != 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + pitch)
        PCAmotor.Servo(PCAmotor.Servos.S2, 100 - pitch)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + pitch)
        PCAmotor.Servo(PCAmotor.Servos.S4, 100 - pitch)
        
    } else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90)
    }

    if (roll < -20 || roll > 20) {
        rcTurn(roll,strafeToggle)
    }

    while(slowR == 1) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + pitch/2)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + pitch/2)
        slowL = 0
        break
    }

    while (slowL == 1) {
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 - pitch/2)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 - pitch/2)
        slowR = 0
        break
    }
})