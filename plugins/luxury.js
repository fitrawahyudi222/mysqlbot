let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://api.lolhuman.xyz/api/textprome/luxury?apikey=fwd201104&text=${response[0]}`
    conn.sendFile(m.chat, res, 'bpink.jpg', `Nih kak`, m, false)
}
handler.help = ['luxury'].map(v => v + ' <text>')
handler.tags = ['sticker']
handler.command = /^(luxury)$/i
handler.limit = true

module.exports = handler

