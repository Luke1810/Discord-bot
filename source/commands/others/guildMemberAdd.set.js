module.exports = {
  name: 'welcome.set',
  description: 'Lege einen Willkommenskanal und die Nachricht fest',
  usage: 'channel Nachricht',
  userPermissions: ['ManageGuild'],
  botPermissions: ['ManageGuild'],

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Du hast den Channel nicht angegeben');

    const welcomeMessage = args.slice(1).join(' ');
    if (!welcomeMessage) return message.reply('Du hast die Nachricht nicht angegeben');

    console.log(channel, welcomeMessage);
    db.set(`Channel.${message.guild.id}`, channel);
    db.set(`Nachricht.${message.guild.id}`, welcomeMessage);
    message.reply(channel + ' ist jetzt der Welcome channel, mit der Nachricht: ' + welcomeMessage);
  }
};