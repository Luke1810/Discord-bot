module.exports = {
  name: 'say',
  description: 'Lass mich etwas sagen, bitte bleib aber nett',
  usage: 'Nachricht [#channel]',

  /**@param {import('discord.js').Message} message @param {string[]} args*/
  prefixRun: function run(message, args) {
    let textToSay = args.join(' ');
    let channelMention = message.mentions.channels.first();

    if (!textToSay)
      return message.reply('Du musst einen Text angeben, den der Bot senden soll.');

    if (channelMention) {
      textToSay = textToSay.replace(`<#${channelMention.id}>`, '');
    }
    else {
      channelMention = message.channel;
    }

    textToSay = textToSay.trim();

    message.delete();

    return channelMention.send(textToSay);
  }
};