const { MessageEmbed } = require('discord.js'); // Importing MessageEmbed from Discord.js
const channelId = ""; // Welcome ChannelID
const ruleId = ""; // Rules ChannelID
const selfRoles = ""; // Self Roles ChannelID

module.exports = (client) => {
client.on('guildMemberAdd', (member) => {
  const server_name = member.guild.name; // Server Name
  const server_icon = member.user.displayAvatarURL({dynamic: true, size: 512}); // Server Icon
  const user = member; // Mentions the Member
  const username = member.user.username; // Shows Member's Username
  const tag = member.user.tag; // Shows Member's Username and Tag

  const message = `${user}`;
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`Welcome to ${server_name}`)
  .setThumbnail(server_icon)
  .setDescription(`Hi ${user} Welcome To Our Server **__${server_name}__**\nMust Follow ${ruleId}\nCheck Our Announcements <#>\nTake Some Roles From ${selfRoles}`)
  .setFooter({
    text: `${server_name} | Bot by Ahad#3257`,
    iconURL: server_icon
  });

    const channel = member.guild.channels.cache.get(channelId);
    channel.send({
        content: message,
        embeds: [embed]
    });
    });
};