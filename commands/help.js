const prefix = process.env.PREFIX;
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  helpMsg = new Discord.MessageEmbed()
  .setTitle(client.user.username)
  .setDescription("Grazie per aver usato **" + client.user.username + "**, Ecco tutti i comandi.")
  .addField("🔊 Musica(ai 100 membri)", "`play`, `leave`, `pause`, `resume`, `search`, `skip`, `musiclink`, `volume`")
  .addField("👮‍ Moderazione", "`clear` (or `purge`), `ban`, `kick`, `nick`, `mute`, `unmute`, `whois`, `destroy`")
  .addField("🔥 Divertimento(ai 100 membri)", "`help`, `invite`, `mcstatus`, `mcskin` (or `skin`), `8ball`, `meme`, `mcleaks`, `ping`")
  .addField("🚀 Utilità(ai 100 membri)", "`mail`, `covid19`, `report`, `say`")
  .setColor('RANDOM')
  message.channel.send(helpMsg);
}
