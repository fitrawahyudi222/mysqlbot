
let fs = require('fs')
const { createHash } = require('crypto')
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const os = require('os')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

//========== BATASSS NGABBB ==========//

let handler = async (m, { conn, usedPrefix: _p, command, args }) => {
  let neww = performance.now()
  let teks = `${args[0]}`.toLowerCase()
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const petik = '```'
  const img = './src/logo.jpg'
  const groupsIn = groups.filter(v => !v.read_only)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    const job = global.db.data.users[m.sender].level
    var zerojob = 'Pengangguran'

    if (job >= '0' && job <= '5') {
      zerojob = 'Pengangguran'
    } else if (job >= '5' && job <= '10') {
      zerojob = 'Pemulung'
    } else if (job >= '10' && job <= '20') {
      zerojob = 'Miner/Penambang'
    } else if (job >= '20' && job <= '30') {
      zerojob = 'Penebang Pohon'
    } else if (job >= '30' && job <= '40') {
      zerojob = 'Pangkalan Ojek'
    } else if (job >= '40' && job <= '50') {
      zerojob = 'Driver Online'
    } else if (job >= '50' && job <= '60') {
      zerojob = 'Satpam'
    } else if (job >= '60' && job <= '70') {
      zerojob = 'Polisi'
    } else if (job >= '70' && job <= '80') {
      zerojob = 'Tentara'
    } else if (job >= '80' && job <= '90') {
      zerojob = 'Pekerja Kantoran'
    } else if (job >= '90' && job <= '100') {
      zerojob = 'Pengusaha IT'
    } else {
      zerojob = 'Pengusaha IT'
    }
  
    const lbars = global.db.data.users[m.sender].level
    var zerobars = '[▒▒▒▒▒▒▒▒▒]'

    if (lbars >= '0' && lbars <= '5') {
      zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
    } else if (lbars >= '5' && lbars <= '10') {
      zerobars = '[█▒▒▒▒▒▒▒▒▒]'
    } else if (lbars >= '10' && lbars <= '20') {
      zerobars = '[██▒▒▒▒▒▒▒▒]'
    } else if (lbars >= '20' && lbars <= '30') {
      zerobars = '[███▒▒▒▒▒▒▒]'
    } else if (lbars >= '30' && lbars <= '40') {
      zerobars = '[████▒▒▒▒▒▒]'
    } else if (lbars >= '40' && lbars <= '50') {
      zerobars = '[█████▒▒▒▒▒]'
    } else if (lbars >= '50' && lbars <= '60') {
      zerobars = '[██████▒▒▒▒]'
    } else if (lbars >= '60' && lbars <= '70') {
      zerobars = '[███████▒▒▒]'
    } else if (lbars >= '70' && lbars <= '80') {
      zerobars = '[████████▒▒]'
    } else if (lbars >= '80' && lbars <= '90') {
      zerobars = '[█████████▒]'
    } else if (lbars >= '90' && lbars <= '100') {
      zerobars = '[██████████]'
    } else {
      zerobars = '[██████████]'
    }

    const jam = moment.tz('Asia/Jakarta').format('HH')

    var ucapanWaktu = 'Selamat Pagi 🌄'



    if (jam >= '03' && jam <= '10') {

      ucapanWaktu = 'Selamat Pagi 🌄'

    } else if (jam >= '10' && jam <= '13') {

      ucapanWaktu = 'Selamat Siang ☀️'

    } else if (jam >= '13' && jam <= '18') {

      ucapanWaktu = 'Selamat Sore 🌅'

    } else if (jam >= '18' && jam <= '23') {

      ucapanWaktu = 'Selamat Malam 🌙'

    } else {

      ucapanWaktu = 'Selamat Malam 🌙'

    }
    //ini ada 4 fake, jadi bisa dipilih
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...{ from: { remoteJid: "6287834993722-1621306547@g.us" } },
      },
      message: {
        videoMessage: {
          title: `MYSQL`,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: `MYSQL`,
          jpegThumbnail: fs.readFileSync('./src/logo.jpg')
        }
      }
    }
    const ftroli = {
      key: {
        participant: '0@s.whatsapp.net'
      },
      message: {
        orderMessage: {
          itemCount: 2021,
          status: 1,
          surface: 1,
          message: 'FWD', //Kasih namalu
          orderTitle: 'MYSQL',
          thumbnail: fs.readFileSync('./src/logo.jpg'), //Gambarnye
          sellerJid: '0@s.whatsapp.net'

        }
      }
    }
    const fcon = {
      key:
      {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
          { remoteJid: "status@broadcast" } : {})
      },
      message: { "contactsArrayMessage": { "title": "F.W.D", "h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg') } }
    }
    const ftextt = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
          { remoteJid: "6287834993722-1621306547@g.us" } : {})
      },
      message: {
        "extendedTextMessage": {
          "text": "hallo bang",
          "title": `Hmm`,
          'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
        }
      }
    }
    const floc = {
      key:
      {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
          { remoteJid: "status@broadcast" } : {})
      },
      message: { "locationMessage": { "title": "Indonesia", "h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg') } }
    }
    const fvideo = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...{ from: { remoteJid: "6287834993722-1621306547@g.us" } },
      },
      message: {
        videoMessage: {
          title: `MYSQL`,
          h: `Hmm`,
          seconds: "99999",
          caption: `MYSQL`,
          jpegThumbnail: fs.readFileSync('./src/logo.jpg')
        }
      }
    }
    const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net` }, message: { orderMessage: { message: `${ucapanWaktu}`, thumbnail: fs.readFileSync("./src/logo.jpg") } } }
    const freply = {
      key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {



        "productMessage": {

          "product": {

            "productImage": {

              "url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",

              "mimetype": "image/jpeg",

              "fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

              "fileLength": "43344",

              "height": 1080,

              "width": 1080,

              "mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

              "fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

              "directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

              "mediaKeyTimestamp": "1612168223",

              "jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

            },

            "productId": "3872465552870232",

            "title": `RP 50.000`,

            "description": `${ucapanWaktu}`,

            "productImageCount": 1

          },

          "businessOwnerJid": "6287834993722@s.whatsapp.net"
        }
      }
    }

    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame  } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let sn = createHash('md5').update(m.sender).digest('hex')
    let name = conn.getName(m.sender)
    let d = new Date
    
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let battery = ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89', '88', '87', '86', '85', '84', '83', '82', '81', '80', '79', '78', '77', '76', '75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65', '64', '63', '62', '61', '60', '59', '58', '57', '56', '55', '54', '53', '52', '51', '50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40', '39', '38', '37', '36', '35', '34', '33', '32', '31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const lebaran = new Date ('May 1, 2022 23:59:59')
    const sekiring = new Date().getTime()
    const seleseh = lebaran - sekiring
    const jjhari = Math.floor(seleseh / (1000 * 60 * 60 * 24));
    const jjjam = Math.floor(seleseh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmmenit = Math.floor(seleseh % (1000 * 60 * 60) / (1000 * 60))
    const dddetik = Math.floor(seleseh % (1000 * 60) / 1000)
    const hariRaya = new Date('December 31, 2021 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor(Selisih % (1000 * 60) / 1000)
    const ultah = new Date('November 19, 2022 23:59:59')
    const sekarat = new Date().getTime()
    const Kurang = ultah - sekarat
    const ohari = Math.floor(Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor(Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor(Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor(Kurang % (1000 * 60) / 1000)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let totalreg = Object.keys(global.db.data.users).length
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalgc = Object.keys(global.db.data.chats).length
    let rtotalreg = 0
    rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let tags = {
     
    'internet': 'Internet',
    

    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
${petik}Hello %name${petik} 
${petik}Im ${conn.getName(conn.user.jid)} And You Use Prefix %p${petik} 

❏ Ｉｎｆｏ Ｂｏｔ
❏ Bot Name : ${conn.getName(conn.user.jid)} 
❏ Ulang Tahun Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik 
❏ Browser : ${conn.browserDescription[1]} 
❏ Wa Web Name : ${conn.browserDescription[0]} 
❏ Wa Web Version : ${conn.browserDescription[2]} 
❏ WhatsApp Version : ${conn.user.phone.wa_version} 
❏ Phone : ${conn.user.phone.device_manufacturer} 
❏ Version Android : Android ${conn.user.phone.os_version} 
❏ Hostname Server : ${os.hostname()} 
❏ Seri Phone : ${conn.user.phone.device_model} 
❏ Version : %version 
❏ Battery : %battery
❏ Battery Bars : ${zerobars}
❏ Speed : ${neww} ms 
❏ Total Features : 1200+ 


❏ Ｉｎｆｏ Ｕｓｅｒ
❏ UserName : %name 
❏ Serial Number : ${sn} 
❏ Prefix : %p  
❏ Mention : @${m.sender.replace(/@.+/, '')} 
❏ Age : ${registered ? '' + age : ''} 
❏ Phone Number : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')} 
❏ Registered : ${registered ? '✅' : '❌'}
❏ Premium User : ${premium ? '✅' : '❌'}
❏ Pekerjaan : ${zerojob} 
❏ Role : %role 
❏ Level Bars :  ${zerobars}  
❏ Health :  %healt  
❏ Coin :  %coin  
❏ Money :  RP %money  
❏ Ticket :  %limit  
❏ Game Limit :  %tigame  
❏ Level :  %level  
❏ Exp :  %exp  
❏ Exp To Levelup :  %xp4levelup  
❏ Total Exp :  %totalexp 

❏ Ｄａｔｅ ＆ Ｔｉｍｅ
❏ Day : %week 
❏ Date : %date 
❏ Weton : %weton 
❏ Tahun Baru : ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik Lagi
❏ Idul Fitri 2022 :  ${jjhari} Hari ${jjjam} Jam ${mmmmenit} Menit ${dddetik} Detik Lagi
❏ Islamic Date : ${dateIslamic} 
❏ Time : %time WIB 
❏ Time : ${wit} WIT 
❏ Time : ${wita} WITA 

❏ Ｄａｔａ
❏ Uptime : %uptime 
❏ Main Uptime : %muptime 
❏ Users In Database : %totalreg Users 
❏ Registered : %rtotalreg 
❏ Total GC : %totalgc 
%readmore

`
    let header = conn.menu.header || '༺ %category ༻'

    let body = conn.menu.body || '│ 𖣵 %cmd%islimit'

    let footer = conn.menu.footer || '╰────\n'

    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``

    let _text = before + '\n'

    for (let tag in groups) {

      _text += header.replace(/%category/g, tags[tag]) + '\n'

      for (let menu of groups[tag]) {

        for (let help of menu.help)

          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '') + '\n'

      }

      _text += footer + '\n'

    }

    _text += after

    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: _p, uptime, muptime,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      xp4levelup: max - exp <= 0 ? `Siap Untuk *${_p}levelup*` : `${max - exp} XP Lagi Untuk Levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, coin, tigame, sn, battery,

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => '' + replace[name])

    ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)

    conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', {
      detectLinks: true, thumbnail: ppnya, quoted: floc, contextInfo: {
        mentionedJid: conn.parseMention(text),

        externalAdReply: {

          title: `Halo ${conn.getName(m.sender)}`,

          body: `${ucapanWaktu} ${name}`,

          mediaType: 2,

          thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

          mediaUrl: 'https://instagram.com/f.w.dalimunthe'

        }

      }
      
    })


  } catch (e) {

    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)

    throw e

  }

}

handler.help = ['internetmenu']
handler.tags = ['jj']
handler.command = ['internetmenu']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100

module.exports = handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}