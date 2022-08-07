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
    let onaykanal = db.fetch(`botmod_${member.guild.id}`)
    let developer = db.fetch(`gelistirici_${member.guild.id}`)
    let botlog = db.fetch(`botlog_${member.guild.id}`)
    let botrol = db.fetch(`verifiedbot_${member.guild.id}`)
    

if (member.user.bot && db.has(`Ekledi_${member.id}`)) {


db.delete(`Bilgi_${REmbed.first().id}`)

}
const BOTEkleyen = await db.fetch(`Ekledi_${member.id}`)
client.channels.cache.get(botlog).send(`**<@${BOTEkleyen}> Adlı Kullanıcının \`${client.users.cache.get(member.id).tag}\` Adlı Onay Bekleyen Botu Kabul Edildi!`)
const Log = await member.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(Audit => Audit.entries.first())
member.guild.members.cache.get(BOTEkleyen).roles.add(developer)

db.add(`Count_${Log.executor.id}`,1)
db.delete(`Durum_${member.id}`)
member.roles.add(botrol) 

}
)
client.on('ready',async () => {
client.user.setActivity('!yardım',{ type: 'WATCHING'},)


})

client.on('guildMemberRemove', async member => {
const BOTDurum = await db.fetch(`BOT_${member.id}`)
if (BOTDurum) {
client.users.fetch(BOTDurum).then(async(User) => {
member.guild.members.ban(await db.fetch(`BOT_${member.id}`), {reason: 'Sahibi pkklı oruspu çocuğu ateist vatan haini terorist piç anne sütü emen amcı oruspu çocuğu olduğu için banladım.'})
client.channels.cache.get(ayarlar.BOTLog).send(`\`${member.user.tag}\` Sunucudan Ayrıldı. \`${User.tag}\` Adındaki Botu Atıldı!`
)
db.delete(`BOT_${member.id}`)
})
}
})



client.login(config.token); 
