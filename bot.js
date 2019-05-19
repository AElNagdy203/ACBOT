const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on('message', message => {
if (command === 'ping') {
   message.channel.send('Pong.');
} else if (command === 'police') {
   message.channel.send('what.');
}

});



 


client.login(process.env.BOT_TOKEN);
