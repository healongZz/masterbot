exports.run = (client, message, Discord, prefix) => {

message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion **MANAGE_MESSAGE** to use this !")
    if(args[0] == "help"){
    message.reply(`${botconfig.prefix}sayto <nameChannel> <Text>`);
    return;
  } 
let say = args[0];
 let say2 = args[1];
 let channel = message.guild.channels.find(`name`, say);
 channel.send(say2); 

}
