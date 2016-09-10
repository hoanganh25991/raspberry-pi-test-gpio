var gpio = require('rpi-gpio');

var count = 1000000;

gpio.setup(9, gpio.DIR_OUT, on);

function on() {
    if (count-- == 0) {
        gpio.destroy();
        return;
    }
    gpio.write(9, 1, off);
}

function off() {
    gpio.write(9, 0, on);
}