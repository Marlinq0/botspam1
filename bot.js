 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
client.login(process.env.BOT_TOKEN); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
let channel = client.channels.get("682211432019787783")
    setInterval(function() {
channel.send(`سبحان الله`);
}, 6000)
  setInterval(function() {
channel.send(`How are You`+Math.random());
}, 30000)
setInterval(function() {
channel.send(`Im fine`);
}, 3500)
setInterval(function() {
channel.send(`You are not good with me why ?`);
}, 40000)
setInterval(function() {
channel.send(`becaues your ferless and i don't like you`);
}, 42000)
setInterval(function() {
channel.send(`WTF, Fack you`);
}, 45000)
setInterval(function() {
channel.send(`الله يسامحك`);
}, 46000)
setInterval(function() {
channel.send(`الله يوفق حموود و يعينه و يربي يوفقه انشاءالله`);
}, 50000)
setInterval(function() {
channel.send(`يرب عافي حمود و وفقه ف دنياه و اخرته يربي توفقه`);
}, 55000)
setInterval(function() {
channel.send(`How are You`);
}, 3000)
setInterval(function() {
channel.send(`Im fine`);
}, 3500)
setInterval(function() {
channel.send(`You are not good with me why ?`);
}, 4000)
setInterval(function() {
channel.send(`becaues your ferless and i don't like you`);
}, 4200)
  setInterval(function() {
channel.send(`#profile`);
}, 6000)
})

client.on('ready',async () => {
console.log("Conneted to room..");
let g = client.guilds.get("211543198651121664"); // id server
let c = g.channels.get("244074360476794880");// id channel
if(c.type === 'voice') {
c.join();
}});


