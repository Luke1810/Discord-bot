const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://cdn.discordapp.com/attachments/1163488388834402304/1163488606845927525/pat.gif?ex=653fc234&is=652d4d34&hm=01a88eff3c09ad26d249790c622f8cc9d916babc79090c5c130392f90eace618&',
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
      .setDescription(message.mentions.users.first() ? `Du streichelst <@${message.mentions.users.first().id}>` : 'Du streichelst jemanden')
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};