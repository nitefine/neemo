const { Telegraf } = require('telegraf');
const config = require('./config');
const { handleUserMessage } = require('./handlers/userHandler');
const { handleAdminMessage } = require('./handlers/adminHandler');

/**
 * Initialize and start the Telegram bot service.
 */
function startBot() {
  const token = config.getBotToken();
  const admins = config.getAdmins();

  if (!token || admins.length === 0) {
    console.error('Error: Bot is not configured yet! Please run "neemo" to setup.');
    process.exit(1);
  }

  const bot = new Telegraf(token);

  // Middleware or listener for incoming messages
  bot.on('message', async (ctx) => {
    try {
      const senderId = String(ctx.from.id);
      const currentAdmins = config.getAdmins();

      if (currentAdmins.includes(senderId)) {
        await handleAdminMessage(ctx, currentAdmins);
      } else {
        await handleUserMessage(ctx, currentAdmins);
      }
    } catch (error) {
      console.error('Error processing incoming message:', error.message);
    }
  });

  bot.launch()
    .then(() => {
      console.log('🤖 Neemo Telegram CS Bot is running successfully!');
    })
    .catch((err) => {
      console.error('Failed to start bot:', err.message);
    });

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

module.exports = { startBot };