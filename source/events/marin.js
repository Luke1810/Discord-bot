/** @param {import('discord.js').Message} message */
module.exports = function messageCreate(message) {
    if (message.author.id === '774960022157393932') {
      message.reply('Hallo marin wie gehts dir');
    }
  };