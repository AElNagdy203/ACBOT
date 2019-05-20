const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ACIMAN') {
	    
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
    if (message.content.startsWith("!push2")) {
    var embedWarn = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  .addField("Inline Field", "They can also be inline.", true)
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});





client.login(process.env.BOT_TOKEN);
