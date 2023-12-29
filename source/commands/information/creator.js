const { EmbedBuilder } = require('discord.js');
const reply = require('../../utils/reply');

module.exports = {
  name: 'creator',
  description: 'zeigt dir meine Erschaffer',

  /**@param {import('discord.js').Message} message*/
  run: function (message) {
    const embed = new EmbedBuilder()
      .setDescription('<@774960022157393932>')
      .setColor('Random');

    return reply(message, { embeds: [embed] });
  }
};