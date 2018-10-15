const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

    console.log(`Logged in as [Netork Tokyo]`);

});










var ss = 0;

client.on('voiceStateUpdate', (o,n) => {

    if (o.voiceChannel && !n.voiceChannel) {

        ss-=1

        n.guild.channels.get("501125690675036193").edit({

            name : "Tokyo Online : [" + ss+ "]"

        })

    };

    if (n.voiceChannel && !o.voiceChannel) {

        ss+=1

        n.guild.channels.get("501125690675036193").edit({

            name : "Tokyo Online : [" + ss+ "]"

        })

    }

})

client.on("ready", () => {

    client.guilds.get("501096188792143883").members.forEach(m => {

        if (m.voiceChannel) {

            ss+=1

        };

        client.channels.get("501125690675036193").edit({

            name : "Tokoy Online : [" + ss+ "]"

        })

    });

});

// جميع الحقوق محفوظة لدى :@┃HEART┃ ❦  4EVER#9512 













client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ __${msg.guild.name}__ ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ __${"EGYPT"}__ ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ __${msg.guild.roles.size}__ ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ __${msg.guild.memberCount}__ ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ __${msg.guild.channels.filter(m => m.type === 'text').size}__ ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ __${msg.guild.channels.filter(m => m.type === 'voice').size}__ ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ __${msg.guild.owner}__ ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ __${msg.guild.id}__ ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

 













client.on('message', message => {

        var prefix = ''; // هنا تقدر تغير البرفكس

    var command = message.content.split(" ")[0];

    if(command == prefix + 'رسالة') { // الكوماند !bc

   if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('')
      
        var args = message.content.split(' ').slice(1).join(' ');

        if(message.author.bot) return;

        if(!args) return message.channel.send(`**رسالة { كلامك :envelope: } ** ${prefix} `).then(msg => msg.delete(5000));

        

        let bcSure = new Discord.RichEmbed()

        message.channel.send(`**هل أنت متأكد من أرسال رسالتك  :mailbox_with_mail: **`).then(msg => msg.delete(5000));



        

        

        

        

        message.channel.send(bcSure).then(msg => {

            msg.react('✅').then(() => msg.react('❎'));

            message.delete();

            

           

       let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

            let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            

            let sendBC = msg.createReactionCollector(yesEmoji);

            let dontSendBC = msg.createReactionCollector(noEmoji);

            

            sendBC.on('collect', r => {

                message.guild.members.forEach(member => {

                    member.send(args.replace(`[user]`, member)).catch();

                    if(message.attachments.first()){

                        member.sendFile(message.attachments.first().url).catch();

                    }

                })

                message.channel.send(` **  لقد تم أرسال رسالتك إلي  [ ${msg.guild.memberCount} ] عضو في السيرفر ✅ **`).then(msg => msg.delete(5000));

                msg.delete();

            })

            dontSendBC.on('collect', r => {

                msg.delete();

                message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));

            });

        })

    }

});


























client.on('message', message => {

 if(message.content.startsWith(prefix + "تعال")) {

message.member.voiceChannel.join();

}

});

client.on('message', msg => {

    if (msg.content == '1join') {

        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {

         msg.member.voiceChannel.join().then(msg.react('✅'));

     }

    }

}

})

client.on('ready', () => {

    client.channels.get("501109014780706826").join();

    });















client.on('message', message => {

    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({ thing: true, maxUses: 5, maxAge: 86400 }).then(invite => {

            message.author.send(`**Link duration: day\n\n\nNumber of uses of the Link: 5**\n\n\n${invite.url}` )

            message.channel.send(`**[ The link has been sent to your user :link: ] <@${message.author.id}> **`).then(msg => msg.delete(3500)); 

        });

    };

});

  

  

  

 



















client.on('message', message => {

    var prefix = "";

if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'اسحب')) {

 if (message.member.hasPermission("MOVE_MEMBERS")) {

 if (message.mentions.users.size === 0) {

 return message.channel.send("" +prefix+ "** ❌  لم يتم العثور على العضو المطلوب **").then(msg => msg.delete(5000));

}

if (message.member.voiceChannel != null) {

 if (message.mentions.members.first().voiceChannel != null) {

 var authorchannel = message.member.voiceChannelID;

 var usermentioned = message.mentions.members.first().id;

  let mentions = message.mentions.members.first();

message.channel.send(`✅ ${mentions.user} **moved to** \`${message.member.voiceChannel.name}\``);

 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))


} else {

message.channel.send("** ❌  العضو يجب أن يكون متواجد بروم صوتي **").then(msg => msg.delete(5000));

}

} else {

 message.channel.send("** ❌  You must be in voice channel !**").then(msg => msg.delete(5000));

}

} else {


 }}});







































client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "اسكت")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
   
    if(mention.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**لا يمكن آعطاء ميوت لآحد آدارة السيرفر ❌**`);
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source:  ${mention.user.username} Already muted!** `);
 
       
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration)  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ ** __لاتسب | بدون سبام__** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ])
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000);
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
if(command === `تكلم`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:  ${mention.user.username} تم فك الميوت عنه مسبقاً! **`)
 
  await toMute.removeRole(role)
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

































client.on('message', message => {

if (message.content === 'تكلم') {
if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('');

    
message.channel.send('**:information_source:  ``#unmute @Dramex`` يجب تحديد شخص**').then(message => {message.delete(7000)})

}

 });    













client.on('message',async message => {

if(message.content === 'اسكت') {

  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('');

 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/495582423430463498/498283222011084810/n4eSIakPew.png')

  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });




















client.on('message',async message => {

if(message.content === 'باند') {

  if(!message.member.hasPermission('BAN_MEMBERS')) return      message.channel.send('');

 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/495582423430463498/498283222011084810/n4eSIakPew.png')

  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });































 



































client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "باند")) {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
      
     if(mention.hasPermission('BAN_MEMBERS')) return message.channel.send(`**لا يمكن آعطاء باند لآحد آدارة السيرفر ❌**`);
     
      
      if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
      
      if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
      
      
      if(mention.id === message.author.id) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

       let duration = args[2];
    if(!duration)  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
      
       if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

       let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ ** __لاتسب | بدون سبام__** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك باند**')
    .addField('**__السيرفر__**',[ message.guild.name ])
    .addField('**__تم آعطائك باند بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});






















































var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Tokyo Network")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Tokyo Network")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`** Invited by :  ${Invite.inviter}  **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});





























 











client.on("message", async msg => {

    if (msg.channel.type !== "text") return undefined;

    if (msg.auhtor.bot) return undefined;

    var args = msg.content.split(" ")

    

    if (msg.content.toLowerCase().startsWith(prefix + "مسح")) {

    if(!msg.guild.members.get(msg.author.id).hasPermission("BAN_MEMBERS")) return msg.channel.send("You lack permissions.")

    if(!msg.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return msg.channel.send("I lack permissions.")

    if (!args[1]) return msg.channel.send("DiscordAPI Err : Missing args.")

    var count = parseInt(args[1]);

    var fetched = msg.channel.fetchMessages({limit : count})

    if (isNaN(count)) return msg.channel.send("DiscordAPI Err : Only numbers are allowed.")

    if (count < 0) return msg.channel.send("DiscordAPI Err : Unvalid numbers.")

    if (count == 0) return msg.channel.send("DiscordAPI Err : 0 messages ???")

    if (count > 100) return msg.channel.send(`DiscordAPI Err : cannot delete ${args[1]} message..`)

    if (fetched.length == 0) return msg.channel.send(`DiscordAPI Err : ${msg.channel.name} is empty..`)

    else {
    try {
        fetched.then(async msgs => {
          await msg.channel.bulkDelete(msgs)
          await msg.channel.send(`Bulked ${msgs.size-=1} message.`).then(msg => {
            msg.delete(4000)
          })
        })
    } catch (e) {
      console.log(e.stack)
    }
    }
  }
})





































client.login(process.env.BOT_TOKEN);
