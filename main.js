const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('bot is Online!');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'status')
        message.channel.send('DARK KNIGHT STATUS! \n 	​ \n Dark Knight ESP 2.0: Working \n Dark Knight ESP + Aimbot 2.2: Use At Own Risk \n Dark Knight MultiHack: Spoofer, Cleaner Working \n 	 \nEven if hacks are working, Use At Own Risk');

    if (command === 'help'){
            message.channel.send('All Commands\n	\n -help	displays all commands available\n -status		gives Current status of Hacks\n 	 \n More features will be added later!');


    }
});









client.login('ODMyOTY0NTgyNjMyNTg3MzE1.YHrcuA.7YlRgrBiWpCvIpWhM8GCZcSVooQ');