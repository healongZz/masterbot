const moment = require("moment");
const mathjs = require("mathjs");
const sm = require('string-similarity');
const Discord = require('discord.js'),
      Chance = require('chance'),
      random = new Chance(),
      arraySort = require('array-sort'), 
      table = require('table'), 
      send = require('quick.hook'),
      parseArgs = require('minimist');
const client = new Discord.Client();
const superagent = require("superagent");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const fs = require("fs");

let prefix = ".";

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





client.login(process.env.BOT_TOKEN);
