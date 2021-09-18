let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    // if (!text) return m.reply(`Contoh:\n${usedPrefix + command} muhammad`)
    ddd = await fetch(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=fwd201104`)
    f = await ddd.json()
    conn.reply(m.chat, `[Cuaca]\n\nTempat: ${f.result.tempat}\nLatitude: ${f.result.latitude}\nLongitude: ${f.result.longitude}\nCuaca: ${f.result.cuaca}\nAngin: ${f.result.angin}\nDeskripsi: ${f.result.description}\nKelembapan: ${f.result.kelembapan}\nSuhu: ${f.result.suhu}\nUdara: ${f.result.udara}\nPermukaan Laut: ${f.result.permukaan_laut}`, m)
}

handler.help = ['cuaca']
handler.tags = ['other']
handler.command = /^(cuaca)$/i
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
