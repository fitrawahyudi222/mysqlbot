let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) return m.reply(`contoh:\n${usedPrefix + command} medan`)
  ddd = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=fwd201104`)
  f = await ddd.json()
  conn.reply(m.chat, `Jadwal Shalat\n\nWilayah: ${f.result.wilayah}\nTanggal: ${f.result.tanggal}:\nSahur: ${f.result.sahur}\nImsak: ${f.result.imsak}\nSubuh: ${f.result.subuh}\nTerbit: ${f.result.terbit}\nDhuha: ${f.result.dhuha}\nDzhuhur: ${f.result.dzuhur}\nAshar: ${f.result.ashar}\nMaghrib: ${f.result.maghrib}\nIsya: ${f.result.isya}`, m)
}
handler.help = ['jsholat']
handler.tags = ['islami']
handler.command = /^(jsholat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
