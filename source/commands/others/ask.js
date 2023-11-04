const reply = require('../../utils/reply');

const responses = [
  'Joa könnt sein.', 'definitiv.', 'Ja logisch, was ist das für eine frage....', 'Joa naja, ich weiß ja nicht.', 'Nein auf keinen fall!', 
  'Sorry dich enttäuschen zu müssen... die Antwort lautet nein.', 'Sorry dich enttäuschen zu müssen... die Antwort lautet ja.', 
  'Sicher doch.',  'Meine Quellen sagen nein.',  'Ich glaube nicht.', 'Du fragst das gerade nicht wirklich oder...? Logischerweise nein.',
  'Jungee natürlich nicht!', 'Laut meinen neuesten Studien lautet die Anwort NEIN',
  'Laut meinen neuesten Studien lautet die Anwort JA', 'Sorry bin zu müde, frag mich später nochmal.'
];

module.exports = {
  name: 'ask',
  description: 'stell mir eine ja-nein frage!',

  run: function (message) {
    if (!message.content.includes('?')) {
      message.reply('Versuch doch wenigstens deine frage sinnvoll zu stellen...');
    } else {
      return reply(message, responses[Math.floor(Math.random() * responses.length)]);
    }
  }
};