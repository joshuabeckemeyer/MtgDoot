const fs = require('fs');
const Discord = require('discord.js');

const snekfetch = require('snekfetch');
const { prefix, token } = require('./config.json');

const mtg = require('mtgsdk');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;

client.on('ready', () => {
	console.log('Ready');
});

client.on('error', err => {
  console.error(err)
});

client.on('message', async message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content === '>ping'){
		client.commands.get('ping').execute(message, args);

 	} else if (command === 'mtg'){
		client.commands.get('mtg').execute(message, args);

 	} else if (command === 'card'){

 		client.commands.get('card').execute(message, args);

 	} else if (command === 'booster'){
 		const { body } = await snekfetch.get(`https://api.magicthegathering.io/v1/sets/THB/booster`).query({ set: args.join(' ')});

 		message.channel.send(`

| ${body.cards[0].name} |${body.cards[0].manaCost} ${body.cards[0].cmc} ${body.cards[0].type}\n
| ${body.cards[1].name} |${body.cards[1].manaCost} ${body.cards[1].cmc} ${body.cards[1].type}\n
| ${body.cards[2].name} |${body.cards[2].manaCost} ${body.cards[2].cmc} ${body.cards[2].type}\n
| ${body.cards[3].name} |${body.cards[3].manaCost} ${body.cards[3].cmc} ${body.cards[3].type}\n
| ${body.cards[4].name} |${body.cards[4].manaCost} ${body.cards[4].cmc} ${body.cards[4].type}\n
| ${body.cards[5].name} |${body.cards[5].manaCost} ${body.cards[5].cmc} ${body.cards[5].type}\n
| ${body.cards[6].name} |${body.cards[6].manaCost} ${body.cards[6].cmc} ${body.cards[6].type}\n
| ${body.cards[7].name} |${body.cards[7].manaCost} ${body.cards[7].cmc} ${body.cards[7].type}\n
| ${body.cards[8].name} |${body.cards[8].manaCost} ${body.cards[8].cmc} ${body.cards[8].type}\n
| ${body.cards[9].name} |${body.cards[9].manaCost} ${body.cards[9].cmc} ${body.cards[9].type}\n
| ${body.cards[10].name} |${body.cards[10].manaCost} ${body.cards[10].cmc} ${body.cards[10].type}\n
| ${body.cards[11].name} |${body.cards[11].manaCost} ${body.cards[11].cmc} ${body.cards[11].type}\n
| ${body.cards[12].name} |${body.cards[12].manaCost} ${body.cards[12].cmc} ${body.cards[12].type}\n
| ${body.cards[13].name} |${body.cards[13].manaCost} ${body.cards[13].cmc} ${body.cards[13].type}\n

 			`);


 	} else if (message.content === 'beep'){

		client.commands.get('beep').execute(message, args);

 	} else if (message.content === 'lands'){
 		client.commands.get('lands').execute(message, args);
 		
 	} else if (message.content === 'shocklands'){
 		client.commands.get('shocklands').execute(message, args);
 		
 	} else if (message.content === 'help'){
 		client.commands.get('help').execute(message, args);
 	} else if (message.content === 'powernine'){
 		client.commands.get('powernine').execute(message, args);
 	}

});


client.login(token);
