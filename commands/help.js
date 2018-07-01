const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix, args) => {

const embed = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setTitle(`${prefix}help || Commands List `)
.setDescription("`userinfo`  `serverinfo`  `avatar`  `botstats`")
.setFooter("Power By : TAMOTOJI HangOut Server", message.guild.name)
send(message.channel, embed, {
 name: "Commands List:",
 icon: "https://cdn.discordapp.com/attachments/442941497319489566/462950283908218880/terminal-512.png"
 })
.then(m => m.delete(11000));

}
