const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "🙍‍♀️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

MANISHA-MD බොට් ᴡhatsApp සඳහා වන පරිශීලක බොට් එකක් වන අතර එමඟින් බොහො කාර්යයන් ඉටු කිරීමට ඉඩ සලසයි.

මෙමගීන් ඔබට බොහෝ කාර්යන් කර ගත හැක.

MANISHA-MD විධාන ලැයිස්තුව ලබා ගැනීම සදහා .menu විධානය භාවිතා කරන්න*

ඔබට යම්කිසි ගැලුවක් පැවතිහොත් MANISHA-MD ඩිවලොපර් සම්බන්ද කර ගැනිමට .owener විධානය බාවිත කරන්න ස්තූතියි....!`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/tjhxsh.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
