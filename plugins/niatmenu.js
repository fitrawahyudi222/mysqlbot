let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
            "title": "Bismillah semoga istiqomah",
            "description": "Niat sholat wajib",
            "buttonText": "Pilih Disini",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "rows": [
                        {
                            "title": `SUBUH`,
                            "description": "Menampilkan Niat Sholat Subuh",
                            "rowId": ".niatshalat subuh"
                        }, {
                            "title": `DZUHUR`,
                            "description": "Menampilkan Niat Sholat Dzuhur",
                            "rowId": ".niatshalat dzuhur"
                        }, {
                            "title": `ASHAR`,
                            "description": "Menampilkan Niat Sholat Ashar",
                            "rowId": ".niatshalat ashar"
                        }, {
                            "title": `MAGHRIB`,
                            "description": "Menampilkan Niat Sholat Maghrib",
                            "rowId": ".niatshalat maghrib"
                        }, {
                            "title": `ISYA`,
                            "description": "Menampilkan Niat Sholat Isya",
                            "rowId": ".niatshalat isya"
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

handler.command = /^(niatmenu)$/i
module.exports = handler