const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://media.tenor.com/UcR-o4Xt5FkAAAAd/david-goggins.gif', 'https://media.tenor.com/FSDShAqz66EAAAAC/stay-hard-run.gif',
  'https://media.tenor.com/F5CBH2s7gRcAAAAC/navy-seal-bal.gif', 'https://media.tenor.com/49lex7RVkXwAAAAC/david-goggins-lifting.gif',
  'https://media.tenor.com/wFUqiE8RlcUAAAAd/carrytheboats-davidgoggins.gif',
];

module.exports = {
  name: 'boost',
  description: 'David Goggins ultra boost, oder so',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Boost')
      .setDescription('David Goggins ultra boost, oder so')
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};