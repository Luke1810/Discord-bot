const { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const reply = require('../../utils/reply');

const prefix = '+';
const commandsPerPage = 10;

module.exports = {
  name: 'help',
  description: 'Zeigt dir meine Befehle',

  run: function (message) {
    const commands = message.client.commands;
    const totalPages = Math.ceil(commands.size / commandsPerPage);

    let currentPage = 1;

    const embed = createEmbed(currentPage, totalPages, commands);

    reply(message, {
      embeds: [embed],
      components: [createPaginationButtons(currentPage, totalPages)],
    }).then((sentMessage) => {
      const filter = (button) => button.customId === 'prev' || button.customId === 'next';
      const collector = sentMessage.createMessageComponentCollector({ filter, time: 60000 });

      collector.on('collect', async (buttonInteraction) => {
        await buttonInteraction.deferUpdate();
       
        if (buttonInteraction.customId === 'prev' && currentPage > 1) {
          currentPage--;
        } else if (buttonInteraction.customId === 'next' && currentPage < totalPages) {
          currentPage++;
        }
       
        const updatedEmbed = createEmbed(currentPage, totalPages, commands);
        const updatedButtons = createPaginationButtons(currentPage, totalPages);
       
        sentMessage.edit({ embeds: [updatedEmbed], components: [updatedButtons] });
       });
    });
  },
};

function createEmbed(page, totalPages, commands) {
  const startIdx = (page - 1) * commandsPerPage;
  const endIdx = page * commandsPerPage;

  return new EmbedBuilder()
    .setTitle('Batbot')
    .setDescription('`Was ich schon alles kann:`')
    .setColor(Colors.White)
    .addFields(
      Array.from(commands.values())
        .slice(startIdx, endIdx)
        .map(({ name, usage, description }) => ({
          name: usage ? `${prefix}${name} ${usage}` : prefix + name,
          value: description || 'Keine Beschreibung gesetzt',
          inline: true,
        }))
    )
    .setFooter({ text: `Seite ${page}/${totalPages} | Alles in [] ist optional | Wenn die Buttons nicht direkt funktionieren, versuche es erneut` });
}

function createPaginationButtons(currentPage, totalPages) {
  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('prev')
        .setLabel('Vorherige Seite')
        .setStyle(1) 
        .setDisabled(currentPage === 1),
      new ButtonBuilder()
        .setCustomId('next')
        .setLabel('Nächste Seite')
        .setStyle(1)  
        .setDisabled(currentPage === totalPages)
    );

  return row;
}