const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://files.catbox.moe/tjhxsh.jpg' },
    { key: 'ALIVE_MSG', value: '*🥷 𝐌𝐀𝐍𝐈𝐒𝐇𝐀 𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 🥷...||*\n\n`🪄 WHATSAPP CHANEL ;`\n\n_ https://chat.whatsapp.com/IEEUnyvlnCqDeuFw1DEsWk 🇱🇰_\n\n`|| *🪄BOT OWNER NUMBER ;`\n\n+94759934522 🇱🇰\n\n || `BOT = MANISHA MD || Created By = Manisha sasmitha' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
