"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const telegraf_1 = require("telegraf");
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
    try {
        ctx.reply('Дарова'),
            ctx.replyWithSticker('CAACAgIAAxkBAAEWEG9i0sefVMh31P1IO0OgKP30QkuhSwACZxUAAieN4UvuXKDTKQAB_HMpBA');
    }
    catch (e) {
        console.error(e);
    }
});
bot.help((ctx) => ctx.reply('Я покачто ничего крутого не умею, сорян. Можешь попробовать прислать стикер или сказать привет'));
//bot.on('sticker', (ctx) => ctx.reply('Ну крута че'))
bot.on('audio', (ctx) => ctx.replyWithSticker('CAACAgIAAxkBAAEWEK5i0s543M2hgbIbcV4hu90YQRkZaQACNBcAAkOaoEhNfT8fIoHPmCkE'));
bot.hears('привет', (ctx) => ctx.reply('Ну дарова че как'));
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
