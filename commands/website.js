const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {

message.delete(900);
const embed = new Discord.RichEmbed()
.addField("Website :", "http://tamotoji.tk");
send(message.channel, embed, {
name: "TAMOTOJI HangOut :",
icon: "https://cdn.discordapp.com/attachments/462598743988895744/464682938013843466/website-icon-6.png"
})


}
