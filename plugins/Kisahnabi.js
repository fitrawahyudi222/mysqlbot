let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) return m.reply(`Contoh:\n${usedPrefix + command} muhammad`)
	ddd = await fetch(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=fwd201104`)
	f = await ddd.json()
	conn.reply(m.chat, `Kisah Para Nabi\n\n\nNama: ${f.result.name}\n\nTahun Kelahiran: ${f.result.thn_kelahiran}\n\nUmur: ${f.result.age}\n\nTempat: ${f.result.place}\n\nCerita: ${f.result.story}`, m)
}

handler.help = ['kisah|kisah nabi|nabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islami']
handler.command = /^(kisah|kisah nabi|nabi)$/i
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
