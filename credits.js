const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Crédits du bot :')
            .setDescription(`**Créateur du bot** : kyky#7620/Google Assistant#2558
            **Serveur \"Support"**: [Ici](https://discord.com/invite/7EMzAKfXP4) 
            **Serveur affilé** : [Ici](https://discord.gg/eZxDxuSAdW) 
            **Lien du jeu roblox** : [Ici](https://www.roblox.com/games/4733728555/FR-SCP-Site-43-RP)`)
            .setColor('#540505')
            .setImage("")
            .setThumbnail('https://images-ext-1.discordapp.net/external/dj0cc2guako08z44SL7QVJbx0meMS-X4QVuhiBt1b5A/%3Fv%3D1/https/cdn.discordapp.com/emojis/695572478289903719.png')
            .setFooter('Ghost Inc', 'https://cdn.discordapp.com/attachments/812435048632287242/813002522045710336/1613829302493.png')
            .setTimestamp()
            .setURL(''))
    },

    name: 'credit',
    help: {
        description: "Permet de voir les créateur/support du bot."
    }
}

