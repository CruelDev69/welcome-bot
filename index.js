const { Client, Intents } = require('discord.js'); // Importing Client and Intent from Discord.js
const client = new Client({
 intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]
}); // Constructing Client

const { token } = require('./config.json'); // Importing token from Config.json
const welcome = require('./welcome'); // Importing guildMemberAdd event from welcome. 
client.on('ready', () => {
  welcome(client);
  client.user?.setPresence({
    status: "idle" || "dnd",
    activities: [
            {
            name: "Ahad#3257" || "Watching New Members",
            type: "LISTENING" || "WACTHING"
        },
    ],
}); // Setting Status
  console.log("Listening on https://www.itscruel.cf\nMade by Ahad#3257\nJoin https://discord.gg/Ncsc5pRNgf for help."); // Please don't remove this. 
});

client.login(token);

