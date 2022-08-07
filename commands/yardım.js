const { MessageEmbed } = require("discord.js")
const ayarlar = require("../config.json")
const prefix = ayarlar.prefix



exports.run = async (client, message, args) => {
   
    const embed = new MessageEmbed()
.setTitle(`${message.guild.name} Sunucusu Ayarları!`)
.setDescription(`${prefix}ayarlar\n${prefix}geliştirici\n${prefix}bot-ekle\n${prefix}bot-ekletme-kanalı\n${prefix}bot-log\n${prefix}bot-onay-kanalı\n${prefix}bot-rol\n${prefix}bot-yetkilisi`)
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
	name: 'yardım',
	description: "",
	usage: ''
}