let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = (`https://api.lolhuman.xyz/api/textprome2/wallgravity?apikey=fwd201104&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat,res, 'coffe.jpg', `Nih kak`, m, false)
}
handler.help = ['wallgrafity'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']
handler.command = /^(wallgrafity)$/i

module.exports = handler


