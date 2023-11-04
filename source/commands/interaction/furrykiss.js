const { EmbedBuilder, Colors } = require('discord.js');

const images = [
  '776848000688324668/1138543076747530250/Unbenannt.jpg',
  '776848000688324668/1138543094669787186/hcwkhrne3lw31.jpg',
  '776848000688324668/1138543116069126164/furry_kiss_by_smileyfurry_d969haf-pre.jpg',
  '776848000688324668/1138543154988073110/furry_kiss_by_cherrylove9_daad5wc-fullview.jpg',
  '776848000688324668/1138543299574108240/620b690b359402132ecdcf83c2187a8a28b09759_hq.gif',
  '776848000688324668/1138543380113145907/furry.gif',
  '776848000688324668/1138543407321595944/fox-bird-kiss.gif',
  '776848000688324668/1138543430268616704/kiss-furry.gif',
  '776848000688324668/1138543489450262669/giphy.gif',
  '776848000688324668/1138543542738899004/1680181506.toffeecreation_kiss_gif_7.gif',
  '776848000688324668/1138543568001171466/furry-laughing-excitedly-hfi5mwmc56ekqv1j.gif'
];

module.exports = {
  name: 'furrykiss',
  description: 'Vinnis idee, nicht meine!',

  /**@param {import('discord.js').Message}message*/
  prefixRun: function (message) {
    const embed = new EmbedBuilder()
      .setTitle('Furrykiss')
      .setDescription(message.mentions.users.first() ? `Du küsst <@${message.mentions.users.first().id}>` : 'Du küsst jemanden')
      .setImage('https://cdn.discordapp.com/attachments/' + images[Math.floor(Math.random() * images.length)])
      .setColor(Colors.White);

    return message.reply({ embeds: [embed] });
  }
};