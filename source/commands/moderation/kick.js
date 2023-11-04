module.exports = {
  name: 'kick',
  description: 'Kicke einen user',
  usage: 'user [grund]', // Klammern zeigen an, dass der Grund optional ist
  userPermissions: ['KickMembers'],
  botPermissions: ['KickMembers'],

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const target = message.mentions.members.first();
    if (!target) return message.reply('Wen denn?');

    if (!target.moderatable) return message.reply('Das darf ich nicht.');

    let reason = args.slice(1).join(' '); // Grund wird jetzt als einziger Text erfasst, inklusive Leerzeichen

    await target.kick({ reason });

    if (reason) {
      return message.reply(`${target.user.username} wurde gekickt aufgrund von: ${reason}`);
    } else {
      return message.reply(`${target.user.username} wurde gekickt.`);
    }
  }
};