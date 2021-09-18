
let fetch = require('node-fetch')


let handler = async (m, { conn,text }) => {
    ddd = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=fwd201104`)
    f = await ddd.json()
    conn.reply(m.chat, 'eror.jpg', `*Username*: ${f.result.username}\n*Nickname*: ${f.result.nickname}\n*Bio*: ${f.result.bio}\n*Followers*: ${f.result.followers}\n*Following*: ${f.result.followings}\n*Likes*: ${f.result.likes}\n*Video*: ${f.result.video}`, m, 0, { thumbnail: await (await fetch()).buffer() })
}
handler.help = ['tstalk']
handler.tags = ['other']
handler.command = /^(tstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
