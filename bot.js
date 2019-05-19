const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Loay') {

       message.reply('Staff Of Faction');

       } else if (command === 'Loay2') {
         message.channel.send('shit qqq'.);
 }

});

 


client.login(process.env.BOT_TOKEN);
