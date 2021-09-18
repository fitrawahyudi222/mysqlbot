let axios = require("axios");
let handler = async(m, { conn, text }) => { 

  await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
  axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=fwd201104`).then((res) => {
    let hasil = `Antv : ${res.data.result.antv}\n\nGtv: ${res.data.result.gtv}`
          
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['jadwaltv']
handler.tags = ['internet']
handler.command = /^(jadwaltv)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler 