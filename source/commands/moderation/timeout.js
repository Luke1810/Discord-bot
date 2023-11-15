function parseTimeToMilliseconds(time) {
  const timeRegex = /^(\d+)([smhdw])$/;
  const matches = time.match(timeRegex);

  if (!matches) {
    throw new Error('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
  }

  const value = parseInt(matches[1]);
  const unit = matches[2];

  switch (unit) {
    case 's':
      return value * 1000;
    case 'm':
      return value * 60 * 1000;
    case 'h':
      return value * 60 * 60 * 1000;
    case 'd':
      return value * 24 * 60 * 60 * 1000;
    case 'w':
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

    const timeString = args[1];
    const reason = args.slice(2).join(' ');

    if (!timeString || !/^\d+[smhdw]$/.test(timeString)) {
      return message.reply('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
    }

    const timeInMilliseconds = parseTimeToMilliseconds(timeString);

    if (isNaN(timeInMilliseconds) || timeInMilliseconds <= 0) {
      return message.reply('Ungültiges Zeitformat. Verwende ein gültiges Format wie 30s, 2m, 1h, 1d, 1w.');
    }

    await target.disableCommunicationUntil(Date.now() + timeInMilliseconds);

    return message.reply(`${target.user.username} wurde gemuted für ${timeString}` + (reason ? `aufgrund von: ${reason}` : '.'));
  }
};