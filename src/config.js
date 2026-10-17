require('dotenv').config();

module.exports = {
  isConfigured: () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const admins = process.env.ADMIN_IDS;
    return Boolean(token && admins && token.trim() !== '' && admins.trim() !== '');
  },

  getBotToken: () => {
    return process.env.TELEGRAM_BOT_TOKEN || '';
  },

  getAdmins: () => {
    const adminsStr = process.env.ADMIN_IDS || '';
    return adminsStr.split(',').map(id => id.trim()).filter(Boolean);
  },

  // Fungsi tambahan opsional jika masih ingin command add/remove admin lewat CLI
  addAdmin: (id) => {
    // Karena pakai .env, biasanya lebih enak diedit langsung di file .env-nya
    console.log('Silakan tambahkan ID ke file .env pada variabel ADMIN_IDS');
  },

  removeAdmin: (id) => {
    console.log('Silakan hapus ID dari file .env pada variabel ADMIN_IDS');
  }
};