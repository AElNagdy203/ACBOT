const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});
if (message.content.startsWith("police")) {
message.reply("What?");
    }
});
 


client.login(process.env.BOT_TOKEN);
