const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var whois = message.mentions.members.first();
    if(!whois) {
		try {
			if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Non sono riuscito a trovare nessun utemte con questo ID');
			user = message.guild.members.get(args.slice(0, 1).join(' '));
			user = user.user;
		} catch (error) {
			return message.reply('Non sono riuscito a trovare nessun utemte con questo ID');
		}
	}

    const whoisEmbed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('RANDOM')
    .addField("Informazioni generali", [
        `**ID:** ${whois.id}`,
        `**Tag:** ${whois.user.tag}`
        `**Registrato il:** ${whois.user.createdAt}`,
    ])
    .addField("Server information", [
        `**Nome mostrato:** ${message.guild.members.find('id', whois.id).displayName}`,
        `**Entrato il:** ${message.guild.members.find('id', whois.id).joinedAt}`,
        `**Ruoli attuali:** ${message.guild.members.find('id', whois.id).roles.join(", ")}`
    ])
    .setFooter(`${whois.user.tag}`, `${whois.user.avatarURL}`);
    message.channel.send(whoisEmbed);
}