// Funktion zum Umwandeln eines in natürlicher Sprache geschriebenen Zeitstrings in Millisekunden
function parseTimeToMilliseconds(time) {
  const timeRegex = /^(\d+)([smhdw])$/;
  const matches = time.match(timeRegex);

  if (!matches) {
    throw new Error('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
  }

  const value = parseInt(matches[1]);
  const unit = matches[2];

  switch (unit) {
    case 's': // Sekunden
      return value * 1000;
    case 'm': // Minuten
      return value * 60 * 1000;
    case 'h': // Stunden
      return value * 60 * 60 * 1000;
    case 'd': // Tage
      return value * 24 * 60 * 60 * 1000;
    case 'w': // Wochen
      return value * 7 * 24 * 60 * 60 * 1000;
    default:
      throw new Error('Ungültige Zeiteinheit. Verwende s, m, h, d oder w.');
  }
}

module.exports = {
  name: 'mute',
  description: 'Mute einen user',
  usage: 'user dauer [grund]',
  userPermissions: ['MuteMembers'],
  botPermissions: ['MuteMembers'],

  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  prefixRun: async function (message, args) {
    const target = message.mentions.members.first();
    if (!target) return message.reply('Wen denn?');

    if (!target.moderatable) return message.reply('Das darf ich nicht.');

    let timeString = args[1];
    let reason = args.slice(2).join(' '); // Optionaler Grund

    // Überprüfe, ob die Zeit im korrekten Format ist
    if (!timeString || !/^\d+[smhdw]$/.test(timeString)) {
      return message.reply('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
    }

    // Wandele die Zeit in Millisekunden um
    const timeInMilliseconds = parseTimeToMilliseconds(timeString);

    if (isNaN(timeInMilliseconds) || timeInMilliseconds <= 0) {
      return message.reply('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
    }

    // Führe die Stummschaltung mit Zeit und optionaler Begründung durch
    await target.disableCommunicationUntil(Date.now() + timeInMilliseconds);

    // Nachricht mit Bestätigung und optionaler Begründung
    if (reason) {
      return message.reply(`${target.user.username} wurde gemutet für ${timeString} aufgrund von: ${reason}`);
    } else {
      return message.reply(`${target.user.username} wurde gemutet für ${timeString}.`);
    }
  }
};