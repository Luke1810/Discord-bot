module.exports = {
    name: 'randomnumber',
    description: 'Gibt eine zufällige Zahl',
    usage: 'zahl1 zahl2',
  
    /** 
     * @param {import('discord.js').Message} message
     * @param {string[]} args
     */
    prefixRun: async function (message, args) {
  
      if (args.length !== 2) {
        return message.reply('Du musst 2 Zahlen nennen.');
      }
  
      const num1 = parseInt(args[0]);
      const num2 = parseInt(args[1]);
  
      if (isNaN(num1) || isNaN(num2)) {
        return message.reply('Ungültige Zahlen!');
      }
  
      const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

      message.channel.send(`Die zufällige Zahl zwischen ${num1} und ${num2} ist: ${randomNumber}`);
    }
  };