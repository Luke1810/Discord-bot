const { PermissionFlagsBits } = require('discord.js');
const reply = require('./reply');

/**
 * @param {import('discord.js').Message|import('discord.js').CommandInteraction}message
 * @param {{userPermissions?:[]?, botPermissions?:[]?}}command
 * @returns {boolean} true = allowed
*/
module.exports = function checkForPerms(message, command) {
  const missingUserPerms = message.member.permissionsIn(message.channel).missing([...(command.userPermissions || []), PermissionFlagsBits.SendMessages]);
  if (missingUserPerms.length) {
    reply(message, `Du darfst das nicht, kauf dir Rechte: ${missingUserPerms.join(', ')}`);
    return false;
  }

  const missingBotPerms = message.guild.members.me.permissionsIn(message.channel).missing([...(command.botPermissions || []), PermissionFlagsBits.SendMessages, PermissionFlagsBits.EmbedLinks]);
  if (missingBotPerms.length) {
    reply(message, `Ich darf das nicht, gib mir Rechte: ${missingBotPerms.join(', ')}`);
    return false;
  }

  return true;
};