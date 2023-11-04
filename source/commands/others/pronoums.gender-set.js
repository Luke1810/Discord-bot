const DB = require('@mephisto5558/mongoose-db');
const { EmbedBuilder, Colors } = require('discord.js'); 
const { arg } = require('mathjs');

module.exports = {
  name: 'gender.set',
  description: 'Lege dein Gender und deine pronomen fest',
  usage: 'gender pronom1/pronom2',

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    const user = message.author;
    const serverID = message.guild.id;

    if (args.length < 1) {
      return message.reply('Du musst dein Gender und deine Pronomen eingeben, mache es wie folgt: `+gender.set Male He/Him`');
  }
  
  let gender = args[0];
  let pronom = args.slice(1).join(' ');
  
  if (!gender || !pronom) {
      return message.reply('Du musst dein Gender und deine Pronomen eingeben, mache es wie folgt: `+gender.set Male He/Him`');
  }
  
  db.set(`Gender.${user}.${serverID}`, gender);
  db.set(`Pronom.${user}.${serverID}`, pronom);
  message.reply(`${message.author.username} ist ${gender} und bevorzugt es mit ${pronom} angesprochen zu werden`);
}}
