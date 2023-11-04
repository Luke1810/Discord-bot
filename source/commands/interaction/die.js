const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://media.tenor.com/Po55eXhYv4oAAAAd/die.gif',
  'https://media.tenor.com/7crdHrZL5dsAAAAd/po-dies.gif',
  'https://media.tenor.com/f5OyojGcVEkAAAAC/dies-cat.gif',
  'https://media.tenor.com/opeljGhYbrEAAAAC/dies-of.gif',
  'https://media.tenor.com/Zh2kcZZEMloAAAAd/dies-of-death-dies.gif',
];

module.exports = {
  name: 'die',
  description: 'stirb.',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Die')
      .setDescription('Du stirbst')
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};