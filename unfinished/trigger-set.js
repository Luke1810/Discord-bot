const DB = require('@mephisto5558/mongoose-db');
const db = new DB(process.env.MONGODB_URI, 'triggers');

module.exports = {
  name: 'trigger.set',
  description: 'Füge eine trigger hinzu',
  usage: 'trigger reply',

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    const serverID = message.guild.id;
    
  }
}