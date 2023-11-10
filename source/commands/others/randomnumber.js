module.exports = {
    name: 'randomnumber',
    description: 'Gibt eine zufällige Zahl',
    usage: 'zahl1 zahl2',
  
    /** 
     * @param {import('discord.js').Message} message
     * @param {string[]} args
     */
    prefixRun: async function (message, args) {
  
      // Überprüfe, ob genügend Argumente (2 Zahlen) vorhanden sind
      if (args.length !== 2) {
        return message.reply('Du musst zwei Zahlen als Argumente angeben!');
      }
  
      // Extrahiere die beiden Zahlen aus den Argumenten
      const num1 = parseInt(args[0]);
      const num2 = parseInt(args[1]);
  
      // Überprüfe, ob die Argumente gültige Zahlen sind
      if (isNaN(num1) || isNaN(num2)) {
        return message.reply('Ungültige Zahlen als Argumente!');
      }
  
      // Generiere eine zufällige Zahl zwischen den beiden angegebenen Zahlen
      const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  
      // Sende die zufällige Zahl in den Discord-Textkanal
      message.channel.send(`Die zufällige Zahl zwischen ${num1} und ${num2} ist: ${randomNumber}`);
    }
  };