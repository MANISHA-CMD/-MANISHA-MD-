const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍REPO LINK ❤️‍🔥👇*

🥷◦ https://github.com/MANISHA-CMD/-MANISHA-MD-/

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🥷◦  https://whatsapp.com/channel/0029VavZd1y0lwgxqEopap2e

*©MANISHA-MD*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/tjhxsh.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
