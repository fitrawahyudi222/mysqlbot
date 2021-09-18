let imageToBase64 = require('image-to-base64')
let axios = require('axios')

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')

    if (!text) return conn.reply(m.chat, 'Harap masukan query film', m)

  axios.get(`https://api.lolhuman.xyz/api/lk21?apikey=fwd201104&query=${text}`)
    .then ((res) => {
      imageToBase64(res.data.result.thumb)
    .then((ress) => {
    let thumb = Buffer.from(ress, 'base64')
      let hasil = `*Title:* ${res.data.result.title}\n*Thumbnail:* ${res.data.result.thumbnail}\n*Link:*\n${res.data.result.link}\n*Genre:*${res.data.result.genre}\n*Views:*${res.data.result.views}\n*Duration:*${res.data.result.duration}\n*Tahun:*${res.data.result.tahun}\n*Rating:*${res.data.result.rating}\n*Deskripsi*${res.data.result.desc}\n*Aktor:*${res.data.result.actors}\n*Lokasi:*${res.data.result.location}\n*Tanggal rilis:*${res.data.result.date_release}\n*Bahasa:*${res.data.result.languange}\n*Link lain:*${res.data.result.link_dl}`
      conn.sendFile(m.chat, thumb, 'nama.jpg', ``, hasil, m, false)
    // conn.sendFile(m.chat, thumb, 'film.jpg', hasil, m)
	})
   })
}
handler.help = ['film', 'nonton'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(film|nonton)$/i


module.exports = handler
