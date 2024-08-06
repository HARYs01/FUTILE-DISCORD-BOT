const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("It's just for fun")
                .setURL("https://discord.com/oauth2/authorize?client_id=1270289292152934439&permissions=2147483648&integration_type=0&scope=applications.commands+bot")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nClick the button below for the sponsor page \n**Pay attention! sponsor is not required**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://discord.com/oauth2/authorize?client_id=1270289292152934439&permissions=2147483648&integration_type=0&scope=applications.commands+bot",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 
