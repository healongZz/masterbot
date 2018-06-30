exports.run = (client, message, Discord, prefix) => {

    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permssion to use this !");
        if(!args[0]) return message.channel.send(`${prefix}clear [Number]`);
        message.channel.bulkDelete(args[0]).then(() => {
       message.channel.send(`Message Has Been Clear **${args[0]}** .`).then(msg => msg.delete(2000));
    });

}
