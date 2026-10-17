const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../error.log');

function logError(err) {
  const timestamp = new Date().toISOString();
  const errorMessage = `[${timestamp}] ${err.stack || err}\n-----------------------------------\n`;
  
  fs.appendFile(logFilePath, errorMessage, (writeErr) => {
    if (writeErr) {
      console.error('Failed to write to error.log:', writeErr);
    }
  });
}

module.exports = { logError };