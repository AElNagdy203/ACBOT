const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Loay1') {

       message.reply('Staff Of Faction LSPD');

       }

});


client.login(process.env.BOT_TOKEN);
