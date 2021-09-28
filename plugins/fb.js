// const { facebook } = require('../lib/facebook')
// let handler = async (m, { conn, args, usedPrefix, command }) => {
//   if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
//   if (!args[0].match(/https:\/\/.*(facebook.com|fb.watch)/gi)) throw `url salah`
//   facebook(args[0]).then(async res => {
//     let fb = JSON.stringify(res)
//     let json = JSON.parse(fb)
//     // m.reply(require('util').format(json))
//     if (!json.status) throw json
//     await m.reply(global.wait)
//     await conn.sendFile(m.chat, json.data[0].url, '', '© fwd', m)
//   }).catch(_ => _)
// }
// handler.help = ['fb'].map(v => v + ' <url>')
// handler.tags = ['downloader']

// handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

// module.exports = handler
let handler = async (m, { conn, text }) => {
  let [link, resolusi] = text.split`|`

  if (!link) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
  if (!resolusi) return conn.reply(m.chat, 'Harap memasukkan resolusi hd/sd !', m)

  conn.reply(m.chat, 'Searching...', m)
  new Promise((resolve, reject) => {
    axios.get(`https://mnazria.herokuapp.com/api/fbdownloadervideo?url=` + encodeURIComponent(link))
      .then((res) => {
        if (resolusi == 'hd') {
          let dl_link = res.data.resultHD
        } else {
          let dl_link = res.data.resultSD
        }
        conn.reply(m.chat, `*Link:* ${dl_link} \n\nfile akan segera dikirim!`, m)
        conn.sendFile(m.chat, dl_link, 'video.mp4', `*Title:* ${text}\n*Link:* ${dl_link}`, m)

      })
      .catch(reject => {
        conn.reply(m.chat, 'Ada yang Erorr!', m)
      })
  })

}

handler.help = ['fb <hd/sd|url>']
handler.tags = ['downloader']
handler.command = /^fb$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler