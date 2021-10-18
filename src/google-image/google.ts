import {
 MessageEmbed,
 MessageAttachment,
}
from 'discord.js'

import fetch from 'node-fetch';
import { DiscordFunError } from '../Error/DiscordFunError';

import {
 GoogleInt
}
from './google.interface'


export const googleImage = async(options: GoogleInt) => {
    const {
      message,
      slash,
      query,
      api: {
          key,
          cx
      },
      embed: {
          color
      }
    }
    = options;
   
    let slash_option;

    if(!message) throw new DiscordFunError('Missing Option "message"');
    if(typeof message !== 'object') throw new DiscordFunError('"message" Option must be a TypeOf [ OBJECT ]');

    if(!slash) slash_option = false;
    if(typeof slash !== 'boolean') throw new DiscordFunError('"slash" Option must be a TypeOf [ BOOLEAN ]');
    if(slash) slash_option = true;

    if(!query) throw new DiscordFunError('Missing Option "query"');
    if(typeof query !== 'string') throw new DiscordFunError('"query" Option must be a TypeOf [ STRING ]');

    if(!key) throw new DiscordFunError('Missing Option "api: key"');
    if(typeof key !== 'string') throw new DiscordFunError('"api: key" Option must be a TypeOf [ STRING ]');

    if(!cx) throw new DiscordFunError('Missing Option "api: cx"');
    if(typeof cx !== 'string') throw new DiscordFunError('"api: cx" Option must be a TypeOf [ STRING ]');

    let embed_option;
    if(!options.embed) embed_option = false;
    if(typeof color !== 'string') throw new DiscordFunError('"embed: color" Option must be a TypeOf [ STRING ]');
    if(options.embed) embed_option = true;


    let res = await fetch(`https://customsearch.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${key}&searchType=image`)
    
    if(!res) throw new DiscordFunError('Failed to fetch image');
    if(res.status >= 400) throw new TypeError(`Error: ${res.status}: ${res.statusText}`);

    res = await res.json();
    // @ts-ignore
    if(!res.items?.length) return message.channel.send({ content: 'Couldn\'t find the image.' })

    const random = Math.floor(Math.random() * res.items.length);

    if(embed_option === false) {
      if(slash_option === false) {
        // @ts-ignore
        message.channel.send({ files: [new MessageAttachment(`${res.items[random].link}`, `requested-by-${message.author.id}.png`)] })
      }
      else {
        // @ts-ignore
        message.followUp({ files: [new MessageAttachment(`${res.items[random].link}`, `requested-by-${message.author.id}.png`)] })
      }
    }
    else {
      if(slash_option === false) {
          // @ts-ignore
          message.channel.send({ embeds: [new MessageEmbed().setColor(color || "GREEN").setImage(`${res.items[random].link}`)] })
      }
      else {
        // @ts-ignore
        message.followUp({ embeds: [new MessageEmbed().setColor(color || "GREEN").setImage(`${res.items[random].link}`)] })
      }
    }
}