const moment = require("moment");
const mathjs = require("mathjs");
const sm = require('string-similarity');
const Fortnite = require('fortnite');
const stats = new Fortnite("aff6929e-6efc-468d-9058-daba0491d714");
const Discord = require('discord.js'),
      Chance = require('chance'),
      random = new Chance(),
      arraySort = require('array-sort'), 
      table = require('table'), 
      send = require('quick.hook'),
      parseArgs = require('minimist');
const client = new Discord.Client();
const botconfig = require("./botconfig.json");
const superagent = require("superagent");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const fs = require("fs");
let prefix = ["t ", "T "];

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, Discord, prefix, );
    } catch (err) {
      console.error(err);
    }
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('446673535029739520').setName(`Total-Member : ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('446673535029739520').setName(`Total-Member : ${member.guild.memberCount}`);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
  });

function setActivity() {
    var Gameinfo = [`discord.gg/ZWWD7zT`, `${prefix}help`, `TAMOTOJI`]
    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array
    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}
setInterval(setActivity, 900 * 60 * 2)



client.login(process.env.BOT_TOKEN);
