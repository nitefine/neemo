<div align="center">

# 🤖 Neemo CLI
### **Professional Telegram CS Bridge Bot & Management CLI**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PM2](https://img.shields.io/badge/pm2-daemon-blue.svg)](https://pm2.keymetrics.io/)

*A robust, lightning-fast, and secure CLI tool designed to manage your Telegram Customer Service (CS) Bridge Bot with bidirectional quoting, live auto-reloading daemon processes, and seamless environment configuration.*

</div>

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [📦 Prerequisites](#-prerequisites)
- [🚀 Installation](#-installation)
- [⚙️ Configuration & Setup Wizard](#️-configuration--setup-wizard)
- [🕹️ CLI Command Reference](#️-cli-command-reference)
- [🛠️ Development & Auto-Reload](#️-development--auto-reload)
- [📄 License](#-license)

---

## ✨ Features

* **True Bidirectional Quoting**: Maps user-to-admin and admin-to-user replies accurately, including multi-media support (photos, documents, stickers).
* **Background Daemon (PM2 Integration)**: Run your bot continuously in the background using PM2 so your terminal remains free for other tasks.
* **Live Auto-Reloading**: Automatically detects source code changes (`src/`) and hot-reloads the bot process without missing a beat.
* **Interactive Setup Wizard**: Automatically guides new users through setting up their Bot Token and Admin IDs into a clean `.env` file.
* **Database Cleanup**: Built-in maintenance command to offload or clean old message mapping records and free up storage space.

---

## 📦 Prerequisites

Before installing and running Neemo, make sure your environment meets the following requirements:
* **Node.js** (version 18.x or higher recommended)
* **npm** (comes bundled with Node.js)
* **PM2** (globally installed for background daemon management)

```bash
npm install -g pm2
```

---

## 🚀 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/ciiixid/neemo.git
   cd neemo
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Link the CLI globally so you can use the `neemo` command anywhere on your system:
   ```bash
   npm link
   ```

---

## ⚙️ Configuration & Setup Wizard

Neemo utilizes a local `.env` configuration file for ultimate transparency and ease of access. 

When you run Neemo for the first time without an existing configuration, an interactive **Setup Wizard** will automatically launch to prompt you for:
1. Your **Telegram Bot Token** (obtained from [@BotFather](https://t.me/BotFather))
2. Your **Admin/CS Telegram Numeric ID(s)** (comma-separated if multiple)

Alternatively, you can create a `.env` file manually in the root directory:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
ADMIN_IDS=admin_telegram_id_here
```

---

## 🕹️ CLI Command Reference

Once linked globally, you can control your CS Bridge Bot using the following commands:

| Command | Description | Example |
| :--- | :--- | :--- |
| `neemo start` | Starts the bot in the background via PM2 with live auto-reload & ASCII banner. | `neemo start` |
| `neemo stop` | Stops and terminates the background Neemo bot process. | `neemo stop` |
| `neemo status` | Checks the live running status and process information of the bot. | `neemo status` |
| `neemo add` | Adds a new Telegram ID to the admin/CS authorization list. | `neemo add -u 123456789` |
| `neemo remove` | Removes a Telegram ID from the admin/CS list. | `neemo remove -u 123456789` |
| `neemo admins` | Displays a list of all currently registered admin Telegram IDs. | `neemo admins` |
| `neemo token` | Displays the currently configured Telegram Bot Token. | `neemo token` |
| `neemo clean` | Cleans up old message mapping database records older than X days. | `neemo clean -d 3` |

---

## 🛠️ Development & Auto-Reload

Neemo's `neemo start` command integrates **PM2 Watch Mode** under the hood. Any modifications made to the files inside the `src/` directory will trigger an instant, seamless background restart.

To view live application logs and debugging output while the bot runs in the background, run:
```bash
pm2 logs neemo-bot
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <br>
  <p>Developed with ❤️ by <b>CIIIXID</b></p>
</div>