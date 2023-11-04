const { EmbedBuilder, Colors } = require('discord.js');
const reply = require('../../utils/reply');
const uptime = require('../../utils/uptime');

module.exports = {
  name: 'uptime',
  description: 'Zeigt dir wie lange ich schon online bin',

  run: function (message) {
    const embed = new EmbedBuilder()
      .setDescription(`Ich bin online seit: ${uptime().formatted}`)
      .setColor(Colors.White);

    return reply(message, { embeds: [embed] });
  }
};
