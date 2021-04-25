exports.run = (client, message, args, ops) => {
    let verMsg = "__**Express Classic Source**__\n";
        verMsg += client.user.username + " è stato completamente realizzato da Zuzzu#6990.";
        return message.channel.send(verMsg);
}
