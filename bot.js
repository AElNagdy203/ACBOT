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
} else if (message.content === 'بوت وش أسم أبوك؟') {
       message.channel.send(':man::skin-tone-1: أسمه آسيمان حفظه الله ورحمه');
} else if (message.content === 'وش أسم أمك؟') {
       message.channel.send('عيب أي شئ إلا الأم');
} else if (message.content === 'بوت مؤدب') {
       message.reply('شكرأً والله هذا من أخلاقك');
}

});


client.on('message', message => {

    if (message.content === 'kkaadddassdwwmmmee') {

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
    if (message.content.startsWith("!push")) {
    var embedWarn = new Discord.RichEmbed()
    .setTitle("► The punishments due")
  .setColor('F0EFEF')
  .addField("• Warn 1", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• Warn 2", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• Warn 3", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField('• Warn 4 = Suspended', "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• Warn 6 = Ban permanently", "► ACBOT was developed by ACIMAN#1411")
    message.channel.sendEmbed(embedWarn)
    }
});



client.on('message', message => {
 if (message.content.split(' ')[0] == '!ac')
  message.guild.members.forEach( member => {
  member.send(message.content.substr(3));
});
 if (message.content.split(' ')[0] == '!acc')
  message.guild.members.forEach( member => {
  member.send(message.content.substr(10));
});
});






client.login(process.env.BOT_TOKEN);
