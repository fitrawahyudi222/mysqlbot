function handler(m) {
  this.sendContact(m.chat, '6285669011805', this.getName('6285669011805@s.whatsapp.net'), m)
  conn.reply(m.chat, `Tuh Ownerku, Baik kan >_<`, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
