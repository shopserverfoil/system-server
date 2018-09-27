client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('489800301021233163');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`4 EVER Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});

client.login(process.env.BOT_TOKEN);
