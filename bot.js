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




const ttb_channel = "682298752349765686"

//replace 'ID OF main-chat server' with the server ID of main-chat
const ttb_guild = "682298752349765686"

const Discord = require("discord.js");
const client = new Discord.Client();

//our message cache that points to messages sent in talk-thru-bot to messages that will be sent in main-chat, for things like editing and deletion to work
let messageCache = new Discord.Collection();

//our ready event, will log 'bottag is ready!' when bot is online
client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`)
});

//our message event
client.on("message", async message => {

//if the channel isn't talk-thru-bot, don't do anything
  if(message.channel.id !== ttb_channel) return;

//fetching channel  
let channel = client.guilds.get(ttb_guild).channels.find(c => c.name === message.channel.name)

//throw an error if the channel you named the 'talk-thru-bot' does not exist
  if(!channel) throw new Error(`Channel ${message.channel.name} not found`)

//if message starts with '!!', don't send it to the 'main-chat' channel
  if(message.content.startsWith("!!")) return;
  
//if message contains attachments, it will send them
  let attachments = message.attachments.map(a => a.url);
  
//send the message to 'main-chat' channel, if TTS is enabled on that message, it will send as TTS to 'main-chat' channel aswell, if there is attachments, it will attach those attachments too.
  channel.send(message.content, { tts: message.tts, files: attachments }).then(msg => {

//add the message IDs to the message cache
  messageCache.set(message.id, msg.id); 

  });
  
});

//our message delete event
//i'll skip over the same stuff we added in the message event

client.on("messageDelete", async message => {
  if(message.channel.id !== ttb_channel) return;
  let channel = client.guilds.get(ttb_guild).channels.find(c => c.name === message.channel.name)
  if(!channel) throw new Error(`Channel ${message.channel.name} not found`)

//getting the deleted messages ID, to delete the one in 'main-chat' aswell
  let msgId = messageCache.get(message.id)

//if message isn't in cache, ignore it
  if(!msgId) return;
  
//fetches the message in 'main-chat'
  channel.fetchMessage(msgId).then(msg => {

//deletes the message in 'main-chat'
    msg.delete();

  })
//logs error if there was a problem
  .catch(err => console.log(err));
  
//deletes the message IDs from the message cache, since their not needed anymore
  messageCache.delete(message.id);
  
});

//our message edit event

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if(newMessage.channel.id !== tb_channel) return;
  let channel = client.guilds.get(ttb_guild).channels.find(c => c.name === newMessage.channel.name)
  if(!channel) throw new Error(`Channel ${newMessage.channel.name} not found`)

  let msgId = messageCache.get(newMessage.id)
  if(!msgId) return;
  
  channel.fetchMessage(msgId).then(msg => {

//edits the message in 'main-chat'
   msg.edit(newMessage.content);
  })
  .catch(err => console.log(err))
  
});

//our reaction add event

client.on("messageReactionAdd", async (reaction, user) => {
  if(reaction.message.channel.id !== ttb_channel) return;
  let channel = client.guilds.get(ttb_guild).channels.find(c => c.name === reaction.message.channel.name)
  if(!channel) throw new Error(`Channel ${reaction.message.channel.name} not found`)

  let msgId = messageCache.get(reaction.message.id)
  if(!msgId) return;
  
  channel.fetchMessage(msgId).then(msg => {

//reacts to the message in 'main-chat'
   msg.react(reaction.emoji.name);

  })
  .catch(err => console.log(err));
  
});					     






client.login(process.env.BOT_TOKEN);
