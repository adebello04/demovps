const Telegraf = require('telegraf')
const bot = new Telegraf('1408289458:AAGKFTS5H4YjLF4Z1SSH0wFN-lM1FOMcOvM')

bot.telegram.deleteWebhook().then(success => {
  success && console.log('🤖 is listening to your commands')
  bot.startPolling()
})

bot.hears(['/start', '⬅️ Back'], (ctx) => {
  ctx.reply('hello world')
}
