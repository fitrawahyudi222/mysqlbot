const moment = require('moment-timezone')
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {
            "title": `I am Mysqlbot\n\nHalo kak 👋 ${conn.getName(m.sender)}\n${ucapan()}`,
            "description": "Ketuk untuk memilih menu kak\n\n© Mysql",
            "buttonText": "List Menu",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "rows": [
                        {
                            "title": `All Menu`,
                            "description": "I Want To Use All Menu",
                            "rowId": ".allmenu"
                        }, {
                            "title": `Simple Menu`,
                            "description": "I Want To Use Simple Menu",
                            "rowId": ".simplemenu"
                        }, {
                            "title": `Game Menu`,
                            "description": "I Want To Use Game Menu",
                            "rowId": ".gamesmenu"
                        }, {
                            "title": "Group Setting",
                            "description": "I Want To Use Adventure Menu",
                            "rowId": ".group"
                        }, {
                            "title": `Ephemeral Setting`,
                            "description": "I Want To Use Ephemeral",
                            "rowId": ".ephemeralmenu"
                        },{
                            "title": "Adventure Menu",
                            "description": "I Want To Use Adventure Menu",
                            "rowId": ".adventuremenu"                       
                        }, {
                            "title": "Xp Menu",
                            "description": "I Want To Use Xp Menu",
                            "rowId": ".xpmenu"
                        }, {
                            "title": "Sticker Menu",
                            "description": "I Want To Use Sticker Menu",
                            "rowId": ".stikermenu"
                        }, {
                            "title": "Kerang Menu",
                            "description": "I Want To Use Kerang Menu",
                            "rowId": ".kerangmenu"
                        }, {
                            "title": "Quotes Menu",
                            "description": "I Want To Use Quotes Menu",
                            "rowId": ".quotesmenu"
                        }, {
                            "title": "Admin Menu",
                            "description": "I Want To Use Admin Menu",
                            "rowId": ".adminmenu"
                        }, {
                            "title": "Group Menu",
                            "description": "I Want To Use Group Menu",
                            "rowId": ".groupmenu"
                        }, {
                            "title": "Premium Menu",
                            "description": "I Want To Use Premium Menu",
                            "rowId": ".premiummenu"
                        }, {
                            "title": "Internet Menu",
                            "description": "I Want To Use Internet Menu",
                            "rowId": ".internetmenu"
                        }, {
                            "title": "Anonymous Menu",
                            "description": "I Want To Use Anonymous Menu",
                            "rowId": ".anonymousmenu"
                        }, {
                            "title": "Nulis Menu",
                            "description": "I Want To Use Nulis Menu",
                            "rowId": ".nulismenu"
                        }, {
                            "title": "Downloader Menu",
                            "description": "I Want To Use Downloader Menu",
                            "rowId": ".downloadermenu"
                        }, {
                            "title": "Fun Menu",
                            "description": "I Want To Use Fun Menu",
                            "rowId": ".funmenu"
                        }, {
                            "title": "Tools Menu",
                            "description": "I Want To Use Tools Menu",
                            "rowId": ".toolsmenu"
                        }, {
                            "title": "Database Menu",
                            "description": "I Want To Use Database Menu",
                            "rowId": ".databasemenu"
                        }, {
                            "title": "Voting Menu",
                            "description": "I Want To Use Voting Menu",
                            "rowId": ".votingmenu"
                        }, {
                            "title": "Absen Menu",
                            "description": "I Want To Use Absen Menu",
                            "rowId": ".absenmenu"
                        }, {
                            "title": "Islami Menu",
                            "description": "I Want To Use Islami Menu",
                            "rowId": ".islamimenu"
                        }, {
                            "title": "Niat Menu",
                            "description": "I Want To Use Niat Menu",
                            "rowId": ".niatmenu"
                        },{
                            "title": "Pengubah Suara",
                            "description": "I Want To Use Pengubah Suara (VN)",
                            "rowId": ".pengubahsuara"
                        }, {
                            "title": "Jadibot Menu",
                            "description": "I Want To Use Jadibot Menu",
                            "rowId": ".jadibotmenu"
                        }, {
                            "title": "Info Menu",
                            "description": "I Want To Use Info Menu",
                            "rowId": ".infomenu"
                        }, {
                            "title": "Video Maker",
                            "description": "I Want To Use Video Maker",
                            "rowId": ".videomaker"
                        }, {
                            "title": "Tanpa Kategori",
                            "description": "I Want To Use Tanpa Kategori",
                            "rowId": ".tanpakategori"
                        }, {
                            "title": "Games Menu",
                            "description": "I Want To Use Games Menu",
                            "rowId": ".gamemenu"
                        }
                    ]
                }
            ], "contextInfo": {
                "stanzaId": m.key.id,
                "participant": m.sender,
                "quotedMessage": m.message
            }
        }
    }, {}), { waitForAck: true })
handler.command = ['listmenu']
handler.register = true
module.exports = handler