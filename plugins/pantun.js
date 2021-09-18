let fetch = require('node-fetch')


let handler = async (m, { conn }) => {
    ddd = await fetch('https://api.lolhuman.xyz/api/random/pantun?apikey=fwd201104')
	f = await ddd.json()
	conn.reply(m.chat, `${f.result}`, m)
}
handler.help = ['pantun']
handler.tags = ['other']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
