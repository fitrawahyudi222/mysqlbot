let fetch = require('node-fetch')


let handler = async (m, { conn }) => {
    ddd = await fetch('https://api.lolhuman.xyz/api/random/quotes?apikey=fwd201104')
	f = await ddd.json()
	conn.reply(m.chat, `*By:${f.result.by}*\n*Quotes:${f.result.quote}*`, m)
}
handler.help = ['quotes']
handler.tags = ['other']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
//`*Title:* ${res.data.result.title}\n*Thumbnail:* ${res.data.result.thumbnail}\n*Link:*\n${res.data.result.link}\n*Genre:*${res.data.result.genre}\n*Views:*${res.data.result.views}\n*Duration:*${res.data.result.duration}\n*Tahun:*${res.data.result.tahun}\n*Rating:*${res.data.result.rating}\n*Deskripsi*${res.data.result.desc}\n*Aktor:*${res.data.result.actors}\n*Lokasi:*${res.data.result.location}\n*Tanggal rilis:*${res.data.result.date_release}\n*Bahasa:*${res.data.result.languange}\n*Link lain:*${res.data.result.link_dl}
