// Credits to https://github.com/Mephisto5558/Teufelsbot/blob/main/Commands/Owner-Only/eval.js
const
  vars = ['__dirname', '__filename', 'exports', 'module', 'require'],
  BoundAsyncFunction = (async function () { }).constructor.bind(null, ...vars),
  BoundFunction = Function.bind(null, ...vars);

module.exports = {
  name: 'eval',
  description: 'Führe JavaScript Code mit dem Bot aus',

  /**@param {import('discord.js').Message}message @param {string[]}args*/
  prefixRun: async function (message, args) {
    content = args.join(' ');
    if (!content) return;

    try {
      await (content.includes('await') ? new BoundAsyncFunction(content) : new BoundFunction(content)).call(message, __dirname, __filename, exports, module, require);
      await message.reply('Code:\n```js\n' + content + '\n```\nwurde fehlerlos ausgeführt.');
    }
    catch (err) {
      message.reply('Code:\n```js\n' + content + '\n```\nwurde mit dem folgenden Fehler ausgeführt:\n```\n' + `${err.name}: ${err.message}\n` + '```');
    }

    return console.debug(`evaluated command '${content}'`);
  }
};
