let fs = require('fs')
const moment = require('moment-timezone')
let d = new Date

let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let battery = ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89', '88', '87', '86', '85', '84', '83', '82', '81', '80', '79', '78', '77', '76', '75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65', '64', '63', '62', '61', '60', '59', '58', '57', '56', '55', '54', '53', '52', '51', '50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40', '39', '38', '37', '36', '35', '34', '33', '32', '31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let jams = moment.tz('Asia/Jakarta').format("HH:mm:ss");
let time = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})
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


let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {    
            "description": `I am Mysqlbot\n\nHalo kak 👋 ${conn.getName(m.sender)}\n${ucapan()}\n\nKetuk untuk memilih menu kak\n\n© Mysql`,
            "buttonText": "List Menu",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "title": `${jams} - ${week} ${weton} - ${date}`,
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

function ucapan() {
    const jam = moment.tz('Asia/Jakarta').format("HH");
    res = "Selamat dinihari"
    if (jam >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (jam > 10) {
        res = "Selamat siang ☀️"
    }
    if (jam >= 15) {
        res = "Selamat sore 🌅"
    }
    if (jam >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}