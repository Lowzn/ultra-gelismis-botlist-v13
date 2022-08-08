const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const config = require("./config.json");

const db = require("croxydb")
const client = new Client({
intents: 32767
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")


client.on('message',async message => {
   

    let boteklemekanali = db.fetch(`botekle_${message.guild.id}`)
    
if (message.channel.id == boteklemekanali && message.author.id !== client.user.id) message.delete()
})

client.on('guildMemberAdd', async (member) => {
 

if (member.user.bot && db.has(`Ekledi_${member.id}`)) {

}



}
)
client.on('ready',async () => {
client.user.setActivity('!yardım',{ type: 'WATCHING'},)


})

client.on('guildMemberRemove', async member => {
const BOTDurum = await db.fetch(`BOT_${member.id}`)
if (BOTDurum) {
client.users.fetch(BOTDurum).then(async(User) => {
   let botlog = db.fetch(`botlog_${member.guild.id}`)
member.guild.members.ban(await db.fetch(`BOT_${member.id}`), {reason: 'Sahibi pkklı oruspu çocuğu ateist vatan haini terorist piç anne sütü emen amcı oruspu çocuğu olduğu için banladım.'})
client.channels.cache.get(botlog).send(`\`${member.user.tag}\` Sunucudan Ayrıldı. \`${User.tag}\` Adındaki Botu Atıldı!`
)
db.delete(`BOT_${member.id}`)
})
}
})



client.login(config.token); 
