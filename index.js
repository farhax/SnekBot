// load configuration
const { prefix, token } = require('./config.json');


// require the discord.js module
const Discord = require('discord.js');

const SnekName = require('./snekname');

// create a new Discord client
const client = new Discord.Client();


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		message.channel.send('Hello. I am SnekBot \nI currently only support following commands:\nping\nbeep\nsnekname <argument>');
	}
	else if (command === 'ping') {
		message.channel.send('Pong.');
	}
	else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	else if (command === 'snekname') {
		const snekName = SnekName.getName(args);
		message.channel.send(snekName);
	}
});

// login to Discord with your app's token
client.login(token);
