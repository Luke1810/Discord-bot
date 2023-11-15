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
      const defaultNum1 = 1;
      const defaultNum2 = 100;

      const randomNumber1 = Math.floor(Math.random() * (defaultNum2 - defaultNum1 + 1)) + defaultNum1;

      message.channel.send(`Die zufällige Zahl zwischen ${defaultNum1} und ${defaultNum2} ist: ${randomNumber1}`);
    }
    else {
      const num1 = parseInt(args[0]);
      const num2 = parseInt(args[1]);

      if (isNaN(num1) || isNaN(num2)) {
        return message.reply('Ungültige Zahlen!');
      }

      const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

      message.channel.send(`Die zufällige Zahl zwischen ${num1} und ${num2} ist: ${randomNumber}`);
    }
  }
};