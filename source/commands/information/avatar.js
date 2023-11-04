const { EmbedBuilder, Colors } = require('discord.js');
const { getAverageColor } = require('fast-average-color-node');

module.exports = {
  name: 'avatar',
  description: 'Zeige den Avatar eines users an',

/**
 * @param {import('discord.js').Message} message
 */
prefixRun: async function (message) {
  const user = message.mentions.users.first() ?message.mentions.users.first() : message.author;
  const member = message.guild.members.cache.get(user.id);
  const avatarURL = await user.displayAvatarURL({ size: this.options?.getInteger('size') || 2048 })
    
  const embed = new EmbedBuilder()
    .setTitle((member ? member.nickname || user.username : user.username) + '`s' + ' avatar')
    .setImage(avatarURL)
    .setColor(parseInt((await getAverageColor(member.displayAvatarURL())).hex.substring(1), 16))

  return message.reply({ embeds: [embed] });
}};