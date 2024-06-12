module.exports = {
  name: 'birthday.set',
  description: 'Lege deinen Geburtstag fest',
  usage: 'DD MM YYYY',

  prefixRun: async function (message, args) {
    const db = message.client.db;
    const authorID = message.author.id;

    if (args.length < 3) {
      return message.reply('Du musst das Datum im Format DD MM YYYY angeben.');
    }

    const [day, month, year] = args;
    db.set(`Birthday`, { day, month, year });

    message.reply(`"${day}.${month}.${year}" wurde als dein Geburtstag festgelegt.`);
  }
};