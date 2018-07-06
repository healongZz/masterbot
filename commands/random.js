const Discord = require("discord.js");
const random = new chance();

exports.run = (client, message, Discord, prefix, args) => {

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
    if (!args[0] || args[0].toLowerCase() === 'list') {
        let resp = Object.keys(Object.getPrototypeOf(random))
        resp.shift();
        embed.setDescription(resp.join(', '))
             .setTitle(`${botconfig.prefix}random List `);
        return message.channel.send(embed)      
    }
    let item = args[0];
    args.shift();
    let options = parseArgs(args);
    delete options['_'];
    let response;
    try {
        response = random[item.toLowerCase()](options);
    } catch (e) {
        response = `Sorry, I can't return a random ${item}`;
    }
    if (typeof response === 'object') { // Parse Objects
        response = JSON.stringify(response, null, 4);
        embed.setDescription(`\`\`\`js\n${response}\`\`\``)
    } else { // Run if NOT an object
        embed.setFooter(response);   
    }
    message.channel.send(embed);
    




}
