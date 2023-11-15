const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'todo.get',
  description: 'Zeige deine ToDo-Liste',

  /**@param {import('discord.js').Message} message*/
  prefixRun: async function (message) {
    const db = message.client.db;
    await db.fetchAll();
    const authorID = message.author.id;
    const serverID = message.guild.id;
    const todoList = db.get(`todoList.${serverID}.${authorID}`, 'todos');

    if (todoList?.length > 0) {
      const todoListText = todoList.join('\n');
      const embed = new EmbedBuilder()
        .setColor('White')
        .setTitle('Deine ToDo-Liste')
        .setDescription(todoListText);

      return message.reply({ embeds: [embed] });
    }

    return message.reply('Deine ToDo-Liste ist leer.');
  }
};