exports.run = (client, message, args, ops) => {
	message.reply("Ti sto mandando l'invito in dm... Ricordati di darmi il permesso di inviarti messaggi ");
	message.author.send(" ECCO IL TUO LINK! https://discord.com/api/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot");
}
