const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix,text, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} f.w.dalimunthe`

    let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=fwd201104`)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.status != 200) throw json
    conn.sendFile(m.chat, json.data, 'eror.jpg', `*Username*: ${json.result.username}\n*Nickname*: ${json.result.nickname}\n*Bio*: ${json.result.bio}\n*Followers*: ${json.result.followers}\n*Following*: ${json.result.followings}\n*Likes*: ${json.result.likes}\n*Video*: ${json.result.video}`, m, 0, { thumbnail: await (await fetch(json.data.profile)).buffer() })
}
handler.help = ['ttstalk <username>']
handler.tags = ['tools']
handler.command = /^(ttstalk)$/i
handler.limit = true
module.exports = handler