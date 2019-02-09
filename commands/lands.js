const mtg = require('mtgsdk')

module.exports = {
    name: 'lands',
    description: 'Lands!',
    execute(message, args) {
        mtg.card.where({name: '"Plains"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Swamp"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Island"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Mountain"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"forest"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
    },
};