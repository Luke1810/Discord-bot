module.exports = {
  name: 'ban',
  description: 'Ban einen user',
  usage: 'user [grund]',
  userPermissions: ['BanMembers'],
  botPermissions: ['BanMembers'],

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const target = message.mentions.members.first();
    if (!target) return message.reply('Wen denn?');

    if (!target.moderatable) return message.reply('Das darf ich nicht.');

    const reason = args.slice(1).join(' ');

    await target.ban({ reason });

    return message.reply(`${target.user.username} wurde gebannt` + (reason ? `aufgrund von: ${reason}` : '.'));
  }
};