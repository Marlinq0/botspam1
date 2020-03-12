
 var userTickets = new Map();
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const db = require("quick.db")
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
const premium = ["470673278709530634"];
const random = require('random');
const jsonfile = require('jsonfile');





client.on('ready', () => {
  if(client.user.in){
   
   }
    setInterval(function() {
  client.user.setActivity("L ")
  }, 100);
      setInterval(function() {
  client.user.setActivity("Li ")
  }, 200);
      setInterval(function() {
  client.user.setActivity("Lit ")
  }, 300);
      setInterval(function() {
  client.user.setActivity("Lithu")
  }, 400);
        setInterval(function() {
  client.user.setActivity("Lithum")
  }, 0);
    client.user.setActivity("Lithum")
console.log(`
? | Name ${client.user.tag}
? | Servers ${client.guilds.size}
? | Users ${client.users.size}
? | Id ${client.user.id}
By : NawaffDev & Hamoood ~ Marlinq`);
});



let TAG = 'Li'
client.on('userUpdate',(oldU,newU) =>{
let g = client.guilds.get('662624699657879562');let Member = g.members.get(newU.id);if(!g || !Member) return;
if(!oldU.username.includes(TAG)) {
if(newU.username.includes(TAG)) {let r = g.roles.get('665415402251354112');if(!r) return;Member.addRole(r)}
}if(oldU.username.includes(TAG)) {
if(!newU.username.includes(TAG)) {let r = g.roles.get('665415402251354112');if(!r) return;Member.removeRole(r)}}
});



const adminprefix = "$";//بريفكس بوتك
const owners = ['257804689268146177','662780495230402643'] //الايدي بتاع اونر البوت
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!owners.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}تـم تـغـيـر بـلانـيـق الـى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}تـم تـغـيـر اســم الـى**`)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}تــم تــغـيــر صــور الـى **`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**${argresult}تــم تـغــيــر حــالـه الــى **`)
}
});

const hastebin = require("hastebin-gen");
client["on"]("message", async m => {
  if(!m["guild"]|m["author"]["bot"])return
  if(m["content"]["startsWith"](prefix+"save")) {
    let topush=[]
    m["channel"].fetchMessages()["then"](messages => {
      var inorder = messages.array().sort((a, b) => {return a["createdAt"] - b["createdAt"]})
      var tosave = inorder.splice(0, 100)
      for(const data of tosave) {
      topush["push"](`[${data["author"]["tag"]}"] Id \`${data["author"]["id"]}\` Messages ${!data["content"]?"embed":data["content"]}`);
    }
      hastebin(topush.join("\n\n"), { extension: "txt" }).then(haste => {
        m["channel"]["send"]("the messages saved in: "+haste)
      }).catch(error => {
        console.error(error);
      });
    });
  }
})


// const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
// client.on('message',message=>{
// if(message.author.bot || !message.guild)return
// if(!message.member) return
// if(!message.member.hasPermission('MANAGE_GUILD'))return;
// if(message.content.startsWith(prefix+'blacklist add')){
// let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
// if(!user)return message.channel.send('**Please Mention the User Or Type His ID :x:**')
// if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
// if (!message.guild.member(user).bannable) return message.channel.send(`:x: I couldn't ban that user. Please check my permissions and role position.`)
// user.ban('blacklist by'+message.author.tag+'!')
// if(blacklist[message.guild.id+user.id]) return message.channel.send('**This Member Allready Blacklisted!**')
// blacklist[message.guild.id+user.id] = {};
// message.channel.send(`**Added ${user} to The Blacklist ✅**`)
// }if(message.content.startsWith(prefix+'blacklist remove')){
// let user =  message.content.split(" ")[2]
// if(!user)return message.channel.send('**Please Type His ID :x:**')
// if(!blacklist[message.guild.id+user]) return message.channel.send('**I Can\'t Find This member In The Blacklist!**\nplease Check the Member ID')
// delete blacklist[message.guild.id+user];message.guild.unban(user).catch(err=>{
//   return message.channel.send(`:x: I couldn't unban that user.`)
// })
// message.channel.send(`**Removed <@${user}> from The Blacklist ✅**`)}
// if(message == prefix+'blacklist list'){
// const blacklistss = [];
// client.users.forEach(m => {
// if(!blacklist[message.guild.id + m.id]) return
// blacklistss.push(`<@${m.id}>`);
// });let MS = blacklistss.join("\n")
// message.channel.send(new Discord.RichEmbed().setAuthor(message.guild.name,message.guild.iconURL)
// .setTitle('**⛔ This This The Blacklist:**')
// .setDescription(`${MS}`).setColor('RED').setFooter(message.author.username,message.author.avatarURL)
// )
// };
// fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})
// fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})})
// client.on('guildMemberAdd',member=>{if(blacklist[member.guild.id+member.id])return member.ban('blacklist')})




client.on('message',message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "CreateRole") {// ⬇⬇⬇⬇⬇⬇⬇  اسم رتبه البوست 
  if(!message.member.roles.find('name','Li , Nitro Booster')) return message.channel.send(`**You must have <@&664845398120202262> Role to use this command \nplease boost the server to got it**`)
  let color = message.content.split(" ").slice(1).join(" ");
  let ROLE = message.guild.roles.find(c => c.name === `${message.author.username}`) 
  if(ROLE) return message.channel.send(`**There is a role with your name already!**`);
  if(color) {
  if(color >= 7) return message.channel.send('**Hex color length must equal `6 or 3`!**');
  message.guild.createRole({
  name:message.author.username,
  permissions:0,
  color:color}).then(RR =>{
  message.member.addRole(RR)
  message.channel.send(`**✅ Your role has been created ${RR}**`)});}
  if(!color) {
  message.guild.createRole({
  name:message.author.username,
  permissions:0
  }).then(RR =>{
  message.member.addRole(RR)
  message.channel.send(`**✅ Your role has been created ${RR}**`)});}}
  if(command == prefix + "DeleteRole") {
    let ROLE = message.guild.roles.find(c => c.name === `${message.author.username}`) 
  if(!message.member.roles.find('name',`${message.author.username}`)) return message.channel.send(`**🙁 You Don't have a special Role!**`)
  if(message.member.roles.find('name',`${message.author.username}`)) {
  ROLE.delete()
  message.channel.send(`**✅ Done I Have removed your role**`)
  }
  }
});

 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});

client.on('message', message => {
         if (message.content === "date" || message.content === "الوقت" || message.content === "تاريخ") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         if(!message.channel.name.startsWith("•-chat")){
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/662784285555687453/666890306746187827/Lithium.png") 
                .setTitle( "** التاريخ  والوقت**")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('> الامارات',
                "("+ hours + ":" + minutes +":"+ seconds + ")")
                 .addField('> مكه المكرمه',
                "("+ hours2 + ":" + minutes +":"+ seconds  + ")") 
                .addField('> مصر',
                "("+ hours3 + ":" + minutes +":"+ seconds  + ")") 
                
                .addField('Date',
                "("+ Day + "-" + Month + "-" + Year +  ")")

                 message.channel.sendEmbed(Date15);
        }
         }

    });
    
client.on('message', async message => {
if(message.author.bot) return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}rules`) {
let msg = message.content.split(" ").slice(1).join(" ")
if(!msg) return message.channel.send(`**Using: \`${prefix}rules [Message]\`**`)  
let e = new Discord.RichEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/662784285555687453/666890306746187827/Lithium.png") 
.setTitle('> ** Lithium ** ▹ ** Rules ** ')
.setColor('RANDOM')
.addField(`Rules`,`> #**Lithium Administration**`)
.setDescription(`
1) يمنع الإساءة إلى أعضاء المجتمع ويجب اللإلتزام بالأخلاق الحميدة.
2) يمنع الترويج لأي سلعة أو موقع بأي شكل من الأشكال بدون إذن مسبق من مجلس إدارة المجتمع او اللجنة المختصة.
3) يمنع منعاً باتاً نشر عنوان برتوكولي للإنترنت (IP Adderss) لأي جهة أو سيرفرات أخرى. يشمل ذلك سيرفرات التيم سبيك أو الماينكرافت أو غيرها
4) ممنوع طلب الرتبة.
5) يمنع إستخدام إسم مستخدم مسيء أو غير واضح او انتحال الشخصية.
6) يجب إحترام طاقم إدارة المجتمع وتجنب إساءة الأدب معهم.
7)  يمنع إقامة أي مسابقة (يشمل ذلك البطولات) دون أخذ إذن مسبق من مجلس إدارة المجتمع او اللجنة المختصة.
8) يمنع منعاً باتاً الترويج للشذوذ بجميع صوره ويجب الإلتزام بقيم مجتمعنا المحافظ.
9) يمنع استخدام أي إضافات أو برمجيات إضافية للتحكم بالعضوية الخاصة بك أو التلاعب على مجلس إدارة المجتمع بأي شكل من الأشكال.
10) ممنوع السبام
11) يمنع وضع أي صورة مخلة للاَداب الدينية أو الأخلاق العامة او وضع صور للغير.
12) .ممنوع التدخل في المواضيع الدينيه و السياسية
13) ⁩.يمنع استخدام أي إضافات أو برمجيات إضافية للتحكم بالعضوية الخاصة بك أو التلاعب على مجلس إدارة المجتمع بأي شكل من الأشكال
14) .يمنع بيع أي سلعة دون إذن مسبق من الجهة المختصة في  إدارة المجتمع لكي يتم بذلك تجنب حالات النصب والإحتيال
15) .ممنوع استخدام الاومر او استخدام أومر الالعاب في الشات العام
16)  يجب الحفاظ على حقوق الملكية الفكرية وعدم التهاون في سرقة محتوى الغير
`)
message.channel.send(e)
}
})


client.on('message', async message => {
if(message.author.bot) return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}reward`) {
let msg = message.content.split(" ").slice(1).join(" ")
if(!msg) return message.channel.send(`**Using: \`${prefix}say [Message]\`**`)  
let e = new Discord.RichEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/662784285555687453/666890306746187827/Lithium.png") 
.setColor('RANDOM')
.setTitle('**Reward rules | قوانين الريورد**')
.addField(`Lithium Owner`,`<@662780495230402643> , <@244074360476794880>`)
.setDescription(`
1) ممنوع الوهمي
2) ممنوع عمر الحساب اقل من شهرين
3) ممنوع حساب اقل من لفل 15
4) ممنوع يكون طالع وداخل
5) ممنوع تجي خاص او تمنشن بالتيكت عشان تستلم
6) الإستهبال بالخاص او الازعاج يعرض لعقوبة
7) ممنوع توكينات


`)
message.channel.send(e)
}
})

client.on('message', async message => {
if(message.author.bot) return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}help`) {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You are not allowed to this.**");
let msg = message.content.split(" ").slice(1).join(" ")
if(!msg) return message.channel.send(`**Using: \`${prefix}welcome [Message]\`**`)  
    message.channel.sendMessage("**Lithium Commands**");
    message.channel.sendMessage(">السلام عليكم ورحمة الله و بركأته الروم هذا مخصص ل معرفة الأومر  ");
    message.channel.sendMessage("");
    message.channel.sendMessage("**لمعرفة تاريخ او الوقت = يجب عليك كتأبة الاومر مثل (تاريخ , وقت) في شات ألاومر **");
    message.channel.sendMessage("**لتشغيل البوت الموسيقى = يجب عليك كتأبة الاومر مثل (1play ,2play ,3play,4play , وقت) في شات ألاومر **");

  
  
  
}
if(args[0].toLowerCase() == `${prefix}welcome`) {
let msg = message.content.split(" ").slice(1).join(" ")
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You are not allowed to this.**");
if(!msg) return message.channel.send(`**Using: \`${prefix}welcome [Message]\`**`)  
    message.channel.sendMessage("**Welcome to Lithium**");
    message.channel.sendMessage("> اهلاآ و سهلآ بكم في سيرفر ليثيوم يجب عليك قرأت القوانين ل تجنب اي حظر او مخالفة نظامية  ");
    message.channel.sendMessage(" ");
    message.channel.sendMessage("**يمكنك تفعيل نفسك من خلال الضغط على الريأكشن**");

  
  
  
}
  if(args[0].toLowerCase() == `${prefix}games`) {
let msg = message.content.split(" ").slice(1).join(" ")
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You are not allowed to this.**");
if(!msg) return message.channel.send(`**Using: \`${prefix}welcome [Message]\`**`)  
    message.channel.sendMessage("** Lithium Official**");
    message.channel.sendMessage("> يمكنك من هنا تحديد الاقسام التي تريدها او اضافة العاب  ");
    message.channel.sendMessage(" ");
    message.channel.sendMessage("**يمكنك التحكم من خلال الضغط على الريأكشن** \n ");
    message.channel.sendMessage("▏");
    message.channel.sendMessage("↡");
      message.channel.sendMessage("↡");
  
}
      if(args[0].toLowerCase() == `${prefix}boygirls`) {
let msg = message.content.split(" ").slice(1).join(" ")
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You are not allowed to this.**");

if(!msg) return message.channel.send(`**Using: \`${prefix}welcome [Message]\`**`)  
    message.channel.sendMessage("One ▹[1] ");
    message.channel.sendMessage(" \n ** Boy <-> Girl  **");
    message.channel.sendMessage(">  ");

      }
  
    if(args[0].toLowerCase() == `${prefix}tvanime`) {
let msg = message.content.split(" ").slice(1).join(" ")
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You are not allowed to this.**");

if(!msg) return message.channel.send(`**Using: \`${prefix}welcome [Message]\`**`)  
    message.channel.sendMessage("Two ▹[2] ");
    message.channel.sendMessage(" \n ** Anime - TV Shows - Avatars  **");
    message.channel.sendMessage(">  ");


  
  
  
}
  if(args[0].toLowerCase() == `${prefix}boygirl`) {
    let e = new Discord.RichEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/662784285555687453/666890306746187827/Lithium.png") 
.setColor('RANDOM')
.setTitle('**بنت او ولد ؟**')
.addField(`** `,`Boy , Girl**`)
.setDescription(`
1) ولد 
2) بنت 
`)
message.channel.send(e)
  }
})


client.on("message", (message) => {
  	  var prefix2 = "";
  	let command2 = message.content.split(" ")[0];
   command2 = command2.slice(prefix2.length);
  if (command2=='كسسسمك'||command2=='كسمك'||command2=='كشمك'||command2=='كسسمك'||command2=='كسس'||command2=='نياك'||command2=='النيكه'||command2=='قحبة'||command2=='منايك'||command2=='كساختك'||command2=='كسختك'||command2=='نياك'||command2=='مخنث'||command2=='مخانيث'||command2=='ksamk'||command2=='كس'||command2=='ksmk'||command2=='كسمك'||command2=='pussy' ||command2=='متناك' ||command2=='متناكه' ||command2=='امك' ||command2=='يلعن ابوك' ||command2=='قواده' ||command2=='شراميط' ||command2=='كلسمك' ||command2=='كس ابوك' ||command2=='كس اختك' ||command2=='ابن كلب' ||command2=='كساختك' ||command2=='قحاب'  ||command2=='خنيث' ||command2=='قواد'||command2=='شرموطه' ||command2=='منيوك'||command2=='منيوكه'   ||command2=='امك'||command2=='زب ' || command2=='شروموط' ||command2=='شرموط' ||command2=='قحيب'  ) {
    message.channel.fetchMessages({limit: 1}).then(command2 => message.channel.bulkDelete(command2));
    message.channel.sendMessage(message.author+', **Please stop, this word is not allowed** (*AntiSwear*) ')
}
    if (message.content.startsWith("#roles")) {
        message.channel.sendMessage('You are not allowed to this.');
    }

if (message.content.startsWith("$cc")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You are not allowed to this. | لا يمكنك انشاء روم صوتي");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('The channel voice has been created | تـم إنـشاء روم صـوتي')
    
}
});









client.on('message', async message =>{
  
  if (message.author.boss) return;
	var prefix = "$";
	var prefix2 = "";

	let command = message.content.split(" ")[0];
  	let command2 = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
   command2 = command2.slice(prefix2.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute" || command2 == "اسكت") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
    message.channel.sendMessage("**لقد تم حظر الشات عن شخص "+ client.user +" بنجاح**:white_check_mark:");

  }

  if(command === `unmute` || command2 === `تكلم`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
  


 


client.on('message', message =>{
  if(message.content === (prefix + 'ping')){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});


var categoryID = '665395910779600916';
var voiceID = '665396219929034793';

client.on('ready',()=>console.log(`${client.user.tag} is ready`)); 
client.on('voiceStateUpdate',(Old,New)=>
{
    if(New.user.bot) return;
    if(Old.user.bot) return;

    if(New.voiceChannelID == voiceID)
    {
        New.guild.createChannel(New.user.username,'voice').then(set=>
        {
            New.setVoiceChannel(New.guild.channels.get(set.id)).then(()=>
            {
                set.setParent(New.guild.channels.get(categoryID));
            });
            set.overwritePermissions(New.user,
                {
                    'CONNECT':true,'SPEAK':true,
                    'MOVE_MEMBERS':true,'VIEW_CHANNEL':true, 
                    'MANAGE_CHANNELS':true,'MANAGE_ROLES_OR_PERMISSIONS':true,
                    'USE_VAD':true,'PRIORITY_SPEAKER':true
                });
        });
    }

    if(Old.voiceChannel)
    {
        Old.guild.channels.forEach(channels=>
            {
                if(channels.parentID == categoryID)
                {
                    if(channels.id == voiceID) return;
                    if(Old.voiceChannelID == channels.id)
                    {
                        if(Old.voiceChannel.members.size == 0)
                        {
                            channels.delete();
                        }
                    }
                }
            });
    } 

});


client.on("message", message => {
  if(!message.guild || message.author.bot)return;
  if(message.content.startsWith(prefix+"hideAll")){
    message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
        });

    })
    message.channel.send("**Successfully**");
  }else if(message.content.startsWith(prefix+"showAll")){
    var arg =message.content.split(" ")[1];
    if(arg && arg == "all"){
      message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
        });
      })
    }else{
    var member = message.mentions.members.first();
    if(!member)return message.channel.send("**Mention a member.**");
message.guild.channels.forEach(channel => {
        channel.overwritePermissions(member.id, {
          READ_MESSAGES: false
        });
    })
    message.channel.send("**Successfully**")
    }
  }
})

client.on('message', message => {
    /**
     * This first conditional statement is used to give reactions to the embed messages our bot sends.
     * Please note everything here is hard-coded, you are responsible for modifying it to fit your needs.
     */
    if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].description.startsWith('React')) {
            message.react(':ticketreact:625925895013662721')
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
        if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Support') {
            message.react(':checkreact:625938016510410772')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
    };
    /**
     * This was just used to send an initial embed message.
     * I copied the ID of the embed message sent and used that to check if reactions were
     * added to that. Check the 'raw' event.
     */
    if(message.content.toLowerCase() === '?sendmsg') {
        const embed = new Discord.RichEmbed();
        embed.setAuthor(client.user.username);
        embed.setDescription('React to this message to open a support ticket');
        embed.setColor('#F39237')
        message.channel.send(embed);
    }
});

/**
 * PLEASE NOTE: ticketreact and checkreact are my OWN custom emojis.
 * You need to modify it to match your own emojis.
 */
client.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') { // Check if the event name is MESSAGE_REACTION_ADD
        if(payload.d.emoji.name === 'ticketreact') // If the emoji is ticketreact
        {
            if(payload.d.message_id === '625926893954400266') { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                let channel = client.channels.get(payload.d.channel_id) // Get the proper channel object.
                if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                    return;
                }
                else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('ticketreact:625925895013662721');
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    })
                    .catch(err => console.log(err));
                }
            }
        }
        // Check if the emoji is checkreact, meaning we're deleting the channel.
        // This will only be significant if our bot crashes/restarts and there are additional ticket channels that have not been closed.
        else if(payload.d.emoji.name === 'checkreact') {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get('checkreact:625938016510410772');
                    let user = client.users.get(payload.d.user_id);
                    client.emit('messageReactionAdd', reaction, user);
                })
                // Additional code that I did not need, but leaving it here for future purposes.
                /*
                .then(msg => msg.embeds.length === 1 && msg.embeds[0].title === 'Ticket Support' ? Promise.resolve(msg.channel) : Promise.reject('Incorrect Msg')
                ).then(ch => ch.delete('closing ticket'))
                .then(guildChannel => console.log("Deleted " + guildChannel.name))
                .catch(err => console.log(err)); */

            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === 'ticketreact') { // If the emoji name is ticketreact, we will create the ticket channel.
        /**
         * Here we need to check the map to see if the user's id is in there, indicating they have a ticket.
         * We also need to check if there are any other guild channels with their name concatenated with 's-ticket'. We need to 
         * check this case because the bot may have crashed or restarted, and their ID won't be stored in the map.
         */
        if(userTickets.has(user.id) || reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            user.send("You already have a ticket!"); // Send user msg indicating they have a ticket.
        }
        else {
            let guild = reaction.message.guild;
            // Create channel based on permissions. Note, you need to modify the permissionsOverwrites array to fit your needs for permissions.
            guild.createChannel(`${user.username}s-ticket`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },
                    {
                        allow: 'VIEW_CHANNEL',
                        id: '625907626303160354'
                    }
                ]
            }).then(ch => {
                userTickets.set(user.id, ch.id); // Once ticket is created, set the user's id as a key mapping to the channel id.
                let embed = new Discord.RichEmbed();
                embed.setTitle('Ticket Support');
                embed.setDescription('Please briefly explain your problem here and a staff member will get back to you shortly.');
                embed.setColor('#40BCD8');
                ch.send(embed) // Send a message to user.
            }).catch(err => console.log(err));
        }
    }
    else if(reaction.emoji.name === 'checkreact') {
        // If emoji is checkreact, they are trying to close the ticket.
        if(userTickets.has(user.id)) {
            if(reaction.message.channel.id === userTickets.get(user.id)) {
                let embed = new Discord.RichEmbed();
                embed.setDescription("Ticket will be closed in 5 seconds.")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('closing ticket')
                    .then(channel => {
                        console.log("Deleted " + channel.name);
                    })
                    .catch(err => console.log(err));
                }, 5000);
            }
        }
        // This case is really for handling tickets that were not closed by the bot due to the bot possibly crashing.
        // In order for this to actually work, the user needs to have a ticket opened already.
        else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            let embed = new Discord.RichEmbed();
            embed.setDescription("Ticket will be closed in 5 seconds.");
            reaction.message.channel.send(embed);
            setTimeout(() => {
                reaction.message.guild.channels.forEach(channel => {
                    if(channel.name.toLowerCase() === user.username + 's-ticket') {
                        channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
                    }
                });
            }, 5000);
        }
    }
});

