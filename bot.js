const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => {
    console.log('I am ready!');
});




client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return message.reply('** » الأمر في السيرفرات فقط . ** ')
      if (message.content.startsWith(prefix + 'bot')) {

  

				let embed = new Discord.RichEmbed()
					.setThumbnail(message.author.avatarURL)
					.setColor("#8A2BE2")
					.setDescription(`User info for: **${message.author.username}**`)
					.addField("Avatar:", `${message.author.avatarURL}`, true)
					.addField("Status:", message.author.presence.status, true)
					.addField("Bot: ", message.author.bot, true)
					.addField("In game: ", message.author.presence.game ? message.author.presence.game : "Not in game", true)
					.addField("Tag: ", message.author.tag, true)
					.addField("Discriminator:", message.author.discriminator, true)
					.setFooter(`Created at: ${message.author.createdAt}`)

				message.channel.send(embed)
      }
});

	
	
client.on('message', message => {
    if (message.content.startsWith("#help")) {
     let embed = new Discord.RichEmbed()
.setDescription(`**

برفكس البوت | Bot Prefix [ # ]
عدد لغات البوت | Bot Languages [ 40 ]
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Commands | الأوامر 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

#tr | للترجمة .
#languages | رؤية اللغات .

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

مثال | Example .
__[ #tr hi to arabic ]__

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Support Server : [ https://discord.gg/rxBnJv8 ]
Bot Link : [ http://bit.do/etpdC ]
By : Alpha Codes
__Translate Bot | 2018 ©.__
**`)
     .setFooter('Translate Bot.')
     message.author.send(embed)
	    
}
});
client.on('message', message => {
   if (message.content.startsWith("#languages")) {
     let embed = new Discord.RichEmbed()
.setDescription(`**
               
اللغات في البوت : - 
\`\`\`
Albanian//alphacodes
Amharic	//alphacodes
Arabic//alphacodes
Armenian	//alphacodes
Azeerbaijani//alphacodes
Basque	//alphacodes
Belarusian	//alphacodes
Bengali	//alphacodes
Bosnian	//alphacodes
Bulgarian	//alphacodes
Catalan	//alphacodes
Cebuano	//alphacodes
Chinese //alphacodes
Chinese //alphacodes
Corsican	//alphacodes//alphacodes
Croatian	//alphacodes
Czech	//alphacodes
Danish	//alphacodes
Dutch	//alphacodes
English	//alphacodes
Esperanto	//alphacodes
Estonian	//alphacodes
Finnish	//alphacodes
French	//alphacodes
Frisian	//alphacodes
Galician//alphacodes
Georgian//alphacodes
German//alphacodes
Greek//alphacodes
Gujarati//alphacodes
Haitian Creole//alphacodes
Hausa	//alphacodes
Hawaiian//alphacodes
Hebrew	//alphacodes
Hindi	//alphacodes
Hmong	//alphacodes
Hungarian	//alphacodes
Icelandic	//alphacodes
Igbo	//alphacodes
Indonesian	//alphacodes
Irish	//alphacodes
Italian//alphacodes
Japanese	//alphacodes
Javanese	//alphacodes
Kannada	//alphacodes
Kazakh	//alphacodes
Khmer//alphacodes
Korean	//alphacodes
Kurdish//alphacodes
Kyrgyz//alphacodes
Lao	//alphacodes
Latin//alphacodes
Latvian//alphacodes
Lithuanian	//alphacodes
Luxembourgish//alphacodes
Macedonian	//alphacodes
Malagasy	//alphacodes
Malay	//alphacodes
Malayalam	//alphacodes
Maltese	//alphacodes
Maori	//alphacodes
Marathi	//alphacodes
Mongolian	//alphacodes
Myanmar //alphacodes
Nepali	//alphacodes
Norwegian	
Nyanja 
Pashto	
Persian	
Polish	
Portuguese 
Punjabi	
Romanian	
Russian	
Samoan	
Scots Gaelic	
Serbian	
Sesotho	
Shona	
Sindhi	
Sinhala
Slovak	
Slovenian	
Somali	
Spanish	
Sundanese
Swahili	
Swedish	
Tagalog 
Tajik	
Tamil	
Telugu	
Thai
Turkish	
Ukrainian
Urdu	
Uzbek	
Vietnamese	
Welsh	
Xhosa	
Yiddish	
Yoruba	
Zulu	\`\`\`
**`)
.setFooter('Translate Bot.')
message.channel.send(embed)
}
});

 client.on('message', message => {
    if (message.content.startsWith("#tr")) {
      
        const translate = require('google-translate-api');
    

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`**يرجي كتابة الأمر بشكل صحيح\n مثال :\n \`\`\`#tr Love to ar\`\`\` . **`);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'The Best Alpha',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "- |",
                    value: `**- \`\`\`${finalToTrans}\`\`\` \n➠ To : ${language} \n - \`\`\` ${res.text} \`\`\` \n ملحوظة : يمكن أن لا تكون الترجمة صحيحة بنسبة مئة بالمئة .**`
                  }//**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\`
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Alpha Codes #The Best"
                }//alphacodes
              }//alphacodes
            });//alphacodes
    }).catch(err => {//alphacodes
        message.channel.send({//alphacodes
            embed: {//alphacodes
                description: '** ❌ لا يوجد لغة بهذا الأسم **',//alphacodes
                color: 0xE8642B//alphacodes
            }//alphacodes
        });//alphacodes
    });//alphacodes
    }//alphacodes
});//alphacodes
//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes//alphacodes
client.on('message', message => {
    if (message.author.bot) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('rbcall')){
 if(!message.author.id === 'your id') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("message",function(message) {
    if(message.content.startsWith(prefix + "stats")) {
           let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
    }
});


client.on('message', function(message) {
	const myID = "your id";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "pasiiauhsias")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {//alphacodes
           msg.delete(5000);//alphacodes
          message.delete(5000);//alphacodes
        });//alphacodes
    } else if(message.content.startsWith(prefix + "watch")) {//alphacodes
				        if(message.author.id !== myID) return;//alphacodes
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');//alphacodes
        client.user.setActivity(args, {type:'WATCHING'});//alphacodes
        message.channel.send(':white_check_mark: Done!').then(msg => {//alphacodes
           msg.delete(5000);//alphacodes
          message.delete(5000);//alphacodes
        });//alphacodes
    } else if(message.content.startsWith(prefix + "setavatar")) {//alphacodes
				        if(message.author.id !== myID) return;//alphacodes
        client.user.setAvatar(args);//alphacodes
        message.channel.send(':white_check_mark: Done!').then(msg => {//alphacodes
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');//alphacodes
           msg.delete(5000);//alphacodes
          message.delete(5000);//alphacodes
        });//alphacodes
    }//alphacodes
});//alphacodes






client.login(process.env.BOT_TOKEN);
