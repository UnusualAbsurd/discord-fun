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
      slash: false // Set to true of you use slash command
      question: message.content,
      embed: {
          color: '#11FFEF'
      }
    })
  }  
})
```

## Google Search 🔍
### How To Get Google { CX and API KEY };
[![Video](https://res.cloudinary.com/marcomontalbano/image/upload/v1634533473/video_to_markdown/images/youtube--ueBLrCNZpjg-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/ueBLrCNZpjg "Video")
```js
const { googleSearch } = require('discordjs-fun')

client.on('messageCreate', (message) => {
  if(message.content === '?google') {
    await googleSearch({ query: message.content, api: {
        key: "GOOGLE_API_KEY",
        cx: "GOOGLE_CX_KEY"
    } })
  }  
})
```

