const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

	if (command === 'ping') {
	 	message.channel.send('Pong.');
	} else if (command === 'ياض') {
	 	message.channel.send('هلا.');
	} else if (command === 'ض') {
	 	message.channel.send('ممنوع ض'.);
 }
	
});




 


client.login(process.env.BOT_TOKEN);
