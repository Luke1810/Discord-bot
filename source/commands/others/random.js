const reply = require('../../utils/reply');

module.exports = {
  name: 'random',
  description: 'Zeigt dir einen random user, pingt ihn jedoch nicht',

  run: async function run(message) {
    const members = await message.guild.members.fetch();
    const nonBotMembers = members.filter(member => !member.user.bot);

    const randomMember = nonBotMembers.random();
    if (!randomMember) return reply(message, 'Keine Benutzer gefunden.');
    return reply(message, `Sag Hallo zu: ${randomMember}`);
  }
};