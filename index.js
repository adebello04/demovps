const Telegraf = require('telegraf')
const bot = new Telegraf()

bot.telegram.deleteWebhook().then(success => {
  success && console.log('🤖 is listening to your commands')
  bot.startPolling()
})

bot.hears(['/start', '⬅️ Back'], (ctx) => {
  ctx.reply('hello world')
}