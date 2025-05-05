radio.setGroup(50)
radio.setTransmitPower(7)

let trimR = 0
let TrimL = 0

basic.forever(function() {
    let forward = - Math.round(input.acceleration(Dimension.Y))
    let turn = Math.round(input.acceleration(Dimension.X))

    radio.sendString("" + forward)

    /*let vx = Math.clamp(-100, 100, input.acceleration(Dimension.X) / 10)
    let vy = Math.clamp(-100, 100, input.acceleration(Dimension.Y) / 10)
    let rot = Math.clamp(-100, 100, input.acceleration(Dimension.Z) / 20)

    // Posíláme všechny tři hodnoty v jednom stringu oddělené čárkami
    radio.sendString("" + vx + "," + vy + "," + rot)
    basic.pause(100)*/
    basic.pause(50)
})