var Gpio = require('onoff').Gpio,
    led = new Gpio(9, 'out'),
    count = 1000000;

while (count-- != 0) {
        led.writeSync(1);
        led.writeSync(0);
}