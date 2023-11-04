const DB = require('@mephisto5558/mongoose-db');
const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  name: 'todo.remove',
  description: 'Entferne einen Eintrag aus deiner Todo-Liste',
  usage: 'Index',

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    const authorID = message.author.id;
    const serverID = message.guild.id;

    if (args.length < 1) {
      return message.reply('Du musst die Zahl des Eintrags angeben, den du aus deiner Todo-Liste entfernen möchtest.');
    }

    const indexToRemove = (args[0]);

    if (isNaN(indexToRemove) || indexToRemove < 1) {
      return message.reply('Ungültige Zahl. Der erste Eintrag ist 1.');
    }

    const todoListKey = `todoList.${serverID}.${authorID}`;

    const success = db.delete(todoListKey, `todos ${indexToRemove - 1}`);

    if (success) {
      message.reply(`${indexToRemove} wurde aus deiner Todo-Liste entfernt`);
      console.log('Aktualisierte Todo-Liste:', db.get(todoListKey));
    } else {
      message.reply(`Es wurde kein Eintrag mit der Zahl ${indexToRemove} in deiner Todo-Liste gefunden.`);
    }
  },
};