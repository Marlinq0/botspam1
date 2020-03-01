 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513023117006995471")
setInterval(function() {
channel.send(`mmmmmmmmmmmmmmmmmmmmmmmmm mahmod pro xd pro xdxdxdxdxdxdxdxdxd`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == ".1s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 
