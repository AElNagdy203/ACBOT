const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});



client.on('message', message => {

    if (message.content === 'وش اسمك بوت؟') {

       message.reply('مو لازم تعرف، صعب اقول اسمي');

       }

});



client.on('message', message => {

    if (message.content === 'وش اسم أمك بوت؟') {

       message.reply('عيب يا ولد');

       }

});




client.on('message', message => {

    if (message.content === 'كسمك') {

       message.reply('عيب ياولد ألفاظ عيب');

       }

});




client.on('message', message => {

    if (message.content === 'fuck you') {

       message.reply('مو لازم تعرف، صعب اقول اسمي');

       }

});




 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
