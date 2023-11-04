const DB = require('@mephisto5558/mongoose-db');
const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  name: 'gender.get',
  description: 'Zeige deine gender und pronomen',

  /**
   * @param {import('discord.js').Message} message
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    await db.fetchAll();
    const user = message.mentions.users.first() ?message.mentions.users.first() : message.author;
    const serverID = message.guild.id;
    
    const Pronom = db.get(`Pronom.${user}.${serverID}`);
    const Gender = db.get(`Gender.${user}.${serverID}`);
    
    if (Pronom && Gender) {
        message.reply(`${user} gender ist ${Gender} und die pronomen sind ${Pronom}`);
    } else {
        message.reply(`${user} hat keine gespeicherten Gender und Pronomen.`);
    }}}