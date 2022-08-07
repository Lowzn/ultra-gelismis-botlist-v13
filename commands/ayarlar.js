const { MessageEmbed } = require("discord.js")
const db = require("croxydb")



exports.run = async (client, message, args) => {
    let boteklemekanali = db.fetch(`botekle_${message.guild.id}`)
	let onaykanal = db.fetch(`botmod_${message.guild.id}`)
	let botlog = db.fetch(`botlog_${message.guild.id}`)
	let botrol = db.fetch(`verifiedbot_${message.guild.id}`)
	let developer = db.fetch(`gelistirici_${message.guild.id}`)
	let mod = db.fetch(`yetkili_${message.guild.id}`)
    const embed = new MessageEmbed()
.setTitle(`${message.guild.name} Sunucusu Ayarları!`)
.addField("Bot Ekletme Kanalı", boteklemekanali ? `<#${boteklemekanali}>`: "❌", true)
.addField("Bot Onay Kanalı", onaykanal ? `<#${onaykanal}>` : "❌", true)
.addField("Bot Log", botlog ? `<#${botlog}>` : "❌", true)
.addField("Bot Rol", botrol ? `<@&${botrol}>` : "❌", true)
.addField("Geliştirici", developer ? `<@&${developer}>` : "❌", true)
.addField("Moderatör", mod ? `<@&${mod}>` : "❌", true)
.setColor("RED")
message.channel.send({embeds: [embed]})
}


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'ayarlar',
	description: '',
	usage: ''
}