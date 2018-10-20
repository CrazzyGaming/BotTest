const Discord = require('discord.js');
const client = new Discord.Client();
import discord
from discord.ext import commands

client.on('ready', () => {
    console.log('I am ready!');
    
TOKEN = 'NTAzMjQyNjc2MzU1ODU4NDMy.Dq0JHA.Y13EmiJZFB9VkZldgUomuBw-x_0'
client = commands.Bot(command_prefix = 's')
    
});

client.on('message', message => {
    if (message.content === 'spy cine esti?') {
    	message.reply('Salut, sunt un Spy Bot creat de DariusOT.');
  	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
