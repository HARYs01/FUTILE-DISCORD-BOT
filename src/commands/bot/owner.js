const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `- HARYs -`,
            inline: true,
        },
        {
            name: "🏷┆Discord ID",
            value: `1203357768610746385`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Nothing`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `(https://onslaught282.wordpress.com/)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
