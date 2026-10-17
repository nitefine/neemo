const { Markup } = require('telegraf');
const db = require('../db');

/**
 * Handle incoming messages from regular users and forward them to admins with true quoting.
 * @param {import('telegraf').Context} ctx 
 * @param {string[]} adminIds 
 */
async function handleUserMessage(ctx, adminIds) {
  const msg = ctx.message;
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const username = msg.from.username;
  const firstName = msg.from.first_name || 'User';
  const replyToMessage = msg.reply_to_message;
  const messageText = msg.text || msg.caption || '';

  db.saveUserMessage(userId, msg.message_id, {
    chatId,
    messageId: msg.message_id
  });

  const finalCaption = (msg.caption ? msg.caption + '\n\n' : '') + `Chat ID: ${chatId}`;
  const profileButton = Markup.inlineKeyboard([
    [Markup.button.url('👤 Open Profile', `tg://user?id=${userId}`)]
  ]);

  for (const adminId of adminIds) {
    try {
      let options = {
        reply_markup: profileButton.reply_markup
      };

      // Check if user is replying to a previous bot message
      if (replyToMessage) {
        const quotedKey = `${userId}:${replyToMessage.message_id}`;
        const adminMsgIdRef = db.getAdminMsgIdByForward(userId, replyToMessage.message_id);
        if (adminMsgIdRef) {
          options.reply_to_message_id = adminMsgIdRef;
        }
      }

      let sent;
      if (msg.photo) {
        sent = await ctx.telegram.sendPhoto(
          adminId,
          msg.photo[msg.photo.length - 1].file_id,
          { caption: finalCaption, caption_entities: msg.caption_entities, ...options }
        );
      } else if (msg.video) {
        sent = await ctx.telegram.sendVideo(
          adminId,
          msg.video.file_id,
          { caption: finalCaption, caption_entities: msg.caption_entities, ...options }
        );
      } else if (msg.document) {
        sent = await ctx.telegram.sendDocument(
          adminId,
          msg.document.file_id,
          { caption: finalCaption, caption_entities: msg.caption_entities, ...options }
        );
      } else if (msg.audio) {
        sent = await ctx.telegram.sendAudio(
          adminId,
          msg.audio.file_id,
          { caption: finalCaption, caption_entities: msg.caption_entities, ...options }
        );
      } else if (msg.sticker) {
        sent = await ctx.telegram.sendSticker(adminId, msg.sticker.file_id, options);
      } else {
        const formattedText = `📩 : ${firstName}${username ? ` (@${username})` : `(${chatId})`}:\n\n${messageText}\n\nChat ID: ${chatId}`;
        sent = await ctx.telegram.sendMessage(adminId, formattedText, {
          entities: msg.entities,
          ...options
        });
      }

      db.setForwarded(userId, msg.message_id, sent.message_id);
    } catch (error) {
      console.error(`Failed to forward message to admin ${adminId}:`, error.message);
    }
  }
}

module.exports = { handleUserMessage };