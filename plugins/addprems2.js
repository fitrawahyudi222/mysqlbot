const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verifikasi !'
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
    var nomor = m.sender
    m.reply(`*Done berhasil added User ✅*\n\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expired:* 30 Days\n*Thanks For Added Premium !*`)
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems 30 days <nomor>']
handler.tags = ['owner']
handler.command = /^addprems2$/i
handler.rowner = true

module.exports = handler
