const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    channel = client.channels.find('name', 'Cocioaba del Darius');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});

client.on('message', message => {
  //...
});

    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === 'spy cine esti?') {
    	message.reply('Salut, sunt un Spy Bot creat de DariusOT.');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
