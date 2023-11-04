module.exports = {
  name: 'unban',
  description: 'entbant einen user',
  usage: 'userId',
  userPermissions: ['BanMembers'],
  botPermissions: ['BanMembers'],

  /**@param {import('discord.js').Message}message @param {string[]}args*/
  prefixRun: async function (message, args) {
    const target = args[0];
    if (!target) return message.reply('Wen denn?');

    try { await message.guild.bans.remove(target); }
    catch (error) {
      console.error(error);
      return message.reply('Fehler');
    }

    message.reply(`${target} wurde entbannt.`);
  }
};