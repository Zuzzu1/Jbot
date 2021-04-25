exports.run = (client, message, args, ops) => {
	if(message.channel.type == 'DM') return message.reply('Puoi usare questo comando solo nei server!');
	if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Non sei autorizzato a eseguire questo comando!");
	let mentionMember = message.mentions.members.first();
	if(!mentionMember) return message.reply("Pinga la persona che vuoi espellere");
	if(!mentionMember.kickable) return message.reply("Non ho il permesso di kickare questa persona.  É di un ruolo più alto di me? Sono autorizzato ad eseguire questo comando?");
	try {
		mentionMember.kick()
	} catch (error) {
		message.reply("Non ho il permesso di kickare questa persona.  É di un ruolo più alto di me? Sono autorizzato ad eseguire questo comando?");
	}
	const Discord = require('discord.js');
	const kickConfirm = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`✅ ${mentionMember} è stato espulso con successo!`);
	message.channel.send(kickConfirm);
}