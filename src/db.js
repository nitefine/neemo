const Conf = require('conf');

const db = new Conf({
  projectName: 'neemo-db',
  defaults: {
    userMessages: {},     // { [userId]: { [messageId]: { chatId, messageId } } }
    forwardedMessages: {}, // { [`${userId}:${userMessageId}`]: adminMessageId }
    adminReplyMap: {}     // { [`${adminChatId}:${adminMessageId}`]: { userChatId, userMessageId } }
  }
});

module.exports = {
  // Generic get method to access raw store keys if needed
  get: (key) => db.get(key),

  // User messages storage
  saveUserMessage: (userId, msgId, data) => {
    const userMessages = db.get('userMessages');
    if (!userMessages[userId]) userMessages[userId] = {};
    userMessages[userId][msgId] = data;
    db.set('userMessages', userMessages);
  },

  getUserMessage: (userId, msgId) => {
    const userMessages = db.get('userMessages');
    return userMessages[userId]?.[msgId] || null;
  },

  // Forwarded message mapping (User -> Admin reply chain)
  setForwarded: (userId, userMsgId, adminMsgId) => {
    const fwd = db.get('forwardedMessages');
    fwd[`${userId}:${userMsgId}`] = adminMsgId;
    db.set('forwardedMessages', fwd);
  },

  getAdminMsgIdByForward: (userId, userMsgId) => {
    const fwd = db.get('forwardedMessages');
    return fwd[`${userId}:${userMsgId}`] || null;
  },

  // Admin reply mapping (Admin -> User response tracking & editing)
  setAdminReply: (adminChatId, adminMsgId, userChatId, userMessageId) => {
    const map = db.get('adminReplyMap');
    map[`${adminChatId}:${adminMsgId}`] = {
      userChatId,
      userMessageId,
      createdAt: Date.now()
    };
    db.set('adminReplyMap', map);
  },

  getAdminReply: (adminChatId, adminMsgId) => {
    const map = db.get('adminReplyMap');
    return map[`${adminChatId}:${adminMsgId}`] || null;
  },

  cleanOldData: (daysOld = 1) => {
    const map = db.get('adminReplyMap');
    const now = Date.now();
    const limitMs = daysOld * 24 * 60 * 60 * 1000;
    
    let newMap = {};
    for (const [key, val] of Object.entries(map)) {
      if (now - val.createdAt < limitMs) {
        newMap[key] = val;
      }
    }
    db.set('adminReplyMap', newMap);
  }
};