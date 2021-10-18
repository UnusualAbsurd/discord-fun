import {
 MessageEmbed
}
from 'discord.js'

import {
  GoogleInt
}
from './google.interface'

import fetch from 'node-fetch'

import{
 DiscordFunError
}
from '../Error/DiscordFunError'

export const googleSearch = async(options: GoogleInt) => {
   const {
       query,
       api: {
           cx,
           key
       }
   } = options



   if(!query) throw new DiscordFunError('Missing Option "query"');
   if(typeof query !== 'string') throw new DiscordFunError('"query" Option must be a TypeOf [ STRING ]')

   if(!cx) throw new DiscordFunError('Missing Option "api: cx"');
   if(typeof cx !== 'string') throw new DiscordFunError('"api: cx" Option must be a TypeOf [ STRING ]');

   
   if(!key) throw new DiscordFunError('Missing Option "api: key"');
   if(typeof key !== 'string') throw new DiscordFunError('"api: key" Option must be a TypeOf [ STRING ]');

   await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`, { method: "GET" })
   .then(response => response.json())
   .then((res) => {
       if(!res.items?.length) return 'No Result';
       else {
           return res.items[0]
       }
   })
  


}