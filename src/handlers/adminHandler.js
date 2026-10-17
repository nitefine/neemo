const db = require('../db');

/**
 * Handle admin replies to users with support for multi-media and true quoting.
 * @param {import('telegraf').Context} ctx 
 * @param {string[]} adminIds 
 */
async function handleAdminMessage(ctx, adminIds) {
  const msg = ctx.message;
  const adminChatId = String(msg.chat.id);
  const replyToMessage = msg.reply_to_message;

  if (!adminIds.includes(adminChatId)) {
    return;
  }

  if (!replyToMessage) {
    return;
  }

  const fwdMap = db.get('forwardedMessages');
  const matchedEntry = Object.entries(fwdMap).find(
    ([_, adminMsgId]) => adminMsgId === replyToMessage.message_id
  );

  if (!matchedEntry) {
    await ctx.reply('⚠️ Target user mapping not found or expired.');
    return;
  }

  const [key] = matchedEntry;
  const [targetUserId, userMsgId] = key.split(':');
  const userData = db.getUserMessage(targetUserId, userMsgId);

  if (!userData) {
    await ctx.reply('⚠️ Original user message data not found.');
    return;
  }

  let sentToUser;
  try {
    if (msg.text) {
      sentToUser = await ctx.telegram.sendMessage(userData.chatId, msg.text, {
        entities: msg.entities,
        reply_to_message_id: userData.messageId
      });
    } else if (msg.photo) {
      sentToUser = await ctx.telegram.sendPhoto(
        userData.chatId,
        msg.photo[msg.photo.length - 1].file_id,
        {
          caption: msg.caption || '',
          caption_entities: msg.caption_entities,
          reply_to_message_id: userData.messageId
        }
      );
    } else if (msg.video) {
      sentToUser = await ctx.telegram.sendVideo(
        userData.chatId,
        msg.video.file_id,
        {
          caption: msg.caption || '',
          caption_entities: msg.caption_entities,
          reply_to_message_id: userData.messageId
        }
      );
    } else if (msg.document) {
      sentToUser = await ctx.telegram.sendDocument(
        userData.chatId,
        msg.document.file_id,
        {
          caption: msg.caption || '',
          caption_entities: msg.caption_entities,
          reply_to_message_id: userData.messageId
        }
      );
    } else if (msg.audio) {
      sentToUser = await ctx.telegram.sendAudio(
        userData.chatId,
        msg.audio.file_id,
        {
          caption: msg.caption || '',
          caption_entities: msg.caption_entities,
          reply_to_message_id: userData.messageId
        }
      );
    }

    if (sentToUser) {
      db.setAdminReply(adminChatId, msg.message_id, userData.chatId, sentToUser.message_id);
    }

    await ctx.reply('✅ Response sent successfully!');
    await ctx.react('👍').catch(() => {});
  } catch (err) {
    console.error('Failed to send admin response:', err.message);
    await ctx.reply('❌ Failed to send message to user.');
  }
}

module.exports = { handleAdminMessage };