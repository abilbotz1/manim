let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'ʜᴀʟᴏ, sᴀʏᴀ ᴋʜᴜʀᴜsʜɪ-ʙᴏᴛᴢ, Saya diciptakan Oleh Seseorang Manusia yang bernama ʀɪᴇʟXᴅ, Tujuan bot ini dibuat adalah sekedar hiburan dan menambah pengetahuan 😇\n\nɴᴏᴛᴇ: ʜᴀʀᴀᴘ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ꜱᴇᴄᴀʀᴀ ʙɪᴊᴀᴋ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴅɪꜱᴘᴀᴍ', data.namabot, '❒ ʟɪsᴛᴍᴇɴᴜ', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Jangan Dispam Ya Kak | (• ◡•)|',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


