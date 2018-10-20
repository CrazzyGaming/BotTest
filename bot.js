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

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')
    await client.change_presence(game=discord.Game(name="/skemavanguard"))




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
