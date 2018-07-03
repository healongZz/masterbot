exports.run = (client, message, Discord, prefix, args) => {

    let bicon = client.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Maker:", "TAMOTOJI#5881")
        .addField("Support Server :", "TAMOTOJIO's HangOut [INVITE LINK](https://discord.gg/ZWWD7zT)")
        //.addField("Server Hosting", chosting)


        message.channel.send(embed);


}
