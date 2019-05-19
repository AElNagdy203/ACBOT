const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Loay1') {

       message.reply('Loay is staff of faction LSPD, Nice');

       }

});


client.login(process.env.BOT_TOKEN);
