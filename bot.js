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

 



client.on('message', MEGA => { 
  var sender = MEGA.author
  if(!MEGA.guild) return
  if(!sw[MEGA.guild.id]) sw[MEGA.guild.id] = {
  onoff: 'Off',
  ch:    'Welcome',
  msk:   'Welcome'
}
        if(MEGA.content.startsWith(prefix + `set-wlc`)) {        
        let perms = MEGA.member.hasPermission(`MANAGE_CHANNELS`)
        if(!perms) return MEGA.channel.send('**You need `Manage Channels` permission**')
        let args = MEGA.content.split(" ").slice(1)
        if(!args.join(" ")) return MEGA.reply(`
  ** ${prefix}set-wlc toggle **
  ** ${prefix}set-wlc set [Channel Name] **
  ** ${prefix}set-wlc msg [Welcome MEGA] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        let state = args[0]
        if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return MEGA.reply(`
 ** ${prefix}set-wlc toggle **
 ** ${prefix}set-wlc set [Channel Name] **
 ** ${prefix}set-wlc msg [Welcome MEGA] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        if(state.trim().toLowerCase() == 'toggle') { 
        if(sw[MEGA.guild.id].onoff === 'Off') return [MEGA.channel.send(`**Welcome MEGA Is **on** !**`), sw[MEGA.guild.id].onoff = 'On']
        if(sw[MEGA.guild.id].onoff === 'On')  return [MEGA.channel.send(`**Welcome MEGA Is **off** !**`), sw[MEGA.guild.id].onoff = 'Off']
}
        if(state.trim().toLowerCase() == 'set') {
        let newch = MEGA.content.split(" ").slice(2).join(" ")
        if(!newch) return MEGA.reply(`${prefix}set-wlc set [Channel name]`)
        if(!MEGA.guild.channels.find(`name`,newch)) return MEGA.reply(`**I Cant Find This Channel.**`)
            sw[MEGA.guild.id].ch = newch
            MEGA.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
} 
        if(state.trim().toLowerCase() == 'msg') {
        let newmsg = MEGA.content.split(" ").slice(2).join(" ")
        if(!newmsg) return MEGA.reply(`${prefix}set-wlc msg [New MEGA]`)
            sw[MEGA.guild.id].msk = newmsg
            MEGA.channel.send(`**Welcome MEGA Has Been Changed to ${newmsg}.**`)
} 
}
        if(MEGA.content === prefix + 'set-wlc info') {
        let perms = MEGA.member.hasPermission(`MANAGE_GUILD`) 
        if(!perms) return MEGA.reply(`You don't have permissions.`)
        var embed = new Discord.RichEmbed()
        .addField(`Welcome MEGA  `, `
On/Off  : __${sw[MEGA.guild.id].onoff}__
Channel : __${sw[MEGA.guild.id].ch}__
MEGA : __${sw[MEGA.guild.id].msk}__`)
        .setColor(`BLUE`)
            MEGA.channel.send({embed})
}
        fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
        if (err) console.error(err)
});
})
//by MEGA





client.login(process.env.BOT_TOKEN);
