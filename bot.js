const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

    console.log(`Logged in as [ Pharaohs]`);

});










var ss = 0;

client.on('voiceStateUpdate', (o,n) => {

    if (o.voiceChannel && !n.voiceChannel) {

        ss-=1

        n.guild.channels.get("501125690675036193").edit({

            name : "Voice Online : [ " + ss+ " ]"

        })

    };

    if (n.voiceChannel && !o.voiceChannel) {

        ss+=1

        n.guild.channels.get("501125690675036193").edit({

            name : "Voice Online : [ " + ss+ " ]"

        })

    }

})

client.on("ready", () => {

    client.guilds.get("501096188792143883").members.forEach(m => {

        if (m.voiceChannel) {

            ss+=1

        };

        client.channels.get("501125690675036193").edit({

            name : "Voice Online : [ " + ss+ " ]"

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

        

    var command = message.content.split(" ")[0];

    if(command == prefix + 'رسالة') { // الكوماند !bc

   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('')
      
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

    client.channels.get("501413605854674966").join();

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
   
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**لا يمكنك آعطاء ميوت لآحد آدارة السيرفر ❌**`);
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source:  ${mention.user.username} Already muted! **`);
 
       
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
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("").then(msg => msg.delete(6000))
 
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

    
message.channel.send('**:information_source:  ``unmute @Dramex`` يجب تحديد شخص**').then(message => {message.delete(7000)})

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

    .setImage('https://cdn.pg.sa/fjxlms81nk.png')
  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });






















client.on('message', message => {

if (message.content === 'كيك') {
if(!message.member.hasPermission('KICK_MEMBERS')) return      message.channel.send('');

    
message.channel.send('**:information_source: ``kick @Dramex`` يجب تحديد شخص **').then(message => {message.delete(7000)})

}

 });    








 



























































































var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "!...")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'pharaohs');
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
        guild = client.guilds.find("name", "!...")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`** Invited By :  ${Invite.inviter}  **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});





























































client.on('message', message => {
    if(message.content.startsWith(prefix + 'أضافة')) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
       
    let args = message.content.split(' ').slice(1).join(' ');
    if(!args) {
        return;
    }
            let embed = new Discord.RichEmbed()
                .setColor("BLACK")
                .setAuthor("هل تريد أضافة روم كتابي او صوتي ؟")
                .setDescription("**Text:** 📋\n\n**Voice:** 🔊");
 
                message.channel.sendEmbed(embed) .then(m => {
                    m.react('🔊')
                    m.react('📋')
 
 
 
                        let ChatFilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
                        let VoiceFilter = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
 
 
                        let Chat = m.createReactionCollector(ChatFilter, { time: 10000 });
                        let Voice = m.createReactionCollector(VoiceFilter, { time: 10000 });
                       
 
 
 
                Voice.on('collect', r => {
                    message.guild.createChannel(args, "voice") .then(channel => {
                        channel.setPosition(1);
                        m.delete();
                            message.channel.send(`**تم عمل روم صوتي بأسم [ \`${args}\` ] منشن الروم  [ ${channel} ] ✅**`).then(message => {message.delete(4500)})
                           
                    });
                })
 
                Chat.on('collect', r => {
                    message.guild.createChannel(args, 'text') .then(channel => {
                        channel.setPosition(1);
                        m.delete()
                                .then(channel.setTopic(`A text channel created by, ${message.author.tag}`));
                               
                            message.channel.send(`**تم عمل روم كتابي بأسم [ \`${args}\` ] منشن الروم [ <#${channel.id}> ]  ✅**`).then(message => {message.delete(4500)})
      
                           
                    })
                })
                })
}
if(message.content.startsWith(prefix + 'إزالة')) {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
        let args = message.content.split(' ').slice(1).join(' ');
        if(!args) {
            return;
        }
       
    var channel = message.guild.channels.find("name", args);
        if(channel) {
            channel.delete();
                message.channel.send('**تم مسح الروم بنجاح ✅**').then((x) => {
                    x.delete(5000);
                })
        } else {
            message.channel.send(`**لايوجد روم بآسم [ \`${args}\` ] ❌**`).then(message => {message.delete(3000)})
      
 
        };
}
});























 


























client.on('guildMemberAdd', message =>
          { message.send(`**🌹 ولكم نورت السيرفر 🌹 \n 👑 آسم العضو [ ${message.user} ] 👑 \n 👤آنت العضو رقم [ ${message.guild.memberCount} ]👤 \n 🏁 تم عمل السيرفر بتاريخ 🏁  [ 14 : 10 : 2018 ] **`)});







            




 








































client.on('message', message => {

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "باند") {

               if(!message.channel.guild) return message.channel.send('');

         

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  /*let b5bzlog = client.channels.find("name", "5bz-log");

 

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/

  if (message.mentions.users.size < 1) return message.channel.send("");

  if (!message.guild.member(user)

  .bannable) return message.channel.send("**لا يمكنك آعطاء باند لآحد آدارة السيرفر ❌**");

 

  message.guild.member(user).ban(7, user);

 

  const banembed = new Discord.RichEmbed()

 let mention = message.mentions.members.first();

  message.channel.send(`**✅ ${mention.user.username} banned from the server ! ✈ **`);
setTimeout(() => {
    embed : banembed

  })

}

});












































  
  







  






















client.on('guildMemberAdd', member=> {

    member.addRole(member.guild.roles.find("name","Pharaoh - The - BEST- 4 Ever 💘"));

    });
































   



















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(2000));
        }    
    }
}
});






















































































































































const { Util } = require("discord.js");
const fs = require('fs');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const { TOKEN, GOOGLE_API_KEY } = require('./config');

const prefixes = require("./jsons/prefixes.json");
const xp = require("./jsons/xp.json");
const credits = require("./jsons/credits.json");
const lvlmsg = require("./jsons/lvlmsg.json");
const cookies = require("./jsons/cookies.json");
const lvls = require("./jsons/guildlvl.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

let init = async () => {

const cmdFiles = await readdir("./commands/");
  console.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
	client.aliases.set(props.help.alias, props);
  });
  console.log(`loaded ${client.aliases.size} aliases`);
}
init();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log(`Running ${client.user.username} on the following servers: \n\n${client.guilds.map(g => `${g.name} - ${g.memberCount} Members`).join(`\n`)}`));

  client.on('ready', () => {
	client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
});

function game1() {
    client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
}

function game2() {
    client.user.setActivity(`Want to know my prefix for a server?, use Nb.prefix to find out`, { type: "PLAYING" });
    setTimeout(game3, 30000)
}

function game3() {
   client.user.setActivity(`Want me on your discord server? Use Nb.invite`, { type: "PLAYING" });
    setTimeout(game4, 30000);
}
function game4() {
   client.user.setActivity(`My Master's orders`, { type: "LISTENING" });
    setTimeout(game5, 30000);
}
function game5() {
   client.user.setActivity(`in bed with mustache`, { type: "PLAYING" });
    setTimeout(game1, 30000);
}

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('resume', () => console.log('I have reconnected!'));

client.on('message', async message => { 
	if (message.author.bot)return;
	if (message.content.startsWith("Nb.") && message.channel.type !== "text")return mesage.reply("Please use my commands in a server");
	
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "Nb."
    };
  }
  if(!credits[message.author.id]){
    credits[message.author.id] = {
      credits: 0
    };
  }
  if(!lvlmsg[message.guild.id]){
    lvlmsg[message.guild.id] = {
      lvlmsg: "GG {mem.nick}, you just leveled up!"
    };
  }
  if(!lvls[message.guild.id]){
    lvls[message.guild.id] = {
      lvls: "false"
    };
  }
  if(!cookies[message.author.id]){
    cookies[message.author.id] = {
      cookies: 0
    };
  }


  let coinAmt = Math.floor(Math.random() * 1) + 1;

  if(coinAmt === coinAmt){
    credits[message.author.id] = {
      credits: credits[message.author.id].credits + coinAmt
    };
  fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
    if (err) console.log(err)
  });
 }
 
  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
  let levelmsg = lvlmsg[message.guild.id].lvlmsg;
  let cokis = cookies[message.author.id].cookies;
  
	if(lvls[message.guild.id].lvls === "true"){
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 800;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
	cookies[message.author.id].cookies = cokis + 2;
	if(levelmsg.includes("{mem.nick}")) levelmsg = levelmsg.replace("{mem.nick}", `${message.member.displayName}`);
    if(levelmsg.includes("{mem}")) levelmsg = levelmsg.replace("{mem}", `${message.author}`);
	message.channel.send(`${levelmsg}`).then(msg => {msg.delete(5000)});
	}
  fs.writeFile("./jsons/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  fs.writeFile("./jsons/cookies.json", JSON.stringify(cookies), (err) => {
    if(err) console.log(err)
	});
}
  
  let prefix = prefixes[message.guild.id].prefixes;
  
  if(message.content.startsWith(prefix) && client.user.presence.status === "invisible"){
	  if(message.author.id !== '503159455043813388')return;
  }

  if (message.content == "Nb"){
	  message.delete(10000);
	  message.channel.send('The prefix for this server is: ``'+ prefix +'``').then(msg => {msg.delete(15000)});
  }
  
  if(!message.content.startsWith(prefix)) return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  const searchString = message.content.split(" ").slice(1).join(" ");
  const url = message.content.split(" ").slice(1).join(" ");
  const serverQueue = queue.get(message.guild.id);
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  
  
  if (command === `play`) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, message, voiceChannel, true); 
			}
			message.channel.send(`Playlist: **${playlist.title}** has been added to the queue!`).then(msg=>{msg.delete(30000)});
	    message.delete(30000)	
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					let bed = new Discord.RichEmbed()
					.setTitle(`Song selection:`)
					.setColor(`${message.member.displayHexColor}`)
					.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
					.setFooter(`Please provide a value from 1-10.`, `${message.author.avatarURL}`)
					message.channel.send({embed: bed}).then(msg => {msg.delete(30000)});
					message.delete(30000);
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.').then(msg=>{msg.delete(10000)});
					}
					response.first().delete(20000);
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('I could not obtain any search results.').then(msg=>{msg.delete(10000)});
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.').then(msg=>{msg.delete(10000)});
		serverQueue.connection.dispatcher.end('skip');
		message.channel.send('Skip command has been used').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		return undefined;
} else if (command === `stop`) {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.').then(msg=>{msg.delete(10000)});
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('stop');
		message.channel.send('Stop command has been used!').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		return undefined;
	} else if (command === `volume`) {
		const uwu = message.content.split(" ").slice(1).join(" ");
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue)return message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		if (!uwu){
		message.channel.send(`The current volume is: **${serverQueue.volume}**`).then(msg=>{msg.delete(10000)});
		message.delete(10000);
		}
		if (uwu){
		if(uwu > 0 && uwu < 11){
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue)return message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		serverQueue.volume = uwu;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(uwu / 5);
		message.channel.send(`I set the volume to: **${uwu}**`).then(msg=>{msg.delete(10000)});
		message.delete(10000);
		} else return message.channel.send("The volume can only be a number from 1 to 10");
	}
	} else if (command === `np`) {
	const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+"d"):"")+(written?":":"")
      +(hours?(written=true,hours+"h"):"")+(written?":":"")
      +(minutes?(written=true,minutes+"m"):"")+(written?":":"")
      +(seconds?(written=true,seconds+"s"):"")+(written?"":"");
};
let elapsd = parseTime(`${serverQueue.connection.dispatcher.totalStreamTime}`);
		let embed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setThumbnail(`https://i.ytimg.com/vi/${serverQueue.songs[0].id}/maxresdefault.jpg`)
		.setTimestamp()
		.setFooter(`Elapsed time: ${elapsd}`)
		.addField("**Now Playing:**", `[${serverQueue.songs[0].title}](https://youtube.com/watch?v=${serverQueue.songs[0].id})`)
		message.channel.send({embed}).then(msg=>{msg.delete(15000)});
		message.delete(10000);
	} else if (command === `queue`) {
		let i = 0;
		let embed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setFooter(`Total queue size: ${serverQueue.songs.length} songs`)
		.addField('**Song Queue:**', `${serverQueue.songs.map(song => `**[${++i}] -** ${song.title}`).slice(0, 5).join('\n')}`)
		message.channel.send(embed).then(msg => {msg.delete(30000)});
	  message.delete(20000);
  } else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			message.channel.send('I Paused the music for you').then(msg=>{msg.delete(10000)});
			message.delete(10000);
		} else {
		message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		}
	} else if (command === `resume`) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			message.channel.send("i've resumed the music").then(msg=>{msg.delete(10000)});
			message.delete(10000);
		} else {
		message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		message.delete(10000);
	}
}
	
async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(video);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel:\nERROR:\n${error}`).then(msg => {msg.delete(15000)});
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist)return;
		else return message.channel.send(` **${song.title}** has been added to the queue!`).then(msg => {msg.delete(30000)});
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), { audioonly: true })
		.on('end', reason => {
			if(reason == 'skip'||'stop'){
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
			} else {
			message.channel.send('Song ended').then(msg => {msg.delete(30000)});
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
			}
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Started playing: **${song.title}**`).then(msg => {msg.delete(30000)});
}
 

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  let alias = client.aliases.get(cmd.slice(prefix.length));
  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
});




client.login(process.env.BOT_TOKEN);
