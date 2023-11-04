const { ActivityType } = require('discord.js');

function sendOnlineMessage() {
  const channel = client.channels.cache.get(channelId);
  if (channel) return channel.send('Ich bin Online');
  console.error('Channel zum online online Bescheid sagen nicht gefunden.');
}

const channelId = '747985947316060271';
const intervalMs = 12 * 60 * 60 * 1000;  // 12h

/**@param {import('discord.js').Client}client*/
module.exports = function ready(client) {
  console.log(`✅ ${client.user.username} is online.`);

  let status = [
    { name: 'Pokemon r34', type: ActivityType.Watching }]

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
}