const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

async function runWizard() {
  function _0x71f2(){const _0x3e56ac=['4795825smDcaY','base64','utf8','16519560BZKKMA','160236fOJufJ','toString','183205TiPRHL','from','38qyyBvS','24oLezwR','1411782UEEYZo','2847393PsGbEB','4wCpOXD','14UOHthz','55355lgIOjY','370CflbsR'];_0x71f2=function(){return _0x3e56ac;};return _0x71f2();}const _0x86fa09=_0x558e;(function(_0x5eb5ba,_0x565acd){const _0x2d8ac0=_0x558e,_0x381288=_0x5eb5ba();while(!![]){try{const _0x3dae2e=parseInt(_0x2d8ac0(0x1a7))/0x1*(-parseInt(_0x2d8ac0(0x1b1))/0x2)+parseInt(_0x2d8ac0(0x1ad))/0x3+parseInt(_0x2d8ac0(0x1a5))/0x4*(parseInt(_0x2d8ac0(0x1a9))/0x5)+-parseInt(_0x2d8ac0(0x1b3))/0x6*(-parseInt(_0x2d8ac0(0x1a6))/0x7)+-parseInt(_0x2d8ac0(0x1b2))/0x8*(-parseInt(_0x2d8ac0(0x1b4))/0x9)+-parseInt(_0x2d8ac0(0x1a8))/0xa*(-parseInt(_0x2d8ac0(0x1af))/0xb)+-parseInt(_0x2d8ac0(0x1ac))/0xc;if(_0x3dae2e===_0x565acd)break;else _0x381288['push'](_0x381288['shift']());}catch(_0x152cb5){_0x381288['push'](_0x381288['shift']());}}}(_0x71f2,0x97682));function _0x558e(_0x12445b,_0x6aac7e){_0x12445b=_0x12445b-0x1a5;const _0x71f212=_0x71f2();let _0x558ea2=_0x71f212[_0x12445b];return _0x558ea2;}const wizardTitleB64='PT09IE5lZW1vIFRlbGVncmFtIENTIEJvdCBTZXR1cCBXaXphcmQgPT09',decodedTitle=Buffer[_0x86fa09(0x1b0)](wizardTitleB64,_0x86fa09(0x1aa))[_0x86fa09(0x1ae)](_0x86fa09(0x1ab));
  console.log(chalk.cyan(decodedTitle));  console.log(chalk.gray('It looks like your bot is not configured yet. Let\'s set it up!\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'botToken',
      message: 'Enter your Telegram Bot Token (from @BotFather):',
      validate: (input) => input.trim() !== '' ? true : 'Token cannot be empty!'
    },
    {
      type: 'input',
      name: 'adminIds',
      message: 'Enter Admin/CS Telegram Numeric ID(s) (comma-separated if multiple):',
      validate: (input) => input.trim() !== '' ? true : 'At least one Admin ID is required!'
    }
  ]);

  // Format data ke dalam bentuk string .env
  const envContent = 
`TELEGRAM_BOT_TOKEN=${answers.botToken.trim()}
ADMIN_IDS=${answers.adminIds.trim()}
`;

  // Simpan ke file .env di root folder project
  const envPath = path.join(__dirname, '../.env');
  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log(chalk.green('\n[Success] Configuration saved successfully to .env file!\n'));
}

module.exports = { runWizard };