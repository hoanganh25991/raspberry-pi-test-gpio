var wpi = require('wiring-pi');

var count = 1000000;

wpi.wiringPiSetupGpio();
wpi.pinMode(9, wpi.OUTPUT);

while (count-- != 0) {
        wpi.digitalWrite(9, 1);
        wpi.digitalWrite(9, 0);
}