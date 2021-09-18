let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    // if (!text) return m.reply(`Contoh:\n${usedPrefix + command} muhammad`)
    ddd = await fetch(`http://zekais-api.herokuapp.com/cerpen?apikey=iKW3Zw3N`)
    f = await ddd.json()
    conn.reply(m.chat, `*Cerpen*\n\n*Judul*: ${f.title}\nPengarang: ${f.pengarang}\nKategori: ${f.category}\nCerita: ${f.post}`, m)
}

handler.help = ['cerpen']
handler.tags = ['other']
handler.command = /^(cerpen)$/i
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
