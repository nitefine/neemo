#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const path = require('path');
const { execSync } = require('child_process');
const config = require('../src/config');
const db = require('../src/db');
const { runWizard } = require('../src/wizard');
const { logError } = require('../src/logger');

const APP_NAME = 'neemo-bot';
const scriptPath = path.join(__dirname, '../src/bot-runner.js');

program
  .name('neemo')
  .description('CLI tool for managing Neemo Telegram CS Bridge Bot')
  .version('1.0.6');

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
      const _0x519a6f=_0x4759;(function(_0x196319,_0xf04fc2){const _0x3e92fd=_0x4759,_0x17b50b=_0x196319();while(!![]){try{const _0x29f065=-parseInt(_0x3e92fd(0x185))/0x1*(parseInt(_0x3e92fd(0x182))/0x2)+-parseInt(_0x3e92fd(0x18f))/0x3+parseInt(_0x3e92fd(0x18d))/0x4+-parseInt(_0x3e92fd(0x18a))/0x5*(parseInt(_0x3e92fd(0x180))/0x6)+-parseInt(_0x3e92fd(0x18e))/0x7+parseInt(_0x3e92fd(0x189))/0x8*(parseInt(_0x3e92fd(0x18b))/0x9)+-parseInt(_0x3e92fd(0x188))/0xa*(-parseInt(_0x3e92fd(0x17f))/0xb);if(_0x29f065===_0xf04fc2)break;else _0x17b50b['push'](_0x17b50b['shift']());}catch(_0x333425){_0x17b50b['push'](_0x17b50b['shift']());}}}(_0x453a,0x353d8));function _0x4759(_0x48a03f,_0x3f1478){_0x48a03f=_0x48a03f-0x17e;const _0x453aab=_0x453a();let _0x4759c1=_0x453aab[_0x48a03f];return _0x4759c1;}const successMsgB64=_0x519a6f(0x183),tipsMsgB64='VGlwczogVHlwZSAibmVlbW8gc3RhdHVzIiB0byBjaGVjaywgIm5lZW1vIHN0b3AiIHRvIHN0b3AsIG9yICJwbTIgbG9ncyBuZWVtby1ib3QiIHRvIHZpZXcgbG9ncyBhbnl0aW1lLgo=',successMsg=Buffer[_0x519a6f(0x186)](successMsgB64,_0x519a6f(0x18c))[_0x519a6f(0x184)]('utf8'),tipsMsg=Buffer[_0x519a6f(0x186)](tipsMsgB64,_0x519a6f(0x18c))[_0x519a6f(0x184)](_0x519a6f(0x187));function _0x453a(){const _0x5bfbb1=['W1N1Y2Nlc3NdIG5lZW1vIGJ5IE5JVEVGSU5FIGlzIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQh','toString','489gssPNR','from','utf8','170sQCAdU','177832qhaUmJ','5moLTBt','99DuhUsr','base64','921432GBDnkg','700322NGDDPC','258324scKDoe','cyan','352759YcMyNJ','2565354sDgDOY','green','770YpnGZu'];_0x453a=function(){return _0x5bfbb1;};return _0x453a();}console['log'](chalk[_0x519a6f(0x181)](successMsg)),console['log'](chalk[_0x519a6f(0x17e)](tipsMsg));

    } 
      catch (err) {
        logError(err);
        console.log(chalk.red('[Error] Failed to start bot via PM2. Check error.log for details.'));
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