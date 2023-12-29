module.exports = {
  name: 'crash',
  description: 'Schalte den Bot ab, eigentlich nur Luki',
  aliases: ['kill'],

  /**@param {import('discord.js').Message} message*/
  prefixRun: async function (message) {
    await message.reply('Batbot geht jetzt schlafen... <:sleepycat:>');

    process.exit(0);
  }
};
