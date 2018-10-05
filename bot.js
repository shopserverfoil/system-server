const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

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
        if(!args) return message.channel.send(`**رسالة { كلامك :envelope: } ** ${prefix} `);
        
        let bcSure = new Discord.RichEmbed()
       .addField('**:mailbox_with_mail: هل انت متأكد انك تريد ارسال رسالتك **`)
        .setThumbnail(client.user.avatarURL)
        .setColor('GREEN')
        .setTimestamp(ها)
        .setFooter(message.author.tag, message.author.avatarURL)
        
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
                message.channel.send(`:timer: **يتم الان الارسال الى اعضاء السيرفر**`).then(msg => msg.delete(5000));
                msg.delete();
            })
            dontSendBC.on('collect', r => {
                msg.delete();
                message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
            });
        })
    }
});

















client.login(process.env.BOT_TOKEN);
