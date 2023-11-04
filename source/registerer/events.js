const { readdir } = require('fs/promises');

/**@param {import('discord.js').Client}client*/
module.exports = async function eventRegisterer(client) {
  let eventCount = 0;

  for (const file of await readdir('./source/events')) {
    if (!file.endsWith('js')) continue;

    const eventName = file.split('.')[0];
    client.on(eventName, (...args) => require(`../events/${file}`)(...args));
    eventCount++;
  }

  console.log(`Es wurden ${eventCount} Events geladen.`);
};