const reply = require('../../utils/reply');

module.exports = {
  name: 'date',
  description: 'Zeigt dir das heutige Datum',

  run: function (message) {
    const formattedDate = new Date().toLocaleDateString('de', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return reply(message, `Heute ist der ${formattedDate}`);
  }
};