const { Colors, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'order',
  description: 'Bestell was zu essen',
  aliases: ['bestellung'],

  /**@param {import('discord.js').Message} message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
    .setTitle('Bruch')
      .setDescription(`Du brichst ${message.mentions.users.first() || 'jemanden'} den Rücken`)
      .setImage('https://media.tenor.com/nnCFwy-RjkAAAAAC/bane-dark-knight-rises.gif')
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};