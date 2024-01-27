const { Client, IntentsBitField, Collection } = require('discord.js');
const { readdir } = require('fs/promises');
const { DB } = require('@mephisto5558/mongoose-db');
const gitpull = require('./utils/gitpull');
require('dotenv').config();

const errorHandler = err => console.error('Ein Fehler ist aufgetreten:', err);

process
  .on('unhandledRejection', err => errorHandler(err))
  .on('uncaughtExceptionMonitor', err => errorHandler(err))
  .on('uncaughtException', err => errorHandler(err));

(async function main() {
  await gitpull();

  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
    allowedMentions: { repliedUser: false }
  });
  try {
    client.db = await new DB(process.env.MONGODB_URI, 'saves').fetchAll();
    console.log('Verbunden');

    client.commands = new Collection();

    for (const registerer of await readdir('./source/registerer')) {
      await require(`./registerer/${registerer}`)(client);
    }
  } catch (error) {
    console.log(`Error: ${error.stack}`);
  }
  await client.login(process.env.TOKEN);
})();