const { EmbedBuilder } = require('discord.js');
const reply = require('../../utils/reply');

const responses = [
  { text: 'Joa könnt sein.', type: 'positiv' },
  { text: 'Definitiv.', type: 'positiv' },
  { text: 'Ja logisch, was ist das für eine Frage....', type: 'positiv' },
  { text: 'Joa naja, ich weiß ja nicht.', type: 'neutral' },
  { text: 'Nein auf keinen Fall!', type: 'negativ' },
  { text: 'Sorry dich enttäuschen zu müssen... die Antwort lautet nein.', type: 'negativ' },
  { text: 'Sorry dich enttäuschen zu müssen... die Antwort lautet ja.', type: 'positiv' },
  { text: 'Sicher doch.', type: 'positiv' },
  { text: 'Meine Quellen sagen nein.', type: 'negativ' },
  { text: 'Ich glaube nicht.', type: 'negativ' },
  { text: 'Du fragst das gerade nicht wirklich oder...? Logischerweise nein.', type: 'negativ' },
  { text: 'Jungee natürlich nicht!', type: 'negativ' },
  { text: 'Laut meinen neuesten Studien lautet die Antwort NEIN', type: 'negativ' },
  { text: 'Laut meinen neuesten Studien lautet die Antwort JA', type: 'positiv' },
  { text: 'Sorry bin zu müde, frag mich später nochmal.', type: 'neutral' }
];

module.exports = {
  name: 'askall',
  description: 'nennt dir alle Antwortkategorien',

  run: function (message) {
    const args = message.content.split(' ');
    
    if (args.length === 2) {
      const filterType = args[1].toLowerCase();
      
      const filteredResponses = responses.filter(response => response.type === filterType);
      const allFilteredResponses = filteredResponses.map(response => response.text).join('\n');
      
      const embedFiltered = new EmbedBuilder()
        .setColor(filterType === 'positiv' ? 'Green' : filterType === 'negativ' ? 'Red' : 'Yellow')
        .setTitle(`${filterType.charAt(0).toUpperCase() + filterType.slice(1)}e Antwortmöglichkeiten`)
        .setDescription(allFilteredResponses);

      return message.reply({ embeds: [embedFiltered] });
    }
    
    const allResponses = responses.map(response => response.text).join('\n');
      
    const embedAll = new EmbedBuilder()
      .setColor('White')
      .setTitle('Alle Antwortmöglichkeiten')
      .setDescription(allResponses);

    return message.reply({ embeds: [embedAll] });
  }
};