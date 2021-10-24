function handler(m) {
    this.sendContact(m.chat, '6283839326178', this.getName('6283839326178@s.whatsapp.net'), m)
    conn.reply(m.chat, `Tuh Gebetan Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m)
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
