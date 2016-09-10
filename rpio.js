var rpio = require('rpio');

/*
 * Use GPIOxx numbering to match the rpi-gpio example.  rpio defaults to the physical
 * mapping, i.e. P01-P40, as it is simpler and portable across different models.
 *
 * Alternatively, remove the rpio.init() call completely and replace '23' with '21'.
 */
var options = {mapping: 'gpio'};

// var options = {
//         gpiomem: false,           //Use /dev/gpiomem 
//         mapping: 'gpio',    //Use the P1-P40 numbering scheme
// }
rpio.init(options);
rpio.open(23, rpio.OUTPUT);

// for (var i = 0; i < 1000000; i++) {
//     rpio.write(23, 1);
//     // rpio.usleep(200);
//     rpio.write(23, 0);
// }
var buf = new Buffer(1000000);

// rpio.init({mapping: 'gpio'});
rpio.open(23, rpio.OUTPUT);

for (var i = 0; i < buf.length; i+=2) {
        buf[i] = 1;
        buf[i+1] = 0;
}

rpio.writebuf(23, buf);