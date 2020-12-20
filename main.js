const Discord = require('discord.js');
const client = new Discord.Client();
const messages = require('./lib/messages');

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Hello");
})

client.on("message", async message => {
    let response = await messages.checkContent(message.content);
    if(typeof response !== "undefined") {
        switch (response[0]) {
            case 0:
                message.channel.send(response[1]);
                break;
            case 1:
            default:
                message.reply(response[1])
                break;
        }
    }
})

client.login("VOTRE_TOKEN");
