let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  conn.sendFile(m.chat, json.url, '', '© fwd', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler
