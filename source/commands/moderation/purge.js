module.exports = {
    name: 'purge',
    description: 'Lösche Nachrichten',
    usage: 'anzahl',
    userPermissions: ['ManageMessages'],
    botPermissions: ['ManageMessages'],

  /**@param {import('discord.js').Message} message*/
  prefixRun: async function (message) {
    const args = message.content.split(' ');
    const amount = parseInt(args[1]);

    if (isNaN(amount)) {
      return message.reply('Bitte gib eine gültige Anzahl an Nachrichten an.');
    } else if (amount <= 0 || amount > 100) {
      return message.reply('Die Anzahl der zu löschenden Nachrichten muss zwischen 1 und 100 liegen.');
    }

    message.channel.bulkDelete(amount + 1)
      .then(messages => console.log(`Successfully deleted ${messages.size} messages`))
      .catch(console.error);
  }
};