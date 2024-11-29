const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WnYAmShD#yd_vK26iaD21EqW3E2p4gjYDjyOoxulC3HEiPLsvTz4",
MONGODB: process.env.MONGODB || "mongodb://mongo:tmVNIICplUrrmhmGIujHVSeWeIlrbNmU@junction.proxy.rlwy.net:46680"
};
