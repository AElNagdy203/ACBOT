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
	if (message.content === 'اعملي شاي') {
		message.react('☕')
			.then(() => message.react('☕'))
			.then(() => message.react('☕'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});





client.on('message', message => {
	if (message.content === 'قهوة') {
		message.react('☕')
		.catch(() => console.error('One of the emojis failed to react.'));
	}
});





client.on('message', message => {

    if (message.content === 'شاي') {

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
} else if (message.content === 'طفش') {
       message.reply('أسمع قرآن، أعملك قهوة؟');
} else if (message.content === 'بتحب سيف؟') {
       message.reply('أيوه يسطا بحبه كثير ياعم :heart:');

} else if (message.content === 'تدري شئ عن عيلة Q3') {
       message.reply('أأفضل عائلة بالدنيا :heart:');
}
	
});


client.on('message', message => {

    if (message.content === 'سيف سيف') {

       message.channel.send('**► The punishments due**')
			.then(() => message.channel.send('• ايوه هو سيف'))
			.then(() => message.channel.send('• بحب سيف'))
			.then(() => message.channel.send('• سيف سيف سيف'))
			.then(() => message.channel.send('• سيف'))
			.then(() => message.channel.send('• سيف'))
			.catch(() => console.error('One of the massages failed to reply.'));
	}
});


	    
	    
	    


client.on('message', message => {
    if (message.content.startsWith("!push")) {
    var embedWarn = new Discord.RichEmbed()
    .setTitle("► The punishments due")
  .setColor('F0EFEF')
  .addField("• يُمنع السب والقذف", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• نحترم جميع الخوادم ولكن يُمنع ذكر إسم أي خادم أخر", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• يُمنع بأي شكل من الأشكال أعطاء دعوة لأي شخص من الاشخاص", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• يُمنع منعاً بتاً نشر اي صور او أي محتوي إباحي", "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("• يُمنع نشر أي روابط خاصة بسيرفرات خوادم أُخري" , "ـــــــــــــــــــــــــــــــــــــــ")
  .addField("هذه القوانين قابلة للتعديل في أي وقت", "► Bot was developed by ACIMAN#1411")
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




client.on('message', message => {

if (message.content.startsWith("!say")) {
message.channel.sendMessage((message.author.username) + " says: " + (message.content.replace('!say ','')));
};
});



client.login(process.env.BOT_TOKEN);
