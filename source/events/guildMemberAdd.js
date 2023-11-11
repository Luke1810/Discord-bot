const { EmbedBuilder } = require('discord.js');

/** @param {import('discord.js').GuildMember} member */
module.exports = async function guildMemberAdd(member) {
  const guildId = member.guild.id;
  const db = member.client.db;
  db.fetchAll()

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
    .setDescription(welcomeMessage) 
    .setThumbnail(member.user.displayAvatarURL())
    .setColor('Random');

  return welcomeChannel.send({ embeds: [welcomeEmbed] });
};