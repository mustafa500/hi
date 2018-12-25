const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526799228651962382")
setInterval(function() {
channel.send(`gdujopgdsjgjgflgjgjkfpdfgjfjbvcpojkfpgjk;vcbjpjfgpojfpoofjk;ovfck;kfdpodfpkcvb;lkjfgkpdofkvbcjkmpdokpo;vk;kgfpjkpdfsk;fkgp;fdkp;k`);
}, 30)
})

client.login(process.env.BOT_TOKEN);