module.exports = {
  name: 'crash',
  description: 'Schalte den Bot ab, eigentlich nur Luki',
  aliases: ['kill'],

  /**@param {import('discord.js').Message} message*/
  prefixRun: async function (message) {
    await message.reply('Batbot geht jetzt schlafen... <:sleepyCat:1031563192142409748>');

    process.exit(0);
  }
};
