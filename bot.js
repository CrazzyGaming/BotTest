const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('/skemavanguard', {type: 'WATCHING'});
    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === 'spy cine esti?') {
    	message.reply('Salut, sunt un Spy Bot creat de DariusOT.');
  	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
