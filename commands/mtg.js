const mtg = require('mtgsdk')

module.exports = {
    name: 'mtg',
    description: 'MTG!',
    execute(message, args) {
        mtg.card.where({name:`${args.join(' ')}`})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
    },
};