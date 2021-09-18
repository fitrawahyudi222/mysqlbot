let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=fwd201104&text=${response[0]}`
    conn.sendFile(m.chat, res, 'bpink.jpg', `Nih kak`, m, false)
}
handler.help = ['jokerlogo'].map(v => v + ' <text>')
handler.tags = ['sticker']
handler.command = /^(jokerlogo)$/i
handler.limit = true

module.exports = handler

