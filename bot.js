const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'iLawX') {

       message.reply('في الحقيقة أنا أحبه أبتعد عنه، شكراً لك');

       } else if (message.content === 'Loay') {
       message.reply('ياض هذا بعد احبه');
   } else if (message.content === 'ACIMAN') {
       message.send('من فضلكم الكل يحيه لأنه يتعب عشان يخليني بوت حلو :heart:');
  }

});






client.login(process.env.BOT_TOKEN);
