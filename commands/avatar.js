exports.run = (client, message, Discord, prefix) => {

message.delete();
const embed = new Discord.RichEmbed()
.setImage(message.author.avatarURL)
.setDescription(`Your Avatar URL : [Avatar Link](${message.author.avatarURL})`)

message.channel.send(embed)

}
