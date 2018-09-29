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





     

if(cmd === `${prefix}tempmute`){

     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't do that.");
     let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

     let tempmuteUsage = new Discord.RichEmbed()
     .setDescription(`**Command:** $tempmute`)
     .setColor("RANDOM")
     .addField("Description:", `tempmute a member`)
     .addField("Usage:", `$tempmute [user] [limit] [reason]`)
     .setTitle(`${message.author.tag}`)
     .addField("Example:", `$tempute @Minepro 1s/1h/1d`);

     if(!tomute) return message.channel.send(tempmuteUsage);
     if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't mute this person.");
     let reason = args.slice(2).join(" ");
     if(!reason) return message.channel.send("Please supply a reason.");
   
     let muterole = message.guild.roles.find(`name`, "Muted");
     if(!muterole){
       try{
         muterole = await message.guild.createRole({
           name: "Muted",
           color: "#000000",
           permissions:[]
         })
         message.guild.channels.forEach(async (channel, id) => {
           await channel.overwritePermissions(muterole, {
             SEND_MESSAGES: false,
             ADD_REACTIONS: false
           });
         });
       }catch(e){
         console.log(e.stack);
       }
     }
     let mutetime = args[1];
     if(!mutetime) return message.channel.send("You didn't specify a time!");
     await(tomute.addRole(muterole.id));
     message.delete().catch(O_o=>{});

      message.channel.send(`**${tomute} has been muted**`)
   
     let muteembed = new Discord.RichEmbed()
     .setDescription(`Mute executed by ${message.author}`)
     .addField("Muted User:", tomute)
     .setColor("#008000")
     .addField("Muted in:", message.channel)
     .setFooter(`${message.createdAt}`)
     .addField("Length:", mutetime)
     .addField("Reason:", reason);
     let iunmute = new Discord.RichEmbed()
     .setDescription(`UnMute`)
     .setColor("#FF0000")
     .addField("UnMuted User:", `<@${tomute.id}>`)
     .setFooter(`${message.createdAt}`);

     let incidentschannel = message.guild.channels.find(`name`, "incidents");
     tomute.send(muteembed);
     incidentschannel.send(muteembed);
  
     setTimeout(function(){
       tomute.removeRole(muterole.id);
       incidentschannel.send(iunmute);
     }, ms(mutetime));
   
    }

  if(cmd === `${prefix}unmute`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't do that.");
    let unmute2 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let unmuteUsage = new Discord.RichEmbed()
    .setDescription(`**Command:** $unmute`)
    .setColor("RANDOM")
    .addField("Description:", `unmute a member`)
    .addField("Usage:", `$unmute [user]`)
    .setTitle(`${message.author.tag}`)
    .addField("Example:", `$unmute @Minepro`);
    if(!unmute2) return message.channel.send(unmuteUsage);

    let muterole2 = message.guild.roles.find(`name`, "Muted");
    unmute2.removeRole(muterole2.id);
    if(!unmute2.roles.has(muterole2.id)) return message.channel.send("This user is not muted.");

    let unmuteembed = new Discord.RichEmbed()
    .setDescription(`**You have been Unmuted**`)
    .setColor("RANDOM")
    .addField("Server:", `${message.guild.name}`)
    .addField("UnMuted By:", `${message.author.tag}`)
    .setFooter(`${message.createdAt}`);

    unmute2.send(unmuteembed);
    message.channel.send(`**${unmute2} was successfully Unmuted**`);
    message.delete();
  }







client.login(process.env.BOT_TOKEN);
