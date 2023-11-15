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
    const serverID = message.guild.id;

    if (args.length < 1) {
      return message.reply('Du musst das datum schon angeben.');
    }

    const day= args[0];
    const month= args[1]
    const year= args[2];

    db.push(`Birthday.${authorID}`, 'Datum', day, month, year);
    
    message.reply(`"${day}.${month}.${year}" wurde als dein Geburstag festgelegt`);
  }
};