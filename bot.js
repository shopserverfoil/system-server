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


var ss = 0;

client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4 EVER Online : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4EVER Online : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("483960386693890058").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("489800301021233163").edit({
            name : "4 EVER Online : [" + ss+ "]"
        })
    });
    client.user.setGame(" Community©", "https://twitch.tv/©");
});





client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("** :poop:  ????? ????? ??? ?? ??**");
    }
});


client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '483960386693890058'; // <=============== ???? ??????? ???
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});




client.on('message', msg => {
  if (msg.content === '????????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '???') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '??????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '??????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '???????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '????????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '?????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '?????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '???') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '???????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '?????????') {      
    msg.react("????")
    msg.channel.send("????")
  }
});





client.on('message', message => {
    var prefix = "";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + '???')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});












client.login(process.env.BOT_TOKEN);
