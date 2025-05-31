radio.setGroup(50)
radio.setTransmitPower(7)

let msg
let carPitch
let carRoll
let carSlowL
let carSlowR
let carStrafe


function turn(strength: number, state: string) {
    if (state === "true") {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + strength)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 + strength)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 - strength)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 - strength)
    } else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + strength)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 + strength)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + strength)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 + strength)
    }
}

radio.onReceivedString(function (receivedString: string) {
    msg = receivedString.split(",")
    carPitch = Math.clamp(-90, 90, parseInt(msg[0]))
    carRoll = Math.clamp(-90, 90, parseInt(msg[1]))
    carSlowL = parseInt(msg[2])
    carSlowR = parseInt(msg[3])
    carStrafe = msg[4]

    if (carPitch != 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + carPitch)
        PCAmotor.Servo(PCAmotor.Servos.S2, 100 - carPitch)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + carPitch)
        PCAmotor.Servo(PCAmotor.Servos.S4, 100 - carPitch)

    } else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90)
    }

    if (carRoll < -20 || carRoll > 20) {
        turn(carRoll, carStrafe)
    }

    if (carSlowR == 1 && carSlowL == 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90 + carPitch / 2)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90 + carPitch / 2)
    }

    if (carSlowL == 1 && carSlowR == 0) {
        PCAmotor.Servo(PCAmotor.Servos.S2, 90 - carPitch / 2)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90 - carPitch / 2)
    }
})
