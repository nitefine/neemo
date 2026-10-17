#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const path = require('path');
const { execSync } = require('child_process');
const config = require('../src/config');
const db = require('../src/db');
const { runWizard } = require('../src/wizard');

const APP_NAME = 'neemo-bot';
const scriptPath = path.join(__dirname, '../src/bot-runner.js');

program
  .name('neemo')
  .description('CLI tool for managing Neemo Telegram CS Bridge Bot')
  .version('1.0.0');

program
  .command('start')
  .description('Start Neemo bot in the background with auto-reload (PM2)')
  .action(async () => {
    const _0x51ddbf=_0x3e63;function _0x2eb3(){const _0x2088de=['3235494BgluaP','37352799EAnDNm','7fhTWKS','toString','458IZEfNb','from','1002627ImONPp','base64','log','IF8gICBfIF9fX19fXyBfX19fX18gX18gIF9fICBfX19fICAKfCBcIHwgfCAgX19fX3wgIF9fX198ICBcLyAgfC8gX18gXCAKfCAgXHwgfCB8X18gIHwgfF9fICB8IFwgIC8gfCB8ICB8IHwKfCAuIGAgfCAgX198IHwgIF9ffCB8IHxcL3wgfCB8ICB8IHwKfCB8XCAgfCB8X19fX3wgfF9fX198IHwgIHwgfCB8X198IHwKfF98IFxffF9fX19fX3xfX19fX198X3wgIHxffFxfX19fLyA=','20opAaRH','4970408xLVFAs','utf8','129koDUeW','2772EJFDDz','2445XRKsDE','2923068gJqTdu'];_0x2eb3=function(){return _0x2088de;};return _0x2eb3();}(function(_0x3c18b2,_0x145257){const _0x347710=_0x3e63,_0x214bf0=_0x3c18b2();while(!![]){try{const _0x178d28=parseInt(_0x347710(0x1d0))/0x1*(-parseInt(_0x347710(0x1d8))/0x2)+-parseInt(_0x347710(0x1d3))/0x3+-parseInt(_0x347710(0x1d1))/0x4*(parseInt(_0x347710(0x1d2))/0x5)+-parseInt(_0x347710(0x1d4))/0x6+parseInt(_0x347710(0x1d6))/0x7*(-parseInt(_0x347710(0x1ce))/0x8)+-parseInt(_0x347710(0x1c9))/0x9*(parseInt(_0x347710(0x1cd))/0xa)+parseInt(_0x347710(0x1d5))/0xb;if(_0x178d28===_0x145257)break;else _0x214bf0['push'](_0x214bf0['shift']());}catch(_0x466b97){_0x214bf0['push'](_0x214bf0['shift']());}}}(_0x2eb3,0xa378b));const encodedBanner=_0x51ddbf(0x1cc),decodedBanner=Buffer[_0x51ddbf(0x1d9)](encodedBanner,_0x51ddbf(0x1ca))[_0x51ddbf(0x1d7)](_0x51ddbf(0x1cf));function _0x3e63(_0x5932c7,_0x453b8e){_0x5932c7=_0x5932c7-0x1c9;const _0x2eb3e4=_0x2eb3();let _0x3e631c=_0x2eb3e4[_0x5932c7];return _0x3e631c;}console[_0x51ddbf(0x1cb)](chalk['cyan'](decodedBanner));

    if (!config.isConfigured()) {
      await runWizard();
    }

    try {
      execSync(`pm2 start ${scriptPath} --name "${APP_NAME}" --watch`, { stdio: 'ignore' });
      function _0x51aa(){const _0x21a707=['W1N1Y2Nlc3NdTmVlbW8gdiAxLjAuMCBieSBDSUlJWElEIGlzIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQh','830410cdaFPA','utf8','621554iKBUgB','33dxgEpy','813070JnthLO','5mMyqKY','5288NyxnaW','toString','1633672XptVVE','cyan','2385mgQLIZ','log','base64','from','159216lzxoQN','3SwWIzR','VGlwczogVHlwZSAibmVlbW8gc3RhdHVzIiB0byBjaGVjaywgIm5lZW1vIHN0b3AiIHRvIHN0b3AsIG9yICJwbTIgbG9ncyBuZWVtby1ib3QiIHRvIHZpZXcgbG9ncyBhbnl0aW1lLgo=','1537878wOZfRb'];_0x51aa=function(){return _0x21a707;};return _0x51aa();}function _0x4993(_0x15ad9c,_0x8fe704){_0x15ad9c=_0x15ad9c-0x139;const _0x51aa75=_0x51aa();let _0x4993b2=_0x51aa75[_0x15ad9c];return _0x4993b2;}const _0x3d7c30=_0x4993;(function(_0x45beef,_0x3df00f){const _0x2c8b01=_0x4993,_0x41bbaf=_0x45beef();while(!![]){try{const _0x2a18be=parseInt(_0x2c8b01(0x14b))/0x1+parseInt(_0x2c8b01(0x13f))/0x2*(-parseInt(_0x2c8b01(0x139))/0x3)+-parseInt(_0x2c8b01(0x145))/0x4*(-parseInt(_0x2c8b01(0x142))/0x5)+-parseInt(_0x2c8b01(0x13b))/0x6+-parseInt(_0x2c8b01(0x13d))/0x7+parseInt(_0x2c8b01(0x143))/0x8*(parseInt(_0x2c8b01(0x147))/0x9)+parseInt(_0x2c8b01(0x141))/0xa*(parseInt(_0x2c8b01(0x140))/0xb);if(_0x2a18be===_0x3df00f)break;else _0x41bbaf['push'](_0x41bbaf['shift']());}catch(_0x46bd29){_0x41bbaf['push'](_0x41bbaf['shift']());}}}(_0x51aa,0x497c8));const successMsgB64=_0x3d7c30(0x13c),tipsMsgB64=_0x3d7c30(0x13a),successMsg=Buffer[_0x3d7c30(0x14a)](successMsgB64,'base64')[_0x3d7c30(0x144)]('utf8'),tipsMsg=Buffer[_0x3d7c30(0x14a)](tipsMsgB64,_0x3d7c30(0x149))[_0x3d7c30(0x144)](_0x3d7c30(0x13e));console[_0x3d7c30(0x148)](chalk['green'](successMsg)),console[_0x3d7c30(0x148)](chalk[_0x3d7c30(0x146)](tipsMsg));
    } catch (err) {
      console.log(chalk.red('[Error] Failed to start bot via PM2.'));
    }
  });

program
  .command('stop')
  .description('Stop the background Neemo bot')
  .action(() => {
    try {
      execSync(`pm2 stop ${APP_NAME} && pm2 delete ${APP_NAME}`, { stdio: 'inherit' });
      console.log(chalk.green('[Success] Neemo bot has been stopped.'));
    } catch (err) {
      console.log(chalk.yellow('[Notice] Neemo bot is not running or already stopped.'));
    }
  });

program
  .command('status')
  .description('Check if Neemo bot is running')
  .action(() => {
    try {
      execSync(`pm2 show ${APP_NAME}`, { stdio: 'inherit' });
    } catch (err) {
      console.log(chalk.gray('Neemo bot status: Stopped'));
    }
  });

program
  .command('add')
  .description('Add a new Telegram ID as admin/CS')
  .requiredOption('-u, --user <id>', 'Telegram numeric ID')
  .action((options) => {
    const success = config.addAdmin(options.user.trim());
    if (success) {
      console.log(chalk.green(`[Success] Telegram ID ${options.user} added as admin.`));
    } else {
      console.log(chalk.yellow(`[Notice] Telegram ID ${options.user} is already in the admin list.`));
    }
  });

program
  .command('remove')
  .description('Remove a Telegram ID from admin/CS list')
  .requiredOption('-u, --user <id>', 'Telegram numeric ID')
  .action((options) => {
    config.removeAdmin(options.user.trim());
    console.log(chalk.green(`[Success] Telegram ID ${options.user} removed from admins.`));
  });

program
  .command('admins')
  .description('Display list of all registered admin Telegram IDs')
  .action(() => {
    const admins = config.getAdmins();
    console.log(chalk.cyan('=== Registered Admins ==='));
    if (admins.length === 0) {
      console.log(chalk.gray('No admins found.'));
    } else {
      admins.forEach((id, index) => {
        console.log(`${index + 1}. ID: ${id}`);
      });
    }
  });

program
  .command('token')
  .description('Display current Telegram Bot Token')
  .action(() => {
    const token = config.getBotToken();
    if (!token) {
      console.log(chalk.yellow('No bot token configured yet.'));
    } else {
      console.log(chalk.cyan(`Current Bot Token: ${token}`));
    }
  });

program
  .command('clean')
  .description('Clean up old message mappings from database to free up space')
  .option('-d, --days <number>', 'Remove mappings older than X days', '1')
  .action((options) => {
    const days = parseInt(options.days, 10);
    db.cleanOldData(days);
    console.log(chalk.green(`[Success] Cleaned up old mapping records (older than ${days} days).`));
  });

program.parse(process.argv);