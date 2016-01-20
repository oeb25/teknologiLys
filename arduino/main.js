import five from 'johnny-five'

const board = new five.Board()

let leds

const fn = val => {
  const a = val[0]
  const b = val[1]

  if (a) {
    console.log('setting brightness a to', Math.floor(a * 255))

    leds[0].on()
    leds[0].brightness(Math.floor(a * 255))
  } else {
    leds[0].off()
  }
  if (b) {
    console.log('setting brightness b to', Math.floor(b * 255))

    leds[1].on()
    leds[1].brightness(Math.floor(b * 255))
  } else {
    leds[1].off()
  }
}

const colors = {
  black: [0, 0],
  green: [0, 1],
  orange: [1, 1],
  red: [1, 0],
  blue: [.5, .5],
}

// 00
// 01 = GREEN
// 11 = ORANGE

let i = 0

let up = () => {
  leds[0].brightness(i++)
  leds[1].brightness(255 - i)

  console.log(i)

  if (i <= 255) {
    return setTimeout(() => up(), 20)
  }

  down()
}

let down = () => {
  leds[0].brightness(i--)
  leds[1].brightness(255 - i)

  console.log(i)

  if (i >= 0) {
    return setTimeout(() => down(), 20)
  }

  up()
}

board.on('ready', () => {
  leds = [
    new five.Led(10),
    new five.Led(11)
  ]

  board.repl.inject({
    red() {
      fn(colors.red)
    },
    black() {
      fn(colors.black)
    },
    green() {
      fn(colors.green)
    },
    orange() {
      fn(colors.orange)
    },
    blue() {
      fn(colors.blue)
    },
  })

  //leds[0].on()

  up()
})