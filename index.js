const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Join My Server :- https://discord.gg/Kn29Zd67sn !'))

app.listen(port, () =>
console.log(`Your app is listening to a https://localhost:${port}`)
);

const Discord = require("discord.js");
const colors = require("colors")
const client = new Discord.Client({
  presence: {
    status: "idle",
    activity: {
      name: "Your Bot Name Here",
      type: "ONLINE",
    }
  }
});
client.config = require("./config.json");

client.login(client.config.token);

client.on("ready", ()=>{
  console.log(`${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen);
  //client.user.setActivity("Hello world", {type: "STREAMING", url: "https://twitch.tv/#"})
})

require("./logger")(client);
//const logger = require("./logger");
//logger(client)
