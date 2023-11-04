const { readdir } = require('fs/promises');

/**@param {import('discord.js').Client}client*/
module.exports = async function commandRegisterer(client) {
  let loadedCommandCounter = 0;

  for (const subFolder of await readdir('./source/commands')) for (const file of await readdir(`./source/commands/${subFolder}`)) {
    if (!file.endsWith('.js')) continue;

    const command = require(`../commands/${subFolder}/${file}`);
    if (!command?.name || (!command.prefixRun && !command.slashRun && !command.run)) {
      console.log(`Der Command ${subFolder}/${file} wurde beim laden ignoriert weil er keinen Namen oder keine run Funktion hat. Guck dir mal die command template an..`);
      continue;
    }

    command.category = subFolder.toLowerCase();
    client.commands.set(command.name, command);

    loadedCommandCounter++;
  }

  console.log(`Es wurden ${loadedCommandCounter} Commands geladen.`);
};