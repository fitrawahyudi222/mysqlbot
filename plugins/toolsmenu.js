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
┃•  *Terdaftar :* ${registered ? 'Yes': 'No'}
┃
┣━━°❀❬ *TOOLS MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}alay <teks>*
┣➥ *${usedPrefix}barcode <teks>*
┣➥ *${usedPrefix}base64 <teks>*
┣➥ *${usedPrefix}binary <teks>*
┣➥ *${usedPrefix}calc <angka> (tiket)
┣➥ *${usedPrefix}kalk <angka> (tiket)*
┣➥ *${usedPrefix}calculator <angka> (tiket)*
┣➥ *${usedPrefix}kalkulator <angka> (tiket)*
┣➥ *${usedPrefix}caricowok*
┣➥ *${usedPrefix}caristicker <query> (tiket)*
┣➥ *${usedPrefix}create <nama|nomor> (tiket)*
┣➥ *${usedPrefix}cuaca <daerah> (tiket)*
┣➥ *${usedPrefix}fetch <url>*
┣➥ *${usedPrefix}get <url>*
┣➥ *${usedPrefix}url2img <url>*
┣➥ *${usedPrefix}ffstalk <id ff>*
┣➥ *${usedPrefix}film <query> (tiket)*
┣➥ *${usedPrefix}nonton <query> (tiket)*
┣➥ *${usedPrefix}font <text> (tiket)*
┣➥ *${usedPrefix}styletext <text> (tiket)*
┣➥ *${usedPrefix}getsticker*
┣➥ *${usedPrefix}getstiker*
┣➥ *${usedPrefix}hackweb <judul|desk|wm|url>*
┣➥ *${usedPrefix}hash <teks>*
┣➥ *${usedPrefix}halah <teks>*
┣➥ *${usedPrefix}hilih <teks>*
┣➥ *${usedPrefix}huluh <teks>*
┣➥ *${usedPrefix}heleh <teks>*
┣➥ *${usedPrefix}holoh <teks>*
┣➥ *${usedPrefix}huruf <teks>*
┣➥ *${usedPrefix}imagetobase64 (caption|reply) (tiket)*
┣➥ *${usedPrefix}img2url (tiket)*
┣➥ *${usedPrefix}ip <alamat ip>*
┣➥ *${usedPrefix}ipcheck <alamat ip>*
┣➥ *${usedPrefix}ipcek <alamat ip>*
┣➥ *${usedPrefix}jadwaltv <channel>*
┣➥ *${usedPrefix}kbbi <query> (tiket)*
┣➥ *${usedPrefix}peta <wilayah> (tiket)*
┣➥ *${usedPrefix}lokasi <wilayah> (tiket)*
┣➥ *${usedPrefix}maps <wilayah> (tiket)*
┣➥ *${usedPrefix}mlstalk <id ml>*
┣➥ *${usedPrefix}modapk*
┣➥ *${usedPrefix}nickff*
┣➥ *${usedPrefix}ninja <nama>*
┣➥ *${usedPrefix}nonton <film> (tiket)*
┣➥ *${usedPrefix}nsfwcek (reply/caption) (tiket)*
┣➥ *${usedPrefix}ocr (tiket)*
┣➥ *${usedPrefix}pastebin <teks> (tiket)*
┣➥ *${usedPrefix}profile*
┣➥ *${usedPrefix}purba <teks>*
┣➥ *${usedPrefix}readmore <teks>|<teks>*
┣➥ *${usedPrefix}spoiler <teks>|<teks>*
┣➥ *${usedPrefix}readqr (tiket)*
┣➥ *${usedPrefix}repeat <teks> (tiket)*
┣➥ *${usedPrefix}repeat2 <teks> (tiket)*
┣➥ *${usedPrefix}reverse <teks>*
┣➥ *${usedPrefix}save <nama>*
┣➥ *${usedPrefix}say <teks>*
┣➥ *${usedPrefix}sholat <daerah>*
┣➥ *${usedPrefix}sid <link> (tiket)*
┣➥ *${usedPrefix}short <link> (tiket)*
┣➥ *${usedPrefix}ss <url>*
┣➥ *${usedPrefix}ssf <url>*
┣➥ *${usedPrefix}ssweb <url>*
┣➥ *${usedPrefix}surah <no surat>*
┣➥ *${usedPrefix}teruskan <teks>*
┣➥ *${usedPrefix}tinyurl <link> (tiket)*
┣➥ *${usedPrefix}short2 <link> (tiket)*
┣➥ *${usedPrefix}upload (caption|reply) (tiket)*
┣➥ *${usedPrefix}virvid*
┣➥ *${usedPrefix}waktu <daerah>*
┣➥ *${usedPrefix}wiki <query> (tiket)*
┃ 
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['toolsmenu']
handler.tags = ['jj']
handler.command = /^(toolsmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

