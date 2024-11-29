const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "owener",

    desc: "To get the bot informations.",

    react: "🧑‍🔧",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*💗Contact Bot Owner1:* https://wa.me/94759934522

*❤️‍🔥Contact Bot Owner2:* https://wa.me/94721551183

*❤️‍🔥Contact Bot Owner3:* https://wa.me/94719106067

*💗©ᴍᴀɴɪꜱʜᴀ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ💗*`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/tjhxsh.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
