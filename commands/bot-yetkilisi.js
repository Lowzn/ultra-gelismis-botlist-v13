const { MessageEmbed } = require("discord.js")
let db = require("croxydb")


  
exports.run = async (client, message, args) => {
        
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkin yok")
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send("Bir rol etiketle!")
  
  
  db.set(`yetkili_${message.guild.id}`, rol.id)
  message.channel.send("ayarlanmıştır!")
   
  
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'bot-yetkilisi',
	description: '',
	usage: ''
}