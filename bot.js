const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});




client.on('message', message => {
    var prefix = "";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("" +prefix+ "** يجب أن تمنشن العضو  ❌**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 
 
var embed = new Discord.RichEmbed()

 
.setDescription(`**<@${message.author.id}> لقد تم سحب العضو إليك ✅**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send(""+ message.mentions.members.first() +"**❌ أن العضو ليس بروم صوتي**")
}
} else {
 message.channel.send("**أنت لست متواجد في روم صوتي لسحب العضو إليك ❌**")
}
} else {
message.react("❌")
 }}});




client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
 
 
  if (message.content.startsWith('رسالة')) 
          if (!args[0]) {
message.channel.send("**يجب عليك كتابة }رسالة{ لارسال رسالة جماعية :envelope:  **");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});









client.login(process.env.BOT_TOKEN);
