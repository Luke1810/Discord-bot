/**
 * @typedef {import('discord.js').MessagePayload}MessagePayload
 * @typedef {import('discord.js').MessageReplyOptions}MessageReplyOptions
 * @typedef {import('discord.js').InteractionReplyOptions}InteractionReplyOptions
 */
const { Message, BaseInteraction } = require('discord.js');

/**
 * @param {Message | BaseInteraction}msg
 * @param {string | MessagePayload | MessageReplyOptions | InteractionReplyOptions}options
 * @returns {Message}
 */
module.exports = async function reply(msg, options) {
  let repliedMsg;

  if (msg instanceof BaseInteraction) {
    try { repliedMsg = await ((msg.replied || msg.deferred) ? msg.editReply(options) : msg.reply(options)); }
    catch {
      try { repliedMsg = await msg.followUp(options); }
      catch { repliedMsg = await msg.channel.send(options); }
    }
  }
  else if (msg instanceof Message) {
    try { repliedMsg = await (msg.editable ? msg.edit(options) : msg.reply(options)); }
    catch { repliedMsg = await msg.channel.send(options); }
  }
  else throw new TypeError('msg param must be instance of Message or BaseInteraction');

  return repliedMsg;
};