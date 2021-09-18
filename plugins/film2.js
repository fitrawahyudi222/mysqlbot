let fetch = require('node-fetch')


let handler = async (m, { conn,text }) => {

    await m.reply('Searching...')

    if (!text) return conn.reply(m.chat, 'Harap masukan query film', m)

    ddd = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=fwd201104&query=${text}`)
    f = await ddd.json()
    conn.reply(m.chat,`*Title: ${f.result.title}\nThumbnail: ${f.result.thumbnail}\nLink:\n${f.result.link}\nGenre:${f.result.genre}\nViews:${f.result.views}\nDuration:${f.result.duration}\nTahun:${f.result.tahun}\nRating:${f.result.rating}\nDeskripsi${f.result.desc}\nAktor:${f.result.actors}\nLokasi:${f.result.location}\nTanggal rilis:${f.result.date_release}\nBahasa:${f.result.language}\nLink lain:${f.result.link_dl}*`, m)
    conn.sendFile(m.chat, f, ``, m, false)
}
handler.help = ['film2']
handler.tags = ['other']
handler.command = /^(film2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler