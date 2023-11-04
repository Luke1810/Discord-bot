const { EmbedBuilder } = require('discord.js');
const { evaluate } = require('mathjs');

module.exports = {
  name: 'math',
  description: 'Lass mich etwas rechnen',
  usage: 'Rechnung',

  /**@param {import('discord.js').Message}message @param {string[]}args*/
  prefixRun: function (message, args) {
    const mathExpression = args.join(' ');
    const result = evaluate(mathExpression);

    const embed = new EmbedBuilder()
      .setTitle('Rechner')
      .addFields(
        { name: 'Eingabe', value: mathExpression },
        { name: 'Ergebnis', value: result.toString() }
      );

    return message.reply({ embeds: [embed] });
  }
};