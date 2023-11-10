const { Colors, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'bruch',
  description: 'Du brichst jemanden den Rücken',
  aliases: ['break'], // Aliase als Array hinzugefügt

  /**
   * @param {import('discord.js').Message} message
   */
  prefixRun: function (message) {
    const embed = new EmbedBuilder() // Verwendung von MessageEmbed statt EmbedBuilder
      .setTitle('Bruch')
      .setDescription(message.mentions.users.first() ? `Du brichst <@${message.mentions.users.first().id}> den Rücken` : 'Du brichst jemanden den Rücken')
      .setImage('https://media.tenor.com/nnCFwy-RjkAAAAAC/bane-dark-knight-rises.gif')
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};