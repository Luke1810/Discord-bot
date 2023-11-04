const DB = require('@mephisto5558/mongoose-db');
const { EmbedBuilder, Colors } = require('discord.js'); 

module.exports = {
  name: 'todo.set',
  description: 'Schreibe etwas auf deine Todo-Liste',
  usage: 'text',

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    const authorID = message.author.id;
    const serverID = message.guild.id;

    if (args.length < 1) {
      return message.reply('Du musst Text angeben, den du zur Todo-Liste hinzufügen möchtest.');
    }

    const todoText = args.join(' ');

    db.push(`todoList.${serverID}.${authorID}`, 'todos', todoText);
    
    message.reply(`"${todoText}" wurde zu deiner Todo-Liste hinzugefügt`);
  }
};

