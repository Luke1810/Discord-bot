module.exports = {
  name: 'trigger.set',
  description: 'Füge einen Trigger hinzu',
  usage: 'trigger reply',

  prefixRun: async function (message, args) {
    const db = message.client.db;
    const serverID = message.guild.id;

<<<<<<< HEAD
    if (args.length < 2) {
      return message.reply('Ungültige Verwendung. `+trigger.set trigger reply`');
    }

    const trigger = args[0];
    const botReply = args.slice(1).join(' ');

    db.set(`${trigger}.${serverID}`, `${botReply}`);

    message.reply(`Trigger \`${trigger}\` mit Antwort \`${botReply}\` wurde hinzugefügt.`);
  },
=======
  }
>>>>>>> 5c3cc3ef8f19f6acce0bf03f3a16327d57db0fc5
};