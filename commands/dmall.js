exports.run = (client, message, Discord, prefix, args) => {

      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply("You Dont Have Permission");
      let DMALL = args.join(" ").slice(0);
    if (!DMALL) return message.channel.send(""+message.member+" Please Enter Your Text To Dm Player From Server");

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0x00c1c1,
          title: `${message.guild.name}`,
          description: `${DMALL}`
        }});
    });

    message.channel.send("All players in this discord server have got your anwer");



}
