const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {

message.delete();

   let ratings = ["0", "⭐ 1", "⭐⭐ 2", "⭐⭐⭐ 3", "⭐⭐⭐⭐ 4", "⭐⭐⭐⭐⭐ 5", "⭐⭐⭐⭐⭐⭐ 6",  "⭐⭐⭐⭐⭐⭐⭐ 7", "⭐⭐⭐⭐⭐⭐⭐⭐ 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10"];

    let result = Math.floor((Math.random() * ratings.length));
    let user = message.mentions.users.first();
 
    let rateEmbed = new Discord.RichEmbed()
 
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .addField("Message :", args[0])
    .addField("Rating :", ratings[result]);
 
 send(message.channel, rateEmbed, {
  name: "TAMOTOJI Rateing",
  icon: "https://cdn.discordapp.com/attachments/444786595355426816/462609909075410944/images.png"
 })
  //  message.channel.send(rateEmbed)



}
