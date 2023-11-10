const checkForPerms = require('../utils/checkForPerms');

const prefix = '+';

/**@param {import('discord.js').Message} message */
module.exports = function messageCreate(message) {
  // Verhindere Antworten auf Nachrichten von anderen Bots
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if ((!command?.prefixRun && !command?.run) || !checkForPerms(message, command)) return;
  return (command.prefixRun ?? command.run)(message, args);
  };