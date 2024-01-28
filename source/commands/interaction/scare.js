const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://c.tenor.com/ve-ElIbSMqIAAAAC/tenor.gif'

];

module.exports = {
  name: 'scare',
  description: 'Erschrecke deine Freunde >:)',
  aliases: ['erschrecken'],

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Scare')
      .setDescription(`Du erschreckst ${message.mentions.users.first() || 'jemanden'}`)
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};