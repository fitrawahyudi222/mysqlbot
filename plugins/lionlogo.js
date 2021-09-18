let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=fwd201104&text1=${response[0]}&text2=${response[1]}`
    conn.sendFile(m.chat, res, 'lion.jpg', `Nih kak`, m, false)
}
handler.help = ['lionlogo'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(lionlogo)$/i

module.exports = handler

