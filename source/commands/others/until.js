module.exports = {
  name: 'until',
  description: 'Zeigt dir wie lange noch bis zu deinem angegebenem datum',
  usage: 'DD.MM.YYYY',

  /**@param {import('discord.js').Message}message @param {string[]}args*/
  prefixRun: function (message, args) {
    if (!args.length)
      return message.reply(`Verwende den Befehl wie folgt: !until DD.MM.YYYY`);

    const targetDateStr = args[0];
    const parts = targetDateStr.split('.');
    if (parts.length !== 3)
      return message.reply('Ungültiges Datum. Verwende das Format DD.MM.YYYY.');

    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    const targetDate = new Date(year, month, day);

    if (isNaN(targetDate.getTime()))
      return message.reply('Ungültiges Datum. Verwende das Format DD.MM.YYYY.');


    const currentDate = new Date();
    const timeDifference = targetDate - currentDate - 3600000;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return message.reply(`${years} Jahre, ${months} Monate, ${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden`);
  }
};