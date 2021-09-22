let fs = require('fs')
let handler = async (m, { conn, usedPrefix: _p }) => m.reply(`
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED + DENDA 5K :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃
┃> Note : Jika Tidak Membayar Denda
┃> Maka Bot Akan Banned User Permanen
┃
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ *DENDA* ❭❀°━━┓
┣➥ *IM3:* [0856-6901-1805]
┣➥ *DANA:* [0856-6901-1805]
┗━━━━━━━━━━━━━━━━
`.trim() )
// let res = fs.readFileSync('./audio/botchat.mp3')
//   await conn.sendFile(m.chat, res, 'eror.mp3', '', m, 1, { mimetype: 'audio/mp4' }) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['jj'] 
handler.command = /^(rules)$/i

module.exports = handler