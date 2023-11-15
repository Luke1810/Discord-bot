const { EmbedBuilder } = require('discord.js');
const { getAverageColor } = require('fast-average-color-node');

module.exports = {
  name: 'userinfo',
  description: 'Erfahre etwas über einen User',

  /**@param {import('discord.js').Message} message */
  prefixRun: async function (message) {
    const target = message.mentions.members?.first() || message.mentions.users?.first() || message.member || message.author;

    const embed = new EmbedBuilder()
      .setTitle((target.user || target).username + '`s' + ' infos')
      .setColor(parseInt((await getAverageColor(target.displayAvatarURL())).hex.substring(1), 16))
      .setThumbnail(target.displayAvatarURL())
      .addFields(
        {
          name: 'Server-Nickname',
          value: target.nickname || 'Kein Nickname'
        },
        {
          name: 'ID',
          value: target.id
        },
        {
          name: 'Erstellt am',
          value: (target.user || target).createdAt.toLocaleDateString('de', { day: '2-digit', month: '2-digit', year: 'numeric' })
        },
        {
          name: 'Beigetreten am',
          value: target.joinedAt?.toLocaleDateString('de', { day: '2-digit', month: '2-digit', year: 'numeric' }) || 'Nicht auf diesem Server'
        },
        {
          name: 'Rollen',
          value: `${target.roles?.cache.size - 1 || 0}`
        },
        {
          name: 'Rollen mit perms',
          value: target.roles ? Array.from(target.roles.cache.values()).filter(e => e.permissions.toArray().length && e.name != '@everyone').join(', ') : 'Keine', inline: false
        },
      );

    return message.reply({ embeds: [embed] });
  }
};