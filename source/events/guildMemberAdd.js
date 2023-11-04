const { EmbedBuilder } = require('discord.js');
const DB = require('@mephisto5558/mongoose-db');

/** @param {import('discord.js').GuildMember} member */
module.exports = async function guildMemberAdd(member) {
  const guildId = member.guild.id;
  const db = member.client.db;
  db.fetchAll()
  // Stellen Sie sicher, dass die Datenbank die richtigen Schlüssel verwendet, um Kanal und Nachricht abzurufen.
  const welcomeChannelId = await db.get(`Channel.${guildId}`);
  const welcomeMessage = await db.get(`Nachricht.${guildId}`);

  if (!welcomeChannelId || !welcomeMessage) {
    return console.error('Willkommenskanal oder Willkommensnachricht nicht gefunden.');
  }

  const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
  if (!welcomeChannel) {
    return console.error('Willkommenskanal nicht gefunden.');
  }

  const welcomeEmbed = new EmbedBuilder()
    .setTitle(`Welcome, ${member.user.username}!`)
    .setDescription(welcomeMessage) // Verwenden Sie die gespeicherte Willkommensnachricht
    .setThumbnail(member.user.displayAvatarURL())
    .setColor('Random');

  return welcomeChannel.send({ embeds: [welcomeEmbed] });
};