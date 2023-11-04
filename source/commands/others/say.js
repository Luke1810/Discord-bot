const { Permissions, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'say',
  description: 'Lass mich etwas sagen, bitte bleib aber nett',
  usage: 'Nachricht [#channel]',

  /**@param {import('discord.js').Message} message @param {string[]} args*/
  prefixRun: function run(message, args) {
    let textToSay = args.join(' ');
    let channelMention = message.mentions.channels.first(); // Extrahiert den erwähnten Kanal

    if (!textToSay)
      return message.reply('Du musst einen Text angeben, den der Bot senden soll.');

    if (channelMention) {
      // Filtert den Kanal aus den Argumenten heraus und bereinigt die Nachricht
      textToSay = textToSay.replace(`<#${channelMention.id}>`, '');
    } else {
      channelMention = message.channel; // Wenn kein Kanal angegeben wurde, verwende den aktuellen Kanal
    }

    textToSay = textToSay.trim(); // Entfernt eventuelle zusätzliche Leerzeichen
    
    message.delete();

    return channelMention.send(textToSay);
  }
};