module.exports = {
    name: 'crash',
    description: 'Schalte den Bot ab, eigentlich nur Luki',
    aliases: ['kill'], 
  
    /**
     * @param {import('discord.js').Message} message
     */
    prefixRun: async function (message) {
      if (message.author.id === '774960022157393932') {
        await message.channel.send('Batbot geht jetzt schlafen... <:sleepyCat:1031563192142409748>');
        
        process.exit();
      } else {
        return
      }
    }
  };