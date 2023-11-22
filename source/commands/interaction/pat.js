const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://media.tenor.com/GU0IIlOZUQ0AAAAC/pat-pat.gif',
  'https://media.tenor.com/9PAkJvbE6R0AAAAC/pat-cat.gif',
  'https://media.tenor.com/0Qg_yeRi0WUAAAAd/cat-ping.gif',
  'https://media.tenor.com/_PB6BjWgyL8AAAAd/herm%C3%A8s-chat.gif',

];

module.exports = {
  name: 'pat',
  description: 'Patte deine friends :3',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Pat')
      .setDescription(`Du streichelst ${message.mentions.users.first() || 'jemanden'}`)
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};