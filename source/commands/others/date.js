const reply = require('../../utils/reply');

module.exports = {
  name: 'date',
  description: 'Zeigt dir das heutige Datum',

  run: function (message) {
    const formattedDate = new Date().toLocaleDateString('de');
    return reply(message, `Heute ist der ${formattedDate}`);
  }
};