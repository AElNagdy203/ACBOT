const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ACIMAN') {

       message.reply('من فضلكم الكل يحيه لأنه يتعب عشان يخليني بوت حلو :heart:);
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

    if (message.content === '!push') {

       message.channel.send('**► The punishments due**')
			.then(() => message.channel.send('• Warn 1'))
			.then(() => message.channel.send('• Warn 2'))
			.then(() => message.channel.send('• Warn 3'))
			.then(() => message.channel.send('• Warn 4 = Suspended'))
			.then(() => message.channel.send('• Warn 6 = Ban permanently'))
			.catch(() => console.error('One of the massages failed to reply.'));
	}
});

	    
	    
	    
	    
	    
client.on('message', message => {
	if (message.content === '!push2') {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
	    
	    











client.login(process.env.BOT_TOKEN);
