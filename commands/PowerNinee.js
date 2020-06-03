const mtg = require('mtgsdk')

function printCard(message, cardName) {
  mtg.card.where({name: cardName})
      .then(cards => {
        message.channel.send(cards[0].imageUrl)
      })
}
module.exports = {
    name: 'powernine',
    description: 'pownernine',

    execute(message, args) {
        names = ['Black Lotus', 'Ancestral Recall', 'Mox Emerald' , 'Mox Jet', 'Mox Pearl','Mox Ruby', 'Mox Sapphire', 'Timetwister', 'Time Walk', 'Island'];
        for(var i=0; i<names.length; i++) {
          printCard(message, names[i]);
        }
    },
};