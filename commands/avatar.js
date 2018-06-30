exports.run = (client, message, Discord, prefix) => {

message.delete();
const embed = new Discord.RichEmbed()
.setImage(message.author.avatarURL)

message.channel.send(embed)

}
