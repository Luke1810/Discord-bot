const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://media.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif',
  'https://media.tenor.com/RN7jCU8o7eAAAAAC/laverne-and.gif',
  'https://media.tenor.com/DRgXad_JuuQAAAAC/bobitos-mimis.gif',
  'https://media.tenor.com/G_IvONY8EFgAAAAC/aharen-san-anime-hug.gif',
  'https://media.tenor.com/wFxMAqCsQDoAAAAd/cats.gif',
  'https://meia.tenor.com/kCZjTqCKiggAAAAC/hug.gif',
];

module.exports = {
  name: 'hug',
  description: 'Hugge deine friends :3',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Hug')
      .setDescription(message.mentions.users.first() ? `Du umarmst <@${message.mentions.users.first().id}>` : 'Du umarmst jemanden')
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};