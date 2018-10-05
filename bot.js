const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

    console.log(`Logged in as [server 4EVER]`);

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

});

// جميع الحقوق محفوظة لدى :@┃HEART┃ ❦  4EVER#9512 













client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${"EGYPT"} ]**`,true)
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

 













client.on('message', message => {

        var prefix = ''; // هنا تقدر تغير البرفكس

    var command = message.content.split(" ")[0];

    if(command == prefix + 'رسالة') { // الكوماند !bc

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





























client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "اسكت")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return message.reply('# - ملحوظة : يجب ان تقوم بمنشن شخص معين .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('# - ملحوظة : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('# - ملحوظه : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('# - ملحوظه : لا يمكنك ان تعطي ميوت لنفسك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration) return message.reply('# - ملحوظه : يجب ان تضع وقت .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration)) return message.reply('# - ملحوظه : يجب تحديد وقت زمني صحيح').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "غير معروف .";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('# - لقد تم أعطائك ميوت .')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)
 
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
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!mention) return message.reply('# - ملحوظه : يجب منشن شخص لفك الميوت عنهه .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});
























const Discord = require('discord.js')

const ytdl = require("ytdl-core");

const { Client, Util } = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const client = new Discord.Client();

 

/*

البكجآت

npm install discord.js

npm install ytdl-core

npm install get-youtube-id

npm install youtube-info

npm install simple-youtube-api

npm install queue

*/

 

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[Codes] ${client.users.size}`)

    client.user.setStatus("idle")

});

client.on('ready', () => {

     client.user.setActivity("you",{type: 'WATCHING'});

 

});

const prefix = "#"

client.on('message', async msg => {

    if (msg.author.bot) return undefined;

    if (!msg.content.startsWith(prefix)) return undefined;

    const args = msg.content.split(' ');

    const searchString = args.slice(1).join(' ');

    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';

    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(" ")[0];

    command = command.slice(prefix.length)

    if (command === `play`) {

        const voiceChannel = msg.member.voiceChannel;

        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');

        const permissions = voiceChannel.permissionsFor(msg.client.user);

        if (!permissions.has('CONNECT')) {

            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');

        }

        if (!permissions.has('SPEAK')) {

            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');

        }

 

        if (!permissions.has('EMBED_LINKS')) {

            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")

            }

 

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

            const playlist = await youtube.getPlaylist(url);

            const videos = await playlist.getVideos();

            for (const video of Object.values(videos)) {

                const video2 = await youtube.getVideoByID(video.id);

                await handleVideo(video2, msg, voiceChannel, true);

            }

            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);

        } else {

            try {

 

                var video = await youtube.getVideo(url);

 

            } catch (error) {

                try {

                                            var fast = {};

                    var videos = await youtube.searchVideos(searchString, 10);

                    let index = 0;

                    const embed1 = new Discord.RichEmbed()

                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :

${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)

                    .setFooter(`${msg.guild.name}`)

                    msg.channel.sendEmbed(embed1).then(message =>{

 

                        message.delete(15000)

 

                    });

                    try {

                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {

                            maxMatches: 1,

                            time: 20000,

                            errors: ['time']

                        })

 

                        }catch(err) {

                        console.error(err);

                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');

                        }

                    const videoIndex = parseInt(response.first().content);

                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

                } catch (err) {

                    console.error(err);

                    return msg.channel.send(':x: لا يتوفر نتآئج بحث ');

                }

        }

 

            return handleVideo(video, msg, voiceChannel);

        }

    } else if (command === `skip`) {

        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');

        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');

        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');

        return undefined;

    } else if (command === `stop`) {

        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');

        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');

        serverQueue.songs = [];

        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');

        return undefined;

    } else if (command === `vol`) {

        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');

        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');

        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);

        serverQueue.volume = args[1];

        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);

        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);

    } else if (command === `np`) {

        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');

        const embedNP = new Discord.RichEmbed()

    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)

        return msg.channel.sendEmbed(embedNP);

    } else if (command === `replay`) {

        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');

        const embedNP = new Discord.RichEmbed()

    .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)

    msg.channel.send({embed: embedNP})

     return handleVideo(video, msg, msg.member.voiceChannel);

 

    } else if (command === `queue`) {

        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');

        let index = 0;

        const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**

${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}

**الان يتم تشغيل** ${serverQueue.songs[0].title}`)

        return msg.channel.sendEmbed(embedqu);

    } else if (command === `pause`) {

        if (serverQueue && serverQueue.playing) {

            serverQueue.playing = false;

            serverQueue.connection.dispatcher.pause();

            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');

        }

        return msg.channel.send('لا يوجد شيء حالي ف العمل.');

    } else if (command === "resume") {

        if (serverQueue && !serverQueue.playing) {

            serverQueue.playing = true;

            serverQueue.connection.dispatcher.resume();

            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');

        }

        return msg.channel.send('لا يوجد شيء حالي في العمل.');

    }

 

    return undefined;

async function handleVideo(video, msg, voiceChannel, playlist = false) {

    const serverQueue = queue.get(msg.guild.id);

    const song = {

        id: video.id,

        title: Util.escapeMarkdown(video.title),

        url: `https://www.youtube.com/watch?v=${video.id}`,

        time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,

        eyad:`${video.thumbnails.high.url}`,

        best:`${video.channel.title}`,

        bees:`${video.raw.snippet.publishedAt}`,

        shahd:`${video.raw.kind}`,

        zg:`${video.raw.snippet.channelId}`,

        views:`${video.raw.views}`,

        like:`${video.raw.likeCount}`,

        dislike:`${video.raw.dislikeCount}`,

        hi:`${video.raw.id}`

    };

    if (!serverQueue) {

        const queueConstruct = {

            textChannel: msg.channel,

            voiceChannel: voiceChannel,

            connection: null,

            songs: [],

            volume: 5,

            playing: true

        };

        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {

            var connection = await voiceChannel.join();

            queueConstruct.connection = connection;

            play(msg.guild, queueConstruct.songs[0]);

        } catch (error) {

            console.error(`I could not join the voice channel: ${error}`);

            queue.delete(msg.guild.id);

            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);

        }

    } else {

        serverQueue.songs.push(song);

        console.log(serverQueue.songs);

        if (playlist) return undefined;

        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);

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

    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))

        .on('end', reason => {

            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');

            else console.log(reason);

            serverQueue.songs.shift();

            play(guild, serverQueue.songs[0]);

        })

        .on('error', error => console.error(error));

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

        fetchVideoInfo(`${song.hi}`, function (err, fuck) {

  if (err) throw new Error(err);

  console.log(fuck);

      const yyyy = {}

  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {

    like: `${fuck.likeCount}`,

    dislike: `${fuck.dislikeCount}`

  }

    serverQueue.textChannel.send({embed : new Discord.RichEmbed()

  .setTitle(`**${fuck.title}**`)

  .setURL(fuck.url)

  .addField('Time The Video :' , `${song.time}`, true)

  .addField('Channel Name :' , `${song.best}`, true)

  .addField('Channel ID :' , `${song.zg}`, true)

  .addField('Video Created at :' , `${fuck.datePublished}`, true)

  .addField('Views :' , `${fuck.views}`, true)

  .addField('Like👍 :' , `${fuck.likeCount}`, true)

  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)

  .addField('comments :' , `${fuck.commentCount}`, true)

    .setImage(`${song.eyad}`)

    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')

    .setColor('#ff0000')

    .setTimestamp()

    }).then(love => {

        love.react('👍').then(r=>{

        love.react('👎').then(r =>{

        love.react('🙌').then(r=> {

    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;

    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;

    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

 

    let ll = love.createReactionCollector(likee , {max:5});

    let dd = love.createReactionCollector(dislikee , {max:5});

    let cn = love.createReactionCollector(cnn , {max:5});

 

            ll.on("collect", r => {

              yyyy[msg.guild.id].like++;

    love.edit({embed : new Discord.RichEmbed()

  .setTitle(`**${fuck.title}**`)

  .setURL(fuck.url)

  .addField('Time The Video :' , `${song.time}`, true)

  .addField('Channel Name :' , `${song.best}`, true)

  .addField('Channel ID :' , `${song.zg}`, true)

  .addField('Video Created at :' , `${fuck.datePublished}`, true)

  .addField('Views :' , `${fuck.views}`, true)

  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)

  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)

  .addField('comments :' , `${fuck.commentCount}`, true)

    .setImage(`${song.eyad}`)

    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')

    .setColor('#ff0000')

    .setTimestamp()

});

    })

 

    dd.on("collect", r => {

      yyyy[msg.guild.id].dislike++;

    love.edit({embed : new Discord.RichEmbed()

  .setTitle(`**${fuck.title}**`)

  .setURL(fuck.url)

  .addField('Time The Video :' , `${song.time}`, true)

  .addField('Channel Name :' , `${song.best}`, true)

  .addField('Channel ID :' , `${song.zg}`, true)

  .addField('Video Created at :' , `${fuck.datePublished}`, true)

  .addField('Views :' , `${fuck.views}`, true)

  .addField('Like👍 :' , `${fuck.likeCount}`, true)

  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)

  .addField('comments :' , `${fuck.commentCount}`, true)

    .setImage(`${song.eyad}`)

    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')

    .setColor('#ff0000')

    .setTimestamp()

});

})

    cn.on("collect", r => {

    love.edit({embed : new Discord.RichEmbed()

  .setTitle(`**${fuck.title}**`)

  .setURL(fuck.url)

  .addField('Time The Video :' , `${song.time}`, true)

  .addField('Channel Name :' , `${song.best}`, true)

  .addField('Channel ID :' , `${song.zg}`, true)

  .addField('Video Created at :' , `${fuck.datePublished}`, true)

  .addField('Views :' , `${fuck.views}`, true)

  .addField('Like👍 :' , `${fuck.likeCount}`, true)

  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)

  .addField('comments :' , `${fuck.commentCount}`, true)

    .setImage(`${song.eyad}`)

    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')

    .setColor('#ff0000')

    .setTimestamp()

});

})

})

})

})

})

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

    client.channels.get("490697480095268864").join();

    });









client.login(process.env.BOT_TOKEN);
