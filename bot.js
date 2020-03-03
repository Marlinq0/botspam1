 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
client.login(process.env.BOT_TOKEN); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

})


client.on('ready',async () => {
console.log("Conneted to room..");
let g = client.guilds.get("211543198651121664"); // id server
let c = g.channels.get("684040797561290753");// id channel
if(c.type === 'voice') {
c.join();
}});


