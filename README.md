# discordjs-fun# discordjs-fun
## About 🤔
##### discordjs-fun is a discord npm package that makes fun features of your discord bot using DJS.

# Installing the package  🛠
```bash
npm i discordjs-fun
```
# Discord.JS Client Setup 🤖
```js
const Discord = require('discord.js')

const client = new Discord.Client({ intents: 513 })
```
### Visit: https://discordjs.guide for discord.js guides.

# Functions
## 8Ball 🎱
```js
const { EightBall } = require('discordjs-fun');

client.on('messageCreate', (message) => {
  if(message.content === '?8ball') {
      new EightBall({
      message,
      slash: false // Set to true of you use slash commadn
      question: message.content,
      embed: {
          color: '#11FFEF'
      }
    })
  }  
})