const mtg = require('mtgsdk')

function printCard(message, cardName) {
  mtg.card.where({name: cardName})
      .then(cards => {
        message.channel.send(cards[0].imageUrl)
      })
}
module.exports = {
    name: 'lands',
    description: 'Lands!',

    execute(message, args) {
        names = ['plains', 'island', 'swamp' , 'mountain', 'forest'];
        for(var i=0; i<names.length; i++) {
          printCard(message, names[i]);
        }
    },
};