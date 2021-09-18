let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Kak fitra, Ada Yang Manggil😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@MYSQL/i
handler.command = new RegExp

module.exports = handler