const Discord = require('discord.js');
const client = new Discord.Client();
from discord.ext import commands
from discord.ext.commands import Bot
from discord.voice_client import VoiceClient
import asyncio

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'spy cine esti?') {
    	message.reply('Salut, sunt un Spy Bot creat de DariusOT.');
  	}
});

bot = commands.Bot(command_prefix="|")
client = discord.Client()

async def on_ready():
    print ("Ready")

@bot.command(pass_context=True)
async def join(ctx):
    author = ctx.message.author
    channel = author.voice_channel
    await bot.join_voice_channel(channel)



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
