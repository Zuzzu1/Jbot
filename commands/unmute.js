exports.run = (client, message, args, ops) => {
    const Discord = require('discord.js');
    if(!message.member.hasPermission('MANAGE_ROLES') || !message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"]) || !message.guild.owner) return message.reply("Non sei autorizzato a eseguire questo comando!");
	if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply("Non ho il permesso di controllare gli ruoli");
    let toUnmute = message.mentions.members.first();
    if(!toUnmute) return message.reply("Fornisci un utente da unmutare");
    let muteRole = message.guild.roles.cache.find(r => r.name === "Mutato");
    const unmuteConfirm = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription(`✅ ${toUnmute.user.username} è stato mutato con successo!`);
    toUnmute.roles.remove(muteRole.id).then(() => {
        message.delete()
        toUnmute.send(`Sei stato unmutato in **${message.guild.name}**`)
        console.log(`${toUnmute.user.username} was unmuted in ${message.guild.name}`)
        message.channel.send(unmuteConfirm)
    });
}