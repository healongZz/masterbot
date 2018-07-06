const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {

message.delete(900);
let message = message.channel.send("http://tamotoji.tk");
send(message.channel, message, {
name: "TAMOTOJI HangOut :",
icon: "https://www.google.com.vn/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi5i9C-7YncAhXZQ30KHSQjA78QjRx6BAgBEAU&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimg%2F29481&psig=AOvVaw1w4E5PF6XwPuniV_c5Ypsx&ust=1530945204983295"

})


}
