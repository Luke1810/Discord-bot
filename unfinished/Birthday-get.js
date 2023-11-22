const { MessageEmbed, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'birthday.get',
  description: 'Zeigt die Liste aller Geburtstage',

  /**@param {import('discord.js').Message} message*/
  prefixRun: async function (message) {
    const db = message.client.db;
    const todoList = await db.get('Birthday.User');

    if (todoList?.length > 0) {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setTitle('Die Geburtstagliste')
        .setDescription(todoList.map(user => `${user.day}.${user.month}.${user.year}`).join('\n'));

      return message.reply({ embeds: [embed] });
    }

    return message.reply('Es gibt keine Geburtstage!');
  }
};