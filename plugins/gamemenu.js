let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
            "title": "Game Mysql",
            "description": "©Game",
            "buttonText": "Silahkan pilih game di bawah",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "rows": [
                        {
                            "title": "Tictactoe",
                            "description":"Bermain game tictactoe bersama teman",
                            "rowId": ".ttt"
                        }, {
                            "title": `Cak Lontong`,
                            "description":"Bermain game cak lontong yang ngeselin",
                            "rowId": ".caklontong"
                        }, {
                            "title": `Asah Otak`,
                            "description":"Game untuk mengasah otak",
                            "rowId": ".asahotak"
                        }, {
                            "title": `Tebak Gambar`,
                            "description":"Game tebak gambar",
                            "rowId": ".tebakgambar"
                        }, {
                            "title": `Tebak Kabupaten`,
                            "description": "Game tebak kabupaten",
                            "rowId": ".tebakkabupaten"
                        }, {
                            "title": `Tebak Lirik`,
                            "description":"Menebak lirik lagu",
                            "rowId": ".tebaklirik"
                        }, {
                            "title": `Tebak Lagu`,
                            "description":"Menebak judul lagu",
                            "rowId": ".tebaklagu"
                        }, {
                            "title": `Tebak Anime`,
                            "description":"Menebak karakter anime",
                            "rowId": ".tebakanime"
                        }, {
                            "title": `Tebak Kata`,
                            "description":"Game tebak kata",
                            "rowId": ".tebakkata"
                        }, {
                            "title": `Tebak Kota`,
                            "description": "Bermain game tebak kota yang bikin bingung",
                            "rowId": ".tebakkota"
                        }, {
                            "title": `Teka Teki`,
                            "description":"Game teka teki",
                            "rowId": ".tekateki"
                        }, {
                            "title": `Tebak Tebakan`,
                            "description":"Game tebak tebakan",
                            "rowId": ".tebaktebakan"
                        }, {
                            "title": `Tebak Kimia`,
                            "description":"Game tebak kimia",
                            "rowId": ".tebakkimia"
                        }, {
                            "title": `Susun Kata`,
                            "description":"Game menyusun kata",
                            "rowId": ".susunkata"
                        }, {
                            "title": `Truth Or Dare`,
                            "description":"Bermain truth or dare bersama teman",
                            "rowId": ".tod"
                        },{
                            "title": `Kuis`,
                            "description":"Game kuis lh pokoknya",
                            "rowId": ".kuis"
                        },{
                            "title": `Family 100`,
                            "description":"Game family 100 kayak di GTV",
                            "rowId": ".family100"
                        },
                    ]
                }
            ], "contextInfo": {
                "stanzaId": m.key.id,
                "participant": m.sender,
                "quotedMessage": m.message
            }
        }
    }, {}), { waitForAck: true })

handler.command = ['gamemenu']
module.exports = handler
handler.tags = ['jj']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler
/*let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

    let pp = './src/avatar_contact.png'
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    try {
        pp = await conn.getProfilePicture(who)
    } catch (e) {

    } finally {
        let str = `
┌─── ⳹°❀❬ Downloader ❭❀°
│✎ ${usedPrefix}asahotak
│✎ ${usedPrefix}caklontong
│✎ ${usedPrefix}kuis
│✎ ${usedPrefix}tebakanime
│✎ ${usedPrefix}tebakbendera
│✎ ${usedPrefix}tebakgambar
│✎ ${usedPrefix}tebaklagu
│✎ ${usedPrefix}tebakkata
│✎ ${usedPrefix}tebakkimia
│✎ ${usedPrefix}tekateki
│✎ ${usedPrefix}tebaktebakan
│✎ ${usedPrefix}truth
│✎ ${usedPrefix}dare
│✎ ${usedPrefix}kuis
│✎ ${usedPrefix}math <mode>
│✎ ${usedPrefix}ttt
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
        let mentionedJid = [who]
        conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['gamemenu']
handler.tags = ['jj']
handler.command = /^(gamemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler*/