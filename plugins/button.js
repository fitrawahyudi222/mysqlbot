let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {
            "title": "HALO KAK\n\nSaya adalah Suatu program yang di ciptakan menggunakan bahasa Javascript yg di beri nama Mysql\n\nPilih Opsi Di Bawah Yaa,Untuk menikmati berbagai fitur MYSQL Bot\n\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\nIG:https://bit.ly/3l4hKeM\n",
            "description": "WA : https://bit.ly/3zf9EUL\n\nDaftar Menu Mysql Bot WhatsApp\n\n© Mysql",
            "buttonText": "Klik Disini",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "rows": [
                        {
                            "title": `Semua Perintah`,
                            "description": "Menampilkan semua Fitur",
                            "rowId": ".allmenu"
                        }, {
                            "title": "Game",
                            "description": "Menampilkan menu Game",
                            "rowId": ".gamesmenu"                       
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
handler.command = ['menu']
handler.register = true
module.exports = handler