module.exports = {
  name: 'trigger.set',
  description: 'Füge einen Trigger hinzu',
  usage: 'trigger reply',

  prefixRun: async function (message, args) {
    const db = message.client.db;
    const serverID = message.guild.id;

    if (args.length < 2) {
      return message.reply('Ungültige Verwendung. `+trigger.set trigger reply`');
    }

    const trigger = args[0];
    const botReply = args.slice(1).join(' ');

    db.set(`${trigger}.${serverID}`, `${botReply}`);

    message.reply(`Trigger \`${trigger}\` mit Antwort \`${botReply}\` wurde hinzugefügt.`);
  },
};