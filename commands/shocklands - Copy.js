const mtg = require('mtgsdk')

module.exports = {
    name: 'shocklands',
    description: 'ShockLands!',
    execute(message, args) {
        mtg.card.where({name: '"Hallowed Fountain"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"sacred foundry"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Watery Grave"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Overgrown Tomb"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Stomping Ground"'})
          .then(cards => {
          	message.channel.send(cards[0].imageUrl)
          })
          mtg.card.where({name: '"Steam Vents"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Godless Shrine"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Blood Crypt"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Temple Garden"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
        mtg.card.where({name: '"Breeding Pool"'})
          .then(cards => {
            message.channel.send(cards[0].imageUrl)
          })
    },
};