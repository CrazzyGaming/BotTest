const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === 'spy cine esti?') {
    	message.reply('Salut, sunt un Spy Bot creat de DariusOT.');
  	}
});

client.on('message', message => {
  if (message.content === 'splay') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
