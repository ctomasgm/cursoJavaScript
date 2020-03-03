//Carlos Tomás García Martinez 320605
//José Francisco Greco Flores 320610

var five = require('johnny-five');
var board = new five.Board();
board.on("ready", function () {
  var led = new five.Led(13);
  led.blink(500);
});