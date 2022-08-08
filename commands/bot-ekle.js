
const Discord = require("discord.js")
const db = require('croxydb')

exports.run = async (client, message, args) => {
	let boteklemekanali = db.fetch(`botekle_${message.guild.id}`)
	if (!boteklemekanali) return message.channel.send("Bot ekleme kanalı ayarlanmamış!")
	let onaykanal = db.fetch(`botmod_${message.guild.id}`)
	if (!onaykanal) return message.channel.send("Bot onaylama kanalı ayarlanmamış!")
	let botlog = db.fetch(`botlog_${message.guild.id}`)
	if (!botlog) return message.channel.send("Bot log kanalı ayarlanmamış!")
	let botrol = db.fetch(`verifiedbot_${message.guild.id}`)
	if (!botrol) return message.channel.send("Bot rolü ayarlanmamış!")
	let developer = db.fetch(`gelistirici_${message.guild.id}`)
	if (!developer) return message.channel.send("Geliştirici rolü ayarlanmamış!")
	let mod = db.fetch(`yetkili_${message.guild.id}`)
	if (!mod) return message.channel.send("Yetkili rolü ayarlanmamış!")
if (message.channel.id !== boteklemekanali) return message.channel.send('Bu Komut Sadece <#'+boteklemekanali+'> Kanalında Kullanılabilir!')
const ClientID = args[0]
if (!ClientID || isNaN(ClientID) || ClientID == client.user.id) return message.channel.send(':x: **| Lütfen BOT ID Yazınız , Please Enter Bot ID**')
const Prefix = args[1]
if (!Prefix) return message.channel.send(':x: **| Lütfen Prefix Yazınız , Please Enter Prefix**')
const DBL = args[2]
if (!DBL) return message.channel.send(':x: **| Lütfen DBL Durumunu Yazınız , Please Enter DBL Status**')
if (ClientID.length < 18) return message.channel.send(':x: **| Girdiğiniz ID Hiçbir Hesap İle Eşleşmedi (Eksik Yazmış Olabilirsiniz.). , The ID you entered did not match any account (You may have typed it missing.).**')
if (db.fetch(`Durum_${ClientID}`) == true) return message.channel.send('**Botunuzun Hali Hazırda Mevcut Bir Başvurusu Bulunuyor. Lütfen Bekleyin ya da Bir Yetkili İle İletişime Geçin.**')
if (message.guild.members.cache.filter(Users => Users.user.bot).find(Botlar => Botlar.id === ClientID) && db.has(`Sahip_${ClientID}`) && db.has(`Eklenme_${ClientID}`)) return message.channel.send('**Bu BOT Zaten Ekli!** (Tarafından: `'+client.users.cache.get(db.fetch(`Sahip_${ClientID}`)).tag+' | '+db.fetch(`Eklenme_${ClientID}`)+'`)')

db.set(`Durum_${ClientID}`,true)
client.users.fetch(ClientID).then((User) => {
if (!User.bot) return message.channel.send('**Girdiğiniz ID Bir Bota Ait Değil.**')
const nova = new Discord.MessageEmbed()
.setColor('RANDOM')

.setDescription(`
Bot İsteği Geldi!

Uygulama ID: **\`${ClientID}\`**
Uygulama Adı: **\`${User.tag}\`**
Uygulama Ön Eki: **\`${Prefix}\`**
Uygulama Sahibi: **\`${message.author.tag}\`** (${message.author})
Uygulama Onay Durumu: **[${DBL}](https://top.gg/bot/${ClientID})**`)
.setTimestamp()
.setFooter(User.tag,User.avatarURL())

   const row = new Discord.MessageActionRow()
   .addComponents(
	new Discord.MessageButton()
       .setStyle("LINK")
       .setLabel("Bot Ekle")
       .setURL(`https://discord.com/oauth2/authorize?scope=bot&permissions=0&client_id=${ClientID}&guild_id=${message.guild.id}`),
	 new Discord.MessageButton()
	 .setLabel("Kabul Et")
	 .setStyle("SUCCESS")
	 .setCustomId("kabul"),
	   new Discord.MessageButton()
	 .setStyle("DANGER")
	 .setLabel("Reddet")
	 .setCustomId("reddet")  
	   )
       

        
    


const sd = new Discord.MessageEmbed()
.setTitle("Bot Ekletildi!")
.setDescription(`**${message.author} Adlı Kullanıcı \`${User.tag}\` Adlı Botunun Sisteme Onaylanması İçin Başvurdu!**`)
.setColor("RANDOM")
console.log(User.id)
client.channels.cache.get(botlog).send({embeds: [sd]})
client.channels.cache.get(onaykanal).send({components: [row], embeds: [nova], content: `<@&${mod}>`}).then(radio => {
	

    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "reddet") {
			if(!interaction.guild.members.cache.get(interaction.user.id)?.roles.cache.has(mod)) return interaction.reply({content: `Bu butonu kullanabilmek için <@&${mod}> rolüne sahip olmalısın!`, ephemeral: true});
			radio.delete()
client.channels.cache.get(botlog).send(`${message.author} Adlı Kullanıcının ${User.tag} Adlı Botu Reddedildi!`)
}
if (interaction.customId == "kabul") {
	db.set(`Bilgi_${radio.id}`,{Client: ClientID , Gönderen: message.author.id})
	db.set(`BOT_${message.author.id}`,ClientID)
	db.set(`Ekledi_${ClientID}`,message.author.id)
	db.set(`Sahip_${ClientID}`,message.author.id)
		if(!interaction.guild.members.cache.get(interaction.user.id)?.roles.cache.has(mod)) return interaction.reply({content: `Bu butonu kullanabilmek için <@&${mod}> rolüne sahip olmalısın!`, ephemeral: true});
	radio.delete()
	client.channels.cache.get(botlog).send(`**${message.author}** Adlı Kullanıcının \`${User.tag}\` Adlı Onay Bekleyen Botu Kabul Edildi!`)
	message.guild.members.cache.get(message.author.id).roles.add(developer)
	message.guild.members.cache.get(User.id).roles.add(botrol)



}
})
})
})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'bot-ekle',
	description: '',
	usage: ''
}
