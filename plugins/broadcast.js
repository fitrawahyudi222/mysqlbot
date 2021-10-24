
// let { MessageType } = require('@adiwajshing/baileys')
// const fs = require("fs");
// let fetch = require('node-fetch')
// let handler = async (m, { conn, text }) => {
//   let nani = 'https://telegra.ph/file/0ee3b8764de7285d66724.jpg'
//   let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
//   let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), text.trim(), '', '⋮☰ LIST  FITUR', '.bot', '⋮☰ OWNER', '.owner', m)
//   for (let id of chats) conn.copyNForward(id, content, true)
//   conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
// }
// handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
// handler.tags = ['owner']
// handler.command = /^(broadcast|bc)$/i
// handler.owner = true
// handler.mods = false
// handler.premium = false
// handler.group = false
// handler.private = false

// handler.admin = false
// handler.botAdmin = false

// handler.fail = null

// module.exports = handler

// const more = String.fromCharCode(8206)
// const readMore = more.repeat(4001)


let handler = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_\nestimasi selesai ${chats.length * 1.5} detik`, m)
  for (let id of chats) {
    await delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '〔 Mysql Broadcast 〕\n\n' + teks + '\n' + readMore + randomID(32)), true).catch(_ => _)
    }
  await conn.sendButton(m.chat, teks.trim(), 'fwd', '⋮☰ LIST  FITUR', '.bot', m)
  m.reply('_*Broadcast Selesai*_')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))