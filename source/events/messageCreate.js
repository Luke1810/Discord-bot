const checkForPerms = require('../utils/checkForPerms');

const prefix = '+';

/** @param {import('discord.js').Message} message */
module.exports = function messageCreate(message) {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

<<<<<<< HEAD
  if (command && (command.prefixRun || command.run) && checkForPerms(message, command)) {

    return (command.prefixRun ?? command.run)(message, args);
  }}

=======
  if ((!command?.prefixRun && !command?.run) || !checkForPerms(message, command)) return;
  return (command.prefixRun ?? command.run)(message, args);
};
>>>>>>> 5c3cc3ef8f19f6acce0bf03f3a16327d57db0fc5
