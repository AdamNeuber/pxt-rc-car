radio.setGroup(50)
radio.setTransmitPower(7)

radio.onReceivedString(function(receivedString: string) {
    let forward1 = receivedString
    let forward = parseInt(forward1)

    if(forward > 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 180 - forward)
        PCAmotor.Servo(PCAmotor.Servos.S2, forward)
        PCAmotor.Servo(PCAmotor.Servos.S3, 180 - forward)
        PCAmotor.Servo(PCAmotor.Servos.S4, forward)
    }
    if(forward < 0) {
        PCAmotor.Servo(PCAmotor.Servos.S1, forward)
        PCAmotor.Servo(PCAmotor.Servos.S2, 180 - forward)
        PCAmotor.Servo(PCAmotor.Servos.S3, forward)
        PCAmotor.Servo(PCAmotor.Servos.S4, 180 - forward)
    }    
})

/*radio.onReceivedString(function(receivedString: string) {
    // Rozdělíme přijatý string do proměnných
    let parts = receivedString.split(",")
    if (parts.length != 3) return

    let vx = parseFloat(parts[0])
    let vy = parseFloat(parts[1])
    let rot = parseFloat(parts[2])

    // Výpočet rychlosti pro 4 omni kola
    let m1 = vy + vx + rot
    let m2 = vy - vx - rot
    let m3 = vy - vx + rot
    let m4 = vy + vx - rot

    PCAmotor.Servo(PCAmotor.Servos.S1, m1)
    PCAmotor.Servo(PCAmotor.Servos.S2, m2)
    PCAmotor.Servo(PCAmotor.Servos.S3, m3)
    PCAmotor.Servo(PCAmotor.Servos.S4, m4)
})*/
/*
    PCAmotor.Servo(PCAmotor.Servos.S1, ) 
    PCAmotor.Servo(PCAmotor.Servos.S2, )
    PCAmotor.Servo(PCAmotor.Servos.S3, )
    PCAmotor.Servo(PCAmotor.Servos.S4, )
*/
