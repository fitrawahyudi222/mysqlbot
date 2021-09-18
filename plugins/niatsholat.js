let fetch = require('node-fetch')


let handler = async (m, { conn,text }) => {
    ddd = await fetch(`https://api.lolhuman.xyz/api/niatsholat/${text}?apikey=fwd201104`)
	f = await ddd.json()
    conn.reply(m.chat, `${f.result.name}\n\nArab: ${f.result.ar}\n\nLatin: ${f.result.latin}\n\nArti: ${f.result.id}`, m)
}
handler.help = ['niatshalat'].map(v => v + ' <subuh/dzuhur/ashar/maghrib/isya>')
handler.tags = ['jjj']
handler.command = /^(niatshalat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
