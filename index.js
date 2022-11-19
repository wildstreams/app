const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username} has connected!`);
});

var player = require('play-sound')(opts = {})

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '!hello') {
        client.say(channel, `@${user.username}, hello!`);
    }

    if(message == '!roll') {
        client.say(channel, `@${user.username} rolled a ${Math.floor(Math.random() * 6) + 1}!`);
    }

    if(message == "!moo") {
        client.say(channel, `@${user.username}, wants to moo!`);
        player.play('C:/Users/sam/wildstreams/moo.mp3', function(err){
            if (err) console.log(err)
        })
    }

    if(message == "!oink") {
        client.say(channel, `@${user.username}, wants to oik!`);
        player.play('C:/Users/sam/wildstreams/oink.mp3', function(err){
            if (err) console.log(err)
        })
    }

    if(message == "!woof") {
        client.say(channel, `@${user.username}, wants to woof!`);
        player.play('C:/Users/sam/wildstreams/woof.mp3', function(err){
            if (err) console.log(err)
        })
    }

    if(message == "!meow") {
        client.say(channel, `@${user.username}, wants to meow!`);
        player.play('C:/Users/sam/wildstreams/meow.mp3', function(err, stdout, stderr) {
            if (err) console.log(err)
            console.log(stdout)                                                                                               
            console.log(stderr)
         });
    }
});