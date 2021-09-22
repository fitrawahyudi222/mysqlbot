let handler = async (m, { conn }) =>
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
            "title": "Pesan sementara",
            "description": "©Ephemeral",
            "buttonText": "Silahkan pilih Option di bawah",
            "listType": "SINGLE_SELECT",
            "sections": [
                {
                    "rows": [
                        {
                            "title": "Ephemeral on",
                            "description": "Mengaktifkan pesan sementara",
                            "rowId": ".ephe on"
                        }, {
                            "title": "Ephemeral off",
                            "description": "Mematikan pesan sementara",
                            "rowId": ".ephe off"
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

handler.command = ['ephemeralmenu']
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