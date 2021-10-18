import {
  EightBallInt
}
from './8ball.interface';

import {
 DiscordFunError
}
from '../Error/DiscordFunError'

import {
    MessageEmbed
}
from 'discord.js'

const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Fuhgeddaboudit.',
    'Ahaha! Really?!?',
    'Pfft.',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'As I see it, yes',
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'Outlook good',
    'Signs point to yes',
    'Yes!',
    'Couldn\'t care less.'
]

export class EightBall {
    public options: EightBallInt;
    public message;
    public embed_option;
    public result;


    constructor(options: EightBallInt) {
        if(!options.message) throw new DiscordFunError('Missing Option "message"');
        if(typeof options.message !== 'object') throw new DiscordFunError('Message Option must be a TypeOf [OBJECT]');
        
        if(!options.slash) options.slash = false;
        if(options.slash && typeof options.slash !== 'boolean') throw new DiscordFunError('Slash Option must be a TypeOf [BOOLEAN]');
        
        if(!options.question) throw new DiscordFunError('Missing Option "question"');
        if(typeof options.question !== 'string') throw new DiscordFunError('Question Option must be a TypeOf [STRING]');

        if(!options.embed) this.embed_option = false
        if(options.embed) this.embed_option = true;
        if(options.embed && typeof options.embed.color !== 'string') throw new DiscordFunError('Embed Color Option must be a TypeOf [STRING]');

        this.options = options;
        this.message = options.message
    }

    fire() {
        if(this.embed_option === false) {
            if(!this.options.slash) {
              this.message.channel.send({ content: `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` })
            } else {
                this.message.followUp({ content: `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` })
            }
        }
        else if(this.embed_option === true) {
          if(!this.options.slash) {
             this.message.channel.send({ embeds: [
                 // @ts-ignore
                new MessageEmbed().addField('Answer', `\`\`\`🎱 ${answers[Math.floor(Math.random() * answers.length)]}\`\`\``).setColor(this.options.embed.color || "GREEN")
             ] })
          }
          else {
            this.message.followUp({ embeds: [
                // @ts-ignore
               new MessageEmbed().addField('Answer', `\`\`\`🎱 ${answers[Math.floor(Math.random() * answers.length)]}\`\`\``).setColor(this.options.embed.color || "GREEN")
            ] })
         }
        }
    }



}