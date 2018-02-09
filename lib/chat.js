//Chat functions!
"use strict";
const security = require("./security.js");
const util = require("./util.js");

//response obj

exports.responses = {
  "!beep": boop
};

function boop(client, message) {
  message.channel.sendMessage("boop!");
}


