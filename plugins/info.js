let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: FWD
╠➥ Script: @WakUteh
║
╠➥ Instagram: @f.w.dalimunthe
║
╠═〘 Thanks To 〙 ═
╠➥ Allah SWT
╠➥ Mak
╠➥ Ayah
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 0856-6901-1805
╠➥ OVO: 0856-6901-1805
╠➥ Indosat: 0856-6901-1805
║
║>Request? Wa.me/6285669011805
║
╠═〘 MYSQL BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

