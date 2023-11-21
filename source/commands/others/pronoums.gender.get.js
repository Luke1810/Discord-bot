module.exports = {
  name: 'gender.get',
  description: 'Zeige deine gender und pronomen',

  /**
   * @param {import('discord.js').Message} message
   */
  prefixRun: async function (message) {
    const db = message.client.db;
    await db.fetchAll();

    const user = message.mentions.users.first() || message.author;
    const serverID = message.guild.id;

    const pronom = db.get(`Pronom.${user}.${serverID}`);
    const gender = db.get(`Gender.${user}.${serverID}`);

    if (pronom && gender) {
      message.reply(`${user} gender ist ${gender} und die pronomen sind ${pronom}`);
    } else {
      message.reply(`${user} hat keine gespeicherten Gender und Pronomen.`);
    }
  }
};
