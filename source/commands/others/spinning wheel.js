module.exports = {
    name: 'wheel',
    description: 'Gibt ein zufälliges Wort aus deinen vorgegebenen Wörtern',
  
    /** @param {import('discord.js').Message} message
     * @param {string[]} args
     */
    run: function (message, args) {
      if (args.length > 0) {
        const randomIndex = Math.floor(Math.random() * args.length);
        const selectedWord = args[randomIndex];
        message.channel.send(`Der zufällig ausgewählte Wert ist: **${selectedWord}**`);
      } else {
        message.channel.send('Welche Wörter denn? Schreibe sie nach `+wheel`.');
      }
    },
  };