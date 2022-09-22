let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Donasi • Dana 」
│ • Axis [6283813417529]
│ • Gopay  [-]
│ • Dana  [-]
│ • Qris  [-]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6289522724388
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/PANEL* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
