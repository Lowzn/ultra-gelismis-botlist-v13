

const db = require('croxydb');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({ content: " Bu Komutu Kullanmak İçin `Yönetici` Yetkisine İhtiyacım Var.", allowedMentions: { repliedUser: false } })
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let botekletmekanali  = message.mentions.channels.first()
  if(!botekletmekanali) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
  
  
  
 
    
    message.reply("Ayarlanmıştır.")

  db.set(`botekle_${message.guild.id}`, botekletmekanali.id)
  
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'bot-ekletme-kanalı',
	description: "",
	usage: ''
}