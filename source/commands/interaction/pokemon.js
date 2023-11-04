const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  'https://media.tenor.com/jwHkGGFNoH8AAAAi/shiny-charmander-pokemon.gif',
  'https://media.tenor.com/qIhgj8cLz9UAAAAC/charmander-charmander-pokemon.gif',
  'https://media.tenor.com/imUldC5bpu4AAAAC/pokemon-charmander.gif',
  'https://media.tenor.com/EM8H5OXABPUAAAAC/charmander-pokemon.gif',
  'https://media.tenor.com/tZVpbfTIjNMAAAAC/pikachu.gif',
  'https://media.tenor.com/T4g83yrAhwcAAAAC/totodile-pokemon.gif',
  'https://media.tenor.com/M07Tm-PbhRkAAAAC/bulbasaur-happy.gif',
  'https://media.tenor.com/OE3xkbR2uaMAAAAC/pichu-anime.gif',
  'https://media.tenor.com/CgnotyzlT6QAAAAC/pichu-pikachu.gif',
  'https://media.tenor.com/xF_W77sdRVUAAAAC/mimikyu.gif',
  'https://media.tenor.com/JhEP2lleQFcAAAAC/riolu-dancing.gif',
  'https://media.tenor.com/XNoSfLlcWeYAAAAC/jump-cute.gif',
  'https://media.tenor.com/nJclFuwdP5wAAAAC/squirtle-pikachu.gif',
  'https://media.tenor.com/87FMQLs2W9YAAAAC/polemon-pikachu.gif'
];

module.exports = {
  name: 'happy',
  description: 'Zeig deine freude',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Happy')
      .setDescription(`${message.author} ist sehr glücklich`)
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};