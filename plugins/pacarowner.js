function handler(m) {
    this.sendContact(m.chat, '6281260315127', this.getName('6281260315127@s.whatsapp.net'), m)
    conn.reply(m.chat, `Tuh Gebetan Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m)
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
