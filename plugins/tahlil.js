let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    // if (!text) return m.reply(`Contoh:\n${usedPrefix + command} muhammad`)
    ddd = await fetch(`http://zekais-api.herokuapp.com/tahlil?apikey=iKW3Zw3N`)
    f = await ddd.json()
    conn.reply(m.chat, `*Doa*\n\n*Doa*: ${f.title}\n*Arab*: ${f.arabic}\n*Artinya*: ${f.translate}`, m)
}

handler.help = ['doa']
handler.tags = ['islami']
handler.command = /^(doa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
