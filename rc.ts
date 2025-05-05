radio.setGroup(50)
radio.setTransmitPower(7)

radio.onReceivedString(function(receivedString: string) {
    let forward1 = receivedString
    let forward = parseInt(forward1)

    if(forward > 50) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 160)
        PCAmotor.Servo(PCAmotor.Servos.S2, 20)
        PCAmotor.Servo(PCAmotor.Servos.S3, 160)
        PCAmotor.Servo(PCAmotor.Servos.S4, 20)
    } else if(forward < -50) {
        PCAmotor.Servo(PCAmotor.Servos.S1, 20)
        PCAmotor.Servo(PCAmotor.Servos.S2, 160)
        PCAmotor.Servo(PCAmotor.Servos.S3, 20)
        PCAmotor.Servo(PCAmotor.Servos.S4, 160)
    }  else {
        PCAmotor.Servo(PCAmotor.Servos.S1, 90)
        PCAmotor.Servo(PCAmotor.Servos.S2, 90)
        PCAmotor.Servo(PCAmotor.Servos.S3, 90)
        PCAmotor.Servo(PCAmotor.Servos.S4, 90)
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
