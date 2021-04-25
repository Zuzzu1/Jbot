exports.run = (client, message, args, ops) => {
	if(message.channel.type == 'DM') return message.reply('Puoi usare questo comando solo nei server!');
	var user = message.mentions.users.first();
	const banReason = args.slice(1).join(' ');
	if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Non sei autorizzato a eseguire questo comando!");
	if(!user) {
		try {
			if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Non sono riuscito a trovare un membro con quell ID');
			user = message.guild.members.get(args.slice(0, 1).join(' '));
			user = user.user;
		} catch (error) {
			return message.reply('Non sono riuscito a trovare un membro con quell ID');
		}
	}
	if (user === message.author) return message.channel.send('Non puoi bannarti\'unbannarti da solo!');
	if (!banReason) return message.reply('Ricordati di mettere un motivo per il ban!');
	message.guild.members.ban(user, { reason: banReason });
	const Discord = require('discord.js');
	const banConfirm = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`✅ ${user.tag} è stato bannato con successo! \nReason: __${banReason}__`);
	message.channel.send(banConfirm);
}