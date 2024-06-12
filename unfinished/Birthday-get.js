const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'birthday.get',
  description: 'Zeigt die Liste aller Geburtstage',

  prefixRun: async function (message) {
    const db = message.client.db;
    await db.fetchAll();

    const Geburtstagsliste = db.get('Birthday', 'User');

    if (Array.isArray(Geburtstagsliste)) {
      const embed = new EmbedBuilder()
        .setColor('WHITE')
        .setTitle('Die Geburtstage')
        .setDescription(Geburtstagsliste.join(', '));

      return message.reply({ embeds: [embed] });
    } else {
      return message.reply('Es gibt keine Geburtstage in der Liste.');
    }
  }
};