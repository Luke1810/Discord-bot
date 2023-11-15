const DB = require('@mephisto5558/mongoose-db');
const db = new DB(process.env.MONGODB_URI, 'counting');

module.exports = {
  name: 'counting',
  description: 'Lege den counting channel fest',
  usage: 'channel',

  run: async function (message) {
    const channel = message.mentions.channels.first();

    if (!channel) {
      return message.reply('Bitte sage mir in welchem Channel');
    }

    // Setzen des Kanals in der Datenbank
    db.set('Channel', channel);
    console.log('New value for Channel:', channel);
    message.reply(`Es wird nun in ${channel} gezählt`);

    // Setzen des aktuellen Zählerwerts auf 1
    await db.set('currentNumber', 1); // Verwendung von "await" hier

    console.log('New value for currentNumber: 1');
    message.reply('Der Zähler wurde auf 1 zurückgesetzt und der Zählvorgang beginnt.');

    // Überprüfen, ob die Nachricht den nächsten erwarteten Wert enthält
    if (message.content === (db.get('currentNumber') || 1).toString()) {
      const currentNumber = db.get('currentNumber');
      const newNumber = currentNumber + 1;

      // Hier warten wir auf die Aktualisierung des Werts in der Datenbank
      await db.set('currentNumber', newNumber); // Verwendung von "await" hier

      console.log('New value for currentNumber:', newNumber);
      message.reply(`nächster Wert: ${newNumber}`);
    }
  }
};