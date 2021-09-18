
let handler = async (m, { conn, usedPrefix: _p }) => {
    let info = ` 
 ┌〔 Donasi • Pulsa 〕
 ├ IM3 [085669011805]
 └────

 ┌〔 Donasi • Emoney 〕
 ├ OVO, Dana [085669011805]
 └────`
   conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

module.exports = handler
