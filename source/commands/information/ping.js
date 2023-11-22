const { EmbedBuilder } = require('discord.js');
const reply = require('../../utils/reply');

module.exports = {
  name: 'ping',
  description: 'Zeigt den Ping',

  /**@param {import('discord.js').Message}message @param {string[]}args*/
  prefixRun: async function (message) {

    const sentMessage = await message.channel.send('Pinging...');
    const messagePing = sentMessage.createdTimestamp - message.createdTimestamp;

    const botPing = Math.max(Math.round(message.client.ws.ping), 0);

    const apiPingStart = Date.now();
    await fetch('https://discord.com/api/v10/gateway');
    const apiPingEnd = Date.now();
    const apiPing = apiPingEnd - apiPingStart;

    const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Ping')
      .addFields(
        { name: 'API', value: `${apiPing}ms`, inline: true },
        { name: 'Bot', value: `${botPing}ms`, inline: true },
        { name: 'Nachricht senden', value: `${messagePing}ms`, inline: true },

      );
    await sentMessage.delete();

    return reply(message, { embeds: [embed] });
  },
};