var SerialPort  = require('serialport2').SerialPort;
var arduinoPort = '/dev/arduino';

// setting up the serial connection

var connectArd = function() {
  var arduinoSerial = new SerialPort();
  arduinoSerial.open(arduinoPort, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
  });

  // do something with incoming data
  arduinoSerial.on('data', function (data) {
  .
  .
  .
  });

  arduinoSerial.on('close', function(){
    console.log('ARDUINO PORT CLOSED');
    reconnectArd();
  });

  arduinoSerial.on('error', function (err) {
    console.error("error", err);
    reconnectArd();
  });

}

connectArd();

// check for connection errors or drops and reconnect
var reconnectArd = function () {
  console.log('INITIATING RECONNECT');
  setTimeout(function(){
    console.log('RECONNECTING TO ARDUINO');
    connectArd();
  }, 2000);
};
