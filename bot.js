const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
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
