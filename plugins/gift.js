let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Giftmu!`, m)
    if (args[0] == 'fwd201104' || args[0] == 'AseLole' || args[0] == 'JHjjsnnhUiwk' || args[0] == 'ABCLIMADASARNEGARA') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n50000 XP!\n\nPajak -100 limit', m)
        global.db.data.users[m.sender].exp += 50000
    } else {
        conn.reply(m.chat, `*KODE GIFT TIDAK VALID!*\n\nSilahkan Hubungi Owner Untuk Beli Kode Gift Yang Valid Dengan Cara Ketik ${usedPrefix}buygift Atau Dapatkan Kode Gift Secara Gratis Dengan Cara mendaftar!`, m)
    }
}
handler.help = ['gift <kode>']
handler.tags = ['hadiah']
handler.command = /^(gift)$/i

handler.limit = 100

module.exports = handler
