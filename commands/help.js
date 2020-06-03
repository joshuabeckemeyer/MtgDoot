module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, args) {
        message.channel.send(`
Commands!
|>help: Get list of Commands
|>card <enter card name here>: get text of the card
|>mtg <enter card name here>: get image of the card
|>booster: get a pack of the latest set in text
|>lands: Get images of the basic lands
|>shocklands: Get images of all the Shocklands
|>powernine
        	`);
    },
};