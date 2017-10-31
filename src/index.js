"use strict";
const log = require("./log");
module.exports = {
    Gpio: require("./Gpio"),
    initialize: function() {
        log(`[PIGPIO / initialize]`);
    },
    terminate: function() {
        log(`[PIGPIO / terminate]`);
    }
};