# 🤖 Neemo CLI

### **Professional Telegram CS Bridge Bot & Management CLI**

*A robust, lightning-fast, and secure CLI tool designed to manage your Telegram Customer Service (CS) Bridge Bot with bidirectional quoting, live auto-reloading daemon processes, and seamless environment configuration.*

---

## 📖 Table of Contents

* [✨ Features](https://www.google.com/search?q=%23-features)
* [📦 Prerequisites](https://www.google.com/search?q=%23-prerequisites)
* [🚀 Installation](https://www.google.com/search?q=%23-installation)
* [⚙️ Configuration & Setup Wizard](https://www.google.com/search?q=%23%EF%B8%8F-configuration--setup-wizard)
* [🕹️ CLI Command Reference](https://www.google.com/search?q=%23%EF%B8%8F-cli-command-reference)
* [🛠️ Development & Auto-Reload](https://www.google.com/search?q=%23%EF%B8%8F-development--auto-reload)
* [📄 License](https://www.google.com/search?q=%23-license)

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

---

## 🚀 Installation

Install Neemo globally straight from the npm registry:

```bash
npm install -g @ciiixid/neemo

```

Once installed globally, the `neemo` command will be available across your system:

```bash
neemo

```

---

## ⚙️ Configuration & Setup Wizard

Neemo utilizes a local `.env` configuration file for ultimate transparency and ease of access.

When you run Neemo for the first time without an existing configuration, an interactive **Setup Wizard** will automatically launch to prompt you for:

1. Your **Telegram Bot Token** (obtained from [@BotFather](https://t.me/BotFather))
2. Your **Admin/CS Telegram Numeric ID(s)** (comma-separated if multiple)

Alternatively, you can create a `.env` file manually in your working directory:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
ADMIN_IDS=admin_telegram_id_here

```

---

## 🕹️ CLI Command Reference

Once installed, you can control your CS Bridge Bot using the following commands:

 Command | Description | Example |
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

Neemo's `neemo start` command integrates **PM2 Watch Mode** under the hood. Any modifications made to the files inside the source directory will trigger an instant, seamless background restart.

To view live application logs and debugging output while the bot runs in the background, run:

```bash
pm2 logs neemo-bot

```

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).