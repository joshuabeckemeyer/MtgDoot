const mtg = require('mtgsdk')
const Discord = require('discord.js');

module.exports = {
    name: 'card',
    description: 'Card!',
    execute(message, args) {
        mtg.card.where({ name: `${args.join(' ')}` })
 		.then(cards =>{
 			
 			const embed = new Discord.RichEmbed()
			    .setColor('#9e4f24')
			    .setTitle(cards[0].name)
			    .addField('Mana Cost', cards[0].manaCost)
			    .addField('Type', cards[0].type)
			    .setFooter(cards[0].text);

			message.channel.send(embed);
 		})
    },
};