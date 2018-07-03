const Discord = require("discord.js");
const gifSearch = require("gif-search");

exports.run = (client, message, Discord, prefix, args) => {


    if (!args[0]) return message.channel.send("`"+config.prefix+"gif <gifName> || Ex : gif gay`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.channel.send(embed);
    });
 


}
