const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`system server`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





client.on('message', async message => { // Alpha Codes Server.
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var prefix = ''; //<==== تقدر تغير البرفكس
    var args = message.content.toLowerCase().split(" "); // Alpha Codes Server.
    var command = args[0];
 
  if(command == prefix + 'رسالة') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!'); // Alpha Codes Server.
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
       
        let bcCommand = new Discord.RichEmbed()
        .setTitle(':mailbox_with_mail:  **رسالة جماعية**')
        .setColor('GREEN')
        .setDescription(`**\n${prefix} < رسالة < هنا الرسالة الي تبيها**\n➥ \`\`.ترسل لكل اعضاء السيرفر\`\`\n\n**${prefix} < رسالة > < الرسالة > < رول 👑 فقط >    **\n➥ \`\` .👑 لكي تبعت الرسالة للاعضاء عليك ان تمنشن رتبة\`\`\n\n**${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\`\n\n**${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        if(!args[1]) return message.channel.send(bcCommand); // Alpha Codes Server.
       
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]) || message.guild.roles.find(r => r.name.toLowerCase().includes(args[1]));
       
        if(args[1] === 'admins' || args[1] === 'members' || getRole) {
            var argsM = message.content.split(' ').slice(2).join(' ');
        }else if(args[1] !== 'admins' || args[1] !== 'members' || !getRole) { // Alpha Codes Server.
            var argsM = message.content.split(' ').slice(1).join(' ');
        }
       
        if(args[1] === 'admins' || args[1] === 'members') {
            if(args[1] === 'admins') {
                var admin = message.guild.members.filter(m => m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(admin.size <= 1) return message.channel.send(':no_entry: | No admins in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\``)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let adminMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${admin.size}** Admins?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                message.channel.send(adminMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                   
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${admin.size}** Admins ...`).then(msg => {
                            admin.forEach(async a => { // Alpha Codes Server.
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${a.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', a))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                a.send(bcMessage)
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${admin.size}** Admins!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete(); // Alpha Codes Server.
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                })
            }else if(args[1] === 'members') {
                var member = message.guild.members.filter(m => !m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(member.size === 0) return message.channel.send(':no_entry: | No members in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
                .setTimestamp() // Alpha Codes Server.
                .setFooter(message.author.tag, message.author.avatarURL)
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let memberMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${member.size}** Members?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
               
                message.channel.send(memberMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                    // Alpha Codes Server.
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${member.size}** Members ...`).then(msg => {
                            member.forEach(async m => {
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${m.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                m.send(bcMessage) // Alpha Codes Server.
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${member.size}** Members!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                }) // Alpha Codes Server.
            }
        }else if(getRole) {
            var membersRole = message.guild.members.filter(m => m.roles.has(getRole.id) && !m.user.bot);
            if(membersRole.size === 0) return message.channel.send(`:no_entry: | No members have **${getRole.name}** Role!`);
           
            let notArgsM = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n${prefix}bc <ROLE> <MESSAGE>**\n➥ \`\`Send the message to members have the role selected.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            if(!argsM) return message.channel.send(notArgsM);
           
            let membersRoleMsg = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${membersRole.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(membersRoleMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎')) // Alpha Codes Server.
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR);
               
                send.on('collect', r => {
                    msgB.delete(); // Alpha Codes Server.
                    message.channel.send(`:timer: | Wait some time to send the message to **${membersRole.size}** Members ...`).then(msg => {
                        membersRole.forEach(async mR => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${mR.user.username}`)
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', mR))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            mR.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${membersRole.size}** Members!`); // Alpha Codes Server.
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }else if(args[1] !== 'admins' && args[1] !== 'members' && !getRole) {
            var allB = message.guild.members.filter(m => !m.user.bot);
            if(allB.size === 1) return message.channel.send(`:no_entry: | No members in this server!`);
           
            let allMsg = new Discord.RichEmbed() // Alpha Codes Server.
            .setTitle(`:white_check_mark: **BroadCast Command.** (ALL)`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${allB.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            message.channel.send(allMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎'))
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR); // Alpha Codes Server.
               
                send.on('collect', r => {
                    msgB.delete();
                    message.channel.send(`:timer: | Wait some time to send the message to **${allB.size}** Members ...`).then(msg => {
                        allB.forEach(async m => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${m.user.username}`) // Alpha Codes Server.
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            m.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${allB.size}** Members!`);
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }
    }
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

 
.setDescription(`**<@${message.author.id}>لقد تم سحب العضو إليك ✅**`)
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







client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${"Egypt"} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});





var ss = 0;

client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("483960386693890058").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    });
    client6.user.setGame("HerpoPlex Community©", "https://twitch.tv/©");
});
// جميع الحقوق محفوظة لدى : ! M, ♪ ♡#6456




client.login(process.env.BOT_TOKEN);
