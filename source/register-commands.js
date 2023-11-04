const { REST, Options, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config()

const commands = [
  { name: 'creator', description: 'Zeigt dir meinen Erschaffer' },
  { name: 'help', description: 'Zeigt dir meine Befehle' },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async function commandRegisterer() {
  try {
    console.log('Registering slash commands globally...');

    await rest.put(`/applications/${process.env.CLIENT_ID}/commands`, { body: commands });

    console.log('Slash commands were registered globally successfully!');
  }
  catch (error) {
    console.log(`An error occurred while registering slash commands: ${error}`);
  }
})();