let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=fwd201104&text1=${response[0]}&text2=${response[1]}`
    conn.sendFile(m.chat, res, 'bpink.jpg', `Nih kak`, m, false)
}
handler.help = ['steel3d'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(steel3d)$/i
handler.limit = true

module.exports = handler

