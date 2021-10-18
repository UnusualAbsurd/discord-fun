import {
    DiscordFunError
}
from '../Error/DiscordFunError'

export const owoify = (message: string) => {
  
    const emojis =  [
        "(*^ω^)",
        "(◕‿◕✿)",
        "(◕ᴥ◕)",
        "ʕ•ᴥ•ʔ",
        "ʕ￫ᴥ￩ʔ",
        "(*^.^*)",
        "owo",
        "OwO",
        "(｡♥‿♥｡)",
        "uwu",
        "UwU",
        "(*￣з￣)",
        ">w<",
        "^w^",
        "(つ✧ω✧)つ",
        "(/ =ω=)/",
      ];

      if(!message) throw new DiscordFunError('Missing Option "message"');
      if(typeof message !== 'string') throw new DiscordFunError('"message" Option must be a TypeOf [ STRING ]');

      message = message.replace(/(?:l|r)/g, "w");
      message = message.replace(/(?:L|R)/g, "W");
      message = message.replace(/n([aeiou])/g, "ny$1");
      message = message.replace(/N([aeiou])|N([AEIOU])/g, "Ny$1");
      message = message.replace(/ove/g, "uv");
      message = message.replace(/nd(?= |$)/g, "ndo");
      message = message.replace(
        message,
        ` ${emojis[Math.floor(Math.random() * emojis.length)]}`
      );

      return message;
      
      

}