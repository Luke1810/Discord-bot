const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  name: 'nsfw',
  description: 'nsfw halt, ist offensichtlich was es ist oder?',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('nsfw')
      .setDescription('Du alter Schlingel du, sowas gibts bei mir nicht')
      .setImage('https://media.discordapp.net/attachments/826095943748943913/826095979614044180/bonk.gif')
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};