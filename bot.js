const Discord = require('discord.js');
const fs = require('fs')
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

    client.channels.get("490147934919458817").join();

    });
















  

  client.on('message', message => {

    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400

    }).then(invite =>

      message.author.sendMessage(invite.url)

    )

  message.channel.send("[ **تم أرسال الرابط برسالة خاصة** :mailbox_with_mail: ]").then(msg => msg.delete(3500));

message.author.send(`**عدد استخدمات الرابط : 5 : مدة الرابط [ يوم ]**`)



    }

});

  

 















client.on('message', message => {

    var prefix = "";

if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'اسحب')) {

 if (message.member.hasPermission("MOVE_MEMBERS")) {

 if (message.mentions.users.size === 0) {

 return message.channel.send("" +prefix+ "** يجب أن تمنشن العضو  ❌**").then(msg => msg.delete(5000));

}

if (message.member.voiceChannel != null) {

 if (message.mentions.members.first().voiceChannel != null) {

 var authorchannel = message.member.voiceChannelID;

 var usermentioned = message.mentions.members.first().id;

var embed = new Discord.RichEmbed()

 .setTitle("Succes!")

 

 

var embed = new Discord.RichEmbed()

 

message.channel.send(`**<@${message.member.id}> لقد تم سحب العضو إليك ✅**`).then(msg => msg.delete(5000));

 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))

message.guild.members.get(usermentioned).send(embed)

} else {

message.channel.send("** أن العضو ليس بروم صوتي ❌**").then(msg => msg.delete(5000));

}

} else {

 message.channel.send("**أنت لست متواجد في روم صوتي لسحب العضو إليك ❌**").then(msg => msg.delete(5000));

}

} else {

message.react("")

 }}});









































let sw = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))

 

    client.on('message', message => {

const Canvas = require("canvas") // npm i canvas

const fs = require("fs") // npm i fs

 

        let mothed = ['text', 'embed', 'image'];

        let sets = message.content.split(" ").slice(1).join(" ")

        let style = message.content.split(" ").slice(2).join(" ")

        let stym = message.content.split(" ").slice(3).join(" ")

        let msz = message.content.split(" ").slice(2).join(" ")

        let ch = message.content.split(" ").slice(2).join(" ")

        let r = message.content.split(" ").slice(4).join(" ")

 

 

        if(message.content.startsWith(prefix + "setWlc")) {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")

            if(!sw[message.guild.id]) sw[message.guild.id] = {

                cha: "welcome",

                msz: "Welcome Bro",

                styler: "text"

            };

 

            if(!sets) {

                message.channel.send(`**Usage:

            ${prefix}setWlc style <text, image, embed>

            ${prefix}setWlc msg <message>

            ${prefix}setWlc channal <channel name>**`)

            }

 

            if(!mothed) {

                message.channel.send(`**Usage: ${prefix}setWlc style <text, imgae, embed>**`)

            }

 

            if(message.content === prefix + 'setWlc style image') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")

                sw[message.guild.id].styler = 'image'

                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)

            }

 

            if(message.content === prefix + 'setWlc style embed') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")

                 sw[message.guild.id].styler = 'embed'

                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)            }

 

            if(message.content === prefix + 'setWlc style text') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")

                 sw[message.guild.id].styler = 'text'

                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)

            }

 

        }

 

        if(message.content.startsWith(prefix + "setWlc msg")) {

            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need `Manage Messages` permission**")

            if(!msz) {

                message.channel.send("Usage: <setWlc msg <message>")

            } else {

                message.channel.send(`**Your server welcome message has been changed to __${msz}__**`)

                sw[message.guild.id].msk = msz

            }

        }

 

        if(message.content.startsWith(prefix + "setWlc channel")) {

            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")

            if(!ch) {

                message.channel.send("Usage: <setWlc channel <channel name>")

            }

            let chn = message.guild.channels.find("name", ch)

            if(!chn) {

                message.channel.send("**I can't find this channel**")

            }

            else {

                 sw[message.guild.id].cha = chn.name

                 message.channel.send(`**Your server welcome channel has been changed to __${chn.name}__**`)

                 }

        }

 

        fs.writeFile('./setWlc.json', JSON.stringify(sw), (err) => {

if (err) console.error(err);

})

})

 

 

client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find("name", sw[member.guild.id].cha)

 

    if(sw[member.guild.id].styler === "text") {

        channel.sendMessage(`<@${member.user.id}>, ${sw[member.guild.id].msk}`)

    }

 

    if(sw[member.guild.id].styler === "embed") {

 

        const embed = new Discord.RichEmbed()

        .setTitle("Member joind.")

        .setColor("GREEN")

        .setThumbnail(member.user.avatarURL)

        .setDescription(`**${sw[member.guild.id].msk}**`)

        .addField("**Member name**", `[<@${member.user.id}>]`,true)

        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)

        channel.sendMessage(`<@${member.user.id}>`)

        channel.sendEmbed(embed)

    }

 

    if(sw[member.guild.id].styler === "image") {

        if (member.user.bot) return;

const w = ['./image.png'];

        let Image = Canvas.Image,

            canvas = new Canvas(749, 198),

            ctx = canvas.getContext('2d');

        ctx.patternQuality = 'bilinear';

        ctx.filter = 'bilinear';

        ctx.antialias = 'subpixel';

        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';

        ctx.shadowOffsetY = 2;

        ctx.shadowBlur = 2;

        ctx.stroke();

        ctx.beginPath();

 

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 749, 198);

 

})

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                 if (err) return console.log(err);

 

ctx.font = '35px Aeland';

                        ctx.fontSize = '40px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";

                        ctx.fillText(" Welcome to " + member.guild.name , 440, 25);

 

                        //ur name

                        ctx.font = '40px Impact';

                        ctx.fontSize = '48px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 420, 100);

 

                         ctx.font = '30px Impact';

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";

                        ctx.fillText(sw[member.guild.id].msk, 410, 170);

 

 

                        //Avatar

                        let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(115, 100, 90, 0, Math.PI*2);

                                 ctx.closePath();

                                 ctx.clip();

                                 ctx.drawImage(ava, 5, 5, 200, 200);

                                 channel.sendMessage(`<@${member.user.id}>`)

        channel.sendFile(canvas.toBuffer())

 

 

 

})

})

 

    }

 

})



client.login(process.env.BOT_TOKEN);
