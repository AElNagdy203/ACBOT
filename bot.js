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
       message.reply('من فضلكم الكل يحيه لأنه يتعب عشان يخليني بوت حلو :heart:');
  }

});



client.on('message', message => {
	if (message.content === 'أعملي شاي') {
		message.react('☕')
			.then(() => message.react('☕'))
			.then(() => message.react('☕'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', message => {

    if (message.content === 'أعملي شاي') {

       message.reply('تفضل يا عومري :heart:');
  } else if (message.content === 'بوت غبي') {
       message.reply('😡 وش سويت لك');
 } else if (message.content === 'بوت تحبني؟') {
       message.reply('😡 لا');
}

});


client.on('message', message => {

    if (message.content === 'push') {

       message.channel.send('**► The punishments due**')
			.then(() => message.channel.send('• Warn 1'))
			.then(() => message.channel.send('• Warn 2'))
			.then(() => message.channel.send('• Warn 3'))
			.then(() => message.channel.send('• Warn 4 = Suspended'))
			.then(() => message.channel.send('• Warn 6 = Ban permanently'))
			.catch(() => console.error('One of the massages failed to reply.'));
	}
});












client.login(process.env.BOT_TOKEN);
