const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP',   // ضع هنا IP السيرفر
  port: 25565,              // ضع هنا البورت
  username: 'BotName'       // اسم البوت داخل السيرفر
});

bot.on('spawn', () => {
  console.log('Bot connected to the server!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`${username}: ${message}`);
});

bot.on('error', (err) => console.log(err));
bot.on('end', () => console.log('Bot disconnected.'));
