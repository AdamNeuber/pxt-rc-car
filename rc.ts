radio.setGroup(50)
radio.setTransmitPower(7)

let msg
let carPitch: number
let carRoll: number
let carStrafe: boolean

const neutralPos = 1500
const rightWheelEqalizer = 90
const valMod = 0.75

function parseBool(value: string) {
    if (value == "t") {
        return true
    } else {
        return false
    }
}

function move(fwd: number, sd: number, tog: boolean) {
    if (tog == false) {
        PCAmotor.GeekServo(PCAmotor.Servos.S1, neutralPos + fwd * valMod + sd * valMod)
        PCAmotor.GeekServo(PCAmotor.Servos.S2, neutralPos - fwd * valMod + rightWheelEqalizer + sd * valMod)
        PCAmotor.GeekServo(PCAmotor.Servos.S3, neutralPos + fwd * valMod + sd * valMod)
        PCAmotor.GeekServo(PCAmotor.Servos.S4, neutralPos - fwd * valMod + rightWheelEqalizer + sd * valMod)
    } else {
        PCAmotor.GeekServo(PCAmotor.Servos.S1, neutralPos + sd)
        PCAmotor.GeekServo(PCAmotor.Servos.S2, neutralPos + rightWheelEqalizer + sd)
        PCAmotor.GeekServo(PCAmotor.Servos.S3, neutralPos - sd)
        PCAmotor.GeekServo(PCAmotor.Servos.S4, neutralPos - rightWheelEqalizer - sd)
    }
}

radio.onReceivedString(function (receivedString: string) {
    msg = receivedString.split(",")
    carPitch = Math.clamp(-1000, 1000, parseInt(msg[0]))
    carRoll = Math.clamp(-1000, 1000, parseInt(msg[1]))
    carStrafe = parseBool(msg[2])

    move(carPitch, carRoll, carStrafe)
})
