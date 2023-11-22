module.exports = {
  name: 'birthday.set',
  description: 'Lege deinen Geburtstag fest',
  usage: 'DD.MM.YYYY',

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const db = message.client.db;
    const authorID = message.author.id;

    if (args.length < 3) {
      return message.reply('Du musst das Datum im Format DD.MM.YYYY angeben.');
    }

    const [day, month, year] = args;
    db.push(`Birthday`, 'User',authorID, day, month, year);

    message.reply(`"${day}.${month}.${year}" wurde als dein Geburstag festgelegt.`);
  }
};