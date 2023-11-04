const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  name: 'bruch',
  description: 'Du brichst jemanden den Rücken',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Bruch')
      .setDescription(message.mentions.users.first() ? `Du brichst <@${message.mentions.users.first().id}> den Rücken` : 'Du brichst jemanden den Rücken')
      .setImage('https://media.tenor.com/nnCFwy-RjkAAAAAC/bane-dark-knight-rises.gif')
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};