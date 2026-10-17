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
      function _0x37cb(_0x940846,_0x6945ad){_0x940846=_0x940846-0xd2;const _0x33d094=_0x33d0();let _0x37cb01=_0x33d094[_0x940846];return _0x37cb01;}const _0x30cfec=_0x37cb;(function(_0x234237,_0x261ea0){const _0x56dc64=_0x37cb,_0x5932d2=_0x234237();while(!![]){try{const _0x36564d=parseInt(_0x56dc64(0xe2))/0x1+parseInt(_0x56dc64(0xe0))/0x2+-parseInt(_0x56dc64(0xdb))/0x3+parseInt(_0x56dc64(0xe3))/0x4*(parseInt(_0x56dc64(0xd8))/0x5)+-parseInt(_0x56dc64(0xd4))/0x6*(parseInt(_0x56dc64(0xd2))/0x7)+parseInt(_0x56dc64(0xdf))/0x8+-parseInt(_0x56dc64(0xdc))/0x9;if(_0x36564d===_0x261ea0)break;else _0x5932d2['push'](_0x5932d2['shift']());}catch(_0x24084a){_0x5932d2['push'](_0x5932d2['shift']());}}}(_0x33d0,0xc2acc));function _0x33d0(){const _0x465385=['VGlwczogVHlwZSAibmVlbW8gc3RhdHVzIiB0byBjaGVjaywgIm5lZW1vIHN0b3AiIHRvIHN0b3AsIG9yICJwbTIgbG9ncyBuZWVtby1ib3QiIHRvIHZpZXcgbG9ncyBhbnl0aW1lLgo=','993426wRteHa','utf8','log','from','730FeuxuI','cyan','W1N1Y2Nlc3NdIG5lZW1vIGJ5IENJSUlYSUQgaXMgcnVubmluZyBpbiB0aGUgYmFja2dyb3VuZCE=','3651054hLyBHW','11271555sJfUyz','toString','green','10043616WTUldN','2535468IilOxP','base64','1397306FLREDu','13844fdssxM','49BMQbzl'];_0x33d0=function(){return _0x465385;};return _0x33d0();}const successMsgB64=_0x30cfec(0xda),tipsMsgB64=_0x30cfec(0xd3),successMsg=Buffer[_0x30cfec(0xd7)](successMsgB64,'base64')['toString']('utf8'),tipsMsg=Buffer[_0x30cfec(0xd7)](tipsMsgB64,_0x30cfec(0xe1))[_0x30cfec(0xdd)](_0x30cfec(0xd5));console['log'](chalk[_0x30cfec(0xde)](successMsg)),console[_0x30cfec(0xd6)](chalk[_0x30cfec(0xd9)](tipsMsg));
    } 
      catch (err) {
        logError(err); // Simpan detail error ke error.log di root folder
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