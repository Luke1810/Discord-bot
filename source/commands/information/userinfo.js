const { EmbedBuilder, Colors } = require('discord.js');
const { getAverageColor } = require('fast-average-color-node');

module.exports = {
  name: 'userinfo',
  description: 'Erfahre etwas über einen User',

/**
 * @param {import('discord.js').Message} message
 */
prefixRun: async function (message) {
  // Verwenden Sie die erwähnte Person, wenn sie angegeben wurde, andernfalls den Autor der Nachricht
  const user = message.mentions.users.first() ?message.mentions.users.first() : message.author;
  const member = message.guild.members.cache.get(user.id);
  

  const embed = new EmbedBuilder()
    .setTitle(user.username + '`s' + ' infos')
    .setColor(parseInt((await getAverageColor(member.displayAvatarURL())).hex.substring(1), 16))
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      {
        name: 'Server-Nickname',
        value: member ? member.nickname || 'Kein Nickname' : 'Nicht auf diesem Server',
      },
      {
        name: 'ID',
        value: user.id,
      },
      {
        name: 'Erstellt am',
        value: user.createdAt.toLocaleDateString(),
      },
      {
        name: 'Beigetreten am',
        value: member
        ? member.joinedAt.toLocaleDateString()
        : 'Nicht auf diesem Server',
      },
      {
        name: 'Rollen',
        value: `${member.roles.cache.size - 1} `,
      },
      {
        name: 'Rollen mit perms',
        value: Array.from(member.roles.cache.values()).filter(e => e.permissions.toArray().length && e.name != '@everyone').join(', '), inline: false, 
      },
      

    );

  return message.reply({ embeds: [embed] });
}};