const fs = require('fs');
var Milight = require('node-milight-promise').MilightController;
var commands = require('node-milight-promise').commands2;


// set up the milight object
var light = new Milight({
        ip: "255.255.255.255",
        delayBetweenCommands: 80,
        commandRepeat: 2
    });




module.exports = {

  changeState: function (state, brightness, zone) {
    if(state) {
      light.sendCommands(commands.rgbw.brightness(zone, brightness), commands.rgbw.on(zone), commands.rgbw.whiteMode(zone));
    }
    else {
      light.sendCommands(commands.rgbw.off(zone));
    }
    light.close();
  },
  changeBrightness: function (brightness) {
    light.sendCommands(commands.rgbw.brightness(brightness));
  }

};
