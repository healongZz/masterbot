const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix, args) => {
if(args[0] == "help") {
return message.reply(`Ex: ${prefix}ratepictues <Link/Url>`);
}
message.delete();

   let ratings = ["0", "⭐ 1", "⭐⭐ 2", "⭐⭐⭐ 3", "⭐⭐⭐⭐ 4", "⭐⭐⭐⭐⭐ 5", "⭐⭐⭐⭐⭐⭐ 6",  "⭐⭐⭐⭐⭐⭐⭐ 7", "⭐⭐⭐⭐⭐⭐⭐⭐ 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10"];
   let channel = ["photo", "pictues", "pic", "photos", "art"];
   let channelFind = message.guild.channels.find("name", channel);
   if(!channelFind) return message.channel.send(`<\@${message.author.id}> : \n Sorry I Cant Find Channel: **${channel}**`);
    let result = Math.floor((Math.random() * ratings.length));
    let user = message.mentions.users.first();
 
    let Embed = new Discord.RichEmbed()
 
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setImage(args[0])
    .addField("Rating :", ratings[result]);
 
 send(channelFind, Embed, {
  name: "TAMOTOJI Rateing",
  icon: 'https://cdn.discordapp.com/attachments/444786595355426816/462609909075410944/images.png'
 });
  

}
