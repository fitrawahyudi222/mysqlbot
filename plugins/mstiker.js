let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

    let pp = './src/avatar_contact.png'
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    try {
        pp = await conn.getProfilePicture(who)
    } catch (e) {

    } finally {
        let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
        let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
        let { min, xp, max } = levelling.xpRange(level, global.multiplier)
        let username = conn.getName(who)
        let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃[${max - exp} lagi untuk levelup]
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Nomor :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃•  *Api Whatsapp :* wa.me/${who.split`@`[0]}
┃•  *Terdaftar :* ${registered ? '✅' : '❌'}
┃
┣━━°❀❬ *STICKER & MAKER* ❭❀°━━┓
┃
┣➥ *${usedPrefix}attp1 <teks>*
┣➥ *${usedPrefix}attp2 <teks>*
┣➥ *${usedPrefix}avenger <teks|teks> (tiket)*
┣➥ *${usedPrefix}bloodfrosted <teks> (tiket)*
┣➥ *${usedPrefix}bokeh <teks> (tiket)*
┣➥ *${usedPrefix}box3d <teks> (tiket)*
┣➥ *${usedPrefix}blackpink <teks>*
┣➥ *${usedPrefix}breakwall <teks> (tiket)*
┣➥ *${usedPrefix}cloud <teks> (tiket)*
┣➥ *${usedPrefix}cloudtext <teks> (tiket)*
┣➥ *${usedPrefix}coffecup <teks> (tiket)
┣➥ *${usedPrefix}sticker <teks> (tiket)
┣➥ *${usedPrefix}coolgravity <teks|teks> (tiket)
┣➥ *${usedPrefix}ctrigger <teks> (tiket)
┣➥ *${usedPrefix}cstahta <teks> (tiket)
┣➥ *${usedPrefix}deluxesilver <teks> (tiket)
┣➥ *${usedPrefix}dropwater <teks> (tiket)
┣➥ *${usedPrefix}dropwater2 <teks> (tiket)
┣➥ *${usedPrefix}fflogo <teks> (tiket)
┣➥ *${usedPrefix}fflogo2 <teks> (tiket)
┣➥ *${usedPrefix}firetext <teks> (tiket)
┣➥ *${usedPrefix}fireworksparkle <teks> (tiket)
┣➥ *${usedPrefix}foggywindow <teks> (tiket)
┣➥ *${usedPrefix}futureneon <teks> (tiket)
┣➥ *${usedPrefix}gaminglogo <teks> (tiket)
┣➥ *${usedPrefix}haramserti <teks>
┣➥ *${usedPrefix}getexif
┣➥ *${usedPrefix}glitch <teks|teks>
┣➥ *${usedPrefix}glitch2 <teks|teks> (tiket)
┣➥ *${usedPrefix}glitertext <teks|teks> (tiket)
┣➥ *${usedPrefix}glowtext <teks> (tiket)
┣➥ *${usedPrefix}glowtext2 <teks> (tiket)
┣➥ *${usedPrefix}gneon <teks>
┣➥ *${usedPrefix}gneon2 <teks>
┣➥ *${usedPrefix}goldtext <teks> (tiket)
┣➥ *${usedPrefix}gplaybutton <teks> (tiket)
┣➥ *${usedPrefix}halloween <teks> (tiket)
┣➥ *${usedPrefix}harrypotter <teks> (tiket)
┣➥ *${usedPrefix}holographic <teks> (tiket)
┣➥ *${usedPrefix}horrorblood <teks> (tiket)
┣➥ *${usedPrefix}icecold <teks> (tiket)
┣➥ *${usedPrefix}impressiveglitch <teks> (tiket) 
┣➥ *${usedPrefix}jokerlogo <teks> (tiket)
┃ 
┗━━━━━━━━━━━━━━━━
`.trim()
        let mentionedJid = [who]
        conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['mstiker']
handler.tags = ['jj']
handler.command = /^(mstiker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

