const { EmbedBuilder, Colors } = require('discord.js');
const { Permissions } = require('discord.js');
const reply = require('../../utils/reply');

module.exports = {
    name: 'ping',
    description: 'Zeigt den Ping',
  
    /**@param {import('discord.js').Message}message @param {string[]}args*/
    prefixRun: async function (message, args) {
      // Messen Sie den Nachrichten-Sendeprozess-Ping
      const sentMessage = await message.channel.send('Pinging...');
      const messagePing = sentMessage.createdTimestamp - message.createdTimestamp;
  
      // Messen Sie den Bot-Ping
      const botPing = Math.max(Math.round(message.client.ws.ping), 0); // Stellen Sie sicher, dass der Bot-Ping nicht negativ ist
  
      // Messen Sie den API-Ping
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
      await sentMessage.delete(); // Löschen Sie die Ping-Nachricht
  
      return reply(message, { embeds: [embed] });
    },
  };