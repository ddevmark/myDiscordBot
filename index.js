const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json")
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log('Bot is online!');
  bot.user.setActivity("От учаю Коннора лизать!");
});

bot.on("message", async message => {
  if(message.author.bot)
   return;
  if(message.channel.type == "dm")
   return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}info`){

   let sicon = message.guild.displayAvatarURL;
   let bicon = bot.user.displayAvatarURL;
   let botembed = new Discord.RichEmbed()
   .setDescription("Информация про БОТа")
   .setColor("#000000")
   .setThumbnail(bicon)
   // .setThumbnail(sicon)
   .addField("Имя", bot.user.username)
   .addField("Создан", message.guild.createdAt)
   .addField("Вы присойденились", message.guild.joinedAt)
   .addField("Всего участников", message.guild.memberCount);

    return message.channel.send(botembed);

    if(cmd === `${prefix}ban`){
      
    }

  }
});

bot.login(tokenfile.token);
