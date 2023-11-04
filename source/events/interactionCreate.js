const checkForPerms = require('../utils/checkForPerms');

/**@param {import('discord.js').ChatInputCommandInteraction}interaction*/
module.exports = async function interactionCreate(interaction) {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if ((!command?.slashRun && !command?.run) || !checkForPerms(interaction, command)) return;

  await interaction.deferReply();
  return (command.slashRun ?? command.run)(interaction);
};