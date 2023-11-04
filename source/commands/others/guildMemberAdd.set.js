const { EmbedBuilder } = require('discord.js');
 
module.exports = {
    name: 'welcome.set',
    description: 'Lege einen Willkommenskanal und die Nachricht fest',
    usage: 'channel Nachricht',
    userPermissions: ['ManageGuild'],
    botPermissions: ['ManageGuild'],
  
    /**
     * @param {import('discord.js').Message} message
     * @param {string[]} args
     */
    prefixRun: async function (message, args) {
    
    const db = message.client.db;
    const serverID = message.guild.id;
    
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply('Du hast den Channel nicht angegeben')

    const nachricht = args.slice(1).join(' ');
    if(!nachricht) return message.reply('Du hast die Nachricht nicht angegeben')

    console.log(channel, nachricht )
    db.set(`Channel.${serverID}`, channel)
    db.set(`Nachricht.${serverID}`, nachricht)
    message.reply(channel + ' ist jetzt der Welcome channel, mit der Nachricht: ' + nachricht)
}}