const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const { prefix, token } = require('./config.json');
const mtg = require('mtgsdk');
const client = new Discord.Client();

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

	if (message.content === '!ping'){
		message.channel.send('Pong!');
	} else if (command === 'cat') {
		const { body } = await snekfetch.get('https://aws.random.cat/meow');

		message.channel.send(body.file);

 	} else if (command === 'mtg'){
		mtg.card.all({name: `${args.join(' ')}`, pageSize: 1})
		.on('data', card => {
			message.channel.send(card.imageUrl)
		})
 	}
 	else if (command === 'card'){
 		mtg.card.where({ name: `${args.join(' ')}` })
 		.then(cards =>{
 			message.channel.send(`${cards[0].name}\n ${cards[0].manaCost} | ${cards[0].cmc}\n ${cards[0].type}\n ${cards[0].text}\n ${cards[0].power} / ${cards[0].toughness}`)
 		})
 	}
});


client.login(token);
