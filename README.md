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
[![Video](https://res.cloudinary.com/marcomontalbano/image/upload/v1634533757/video_to_markdown/images/youtube--xuWJUqmDzf0-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/xuWJUqmDzf0 "Video")
```js
const { googleSearch } = require('discordjs-fun')

client.on('messageCreate', (message) => {
  if(message.content === '?google') {
    const result = await googleSearch({ query: message.content, api: {
        key: "GOOGLE_API_KEY",
        cx: "GOOGLE_CX_KEY"
    }})
  
    console.log(result);
  }  
})
```

## Google Image 📷
```js
const { googleImage } = require('discordjs-fun');

client.on('messageCreate', (message) => {
  if(message.content === '?image') {
    const result = await googleImage({ 
       message,
       slash: false, // Set to true if you use slash_command
       query: message.content, 
        api: {
        key: "GOOGLE_API_KEY",
        cx: "GOOGLE_CX_KEY"
      },
      embed: {
        color: "RED"
      }
    })
  
    console.log(result);
  }  
})
```

## Owoify 🐈
```js
const { owoify } = require('discord.js');

const result = owoify('Hello World!');
console.log(result)

```

## Flip 🤞
```js
const { flip } = require('discordjs-fun');

client.on('messageCreate', (message) => {
  if(message.content === '?flip') {
      new EightBall({
      message,
      slash: false // Set to true of you use slash command
      flip_emoji: 'CUSTOM_EMOJI / OTHER EMOJI' // Optional
    })
  }  
})
```