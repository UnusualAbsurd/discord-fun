import { DiscordFunError } from '../Error/DiscordFunError';
import {
    FlipInt
}
    from './flip.interface'

const sides = [
    'heads',
    'tails'
]

export const flip = (options: FlipInt) => {
    const {
        message,
        slash,
        flip_emoji
    }
        = options;

    if (!message) throw new DiscordFunError('Missing Option "message"');
    if (typeof message !== 'string') throw new DiscordFunError('"message" Option must be a TypeOf [ STRING ]');

    let slash_option;

    if (!slash) slash_option = false;
    if (slash && typeof slash !== 'boolean') throw new DiscordFunError('"slash" Option must be a TypeOf [ BOOLEAN ]');
    if (slash && typeof slash === 'boolean' && slash === true) slash_option = true;

    let emoji;

    if (!flip_emoji) emoji = ':coin:';
    if (typeof flip_emoji !== 'string') throw new DiscordFunError('"flip_emoji" Option must be a TypeOf [ STRING ]')
    if (flip_emoji) emoji = flip_emoji;

    if (slash_option === false) {
        // @ts-ignore
      const flip_msg = await  message.channel.send({ content: 'Flipping the coin...' })
        setTimeout(function () {
            // @ts-ignore
            flip_msg.edit({ content: `${sides[Math.floor(Math.random() * sides.length)]}` })
        }, 3000)
    } else {
        // @ts-ignore
        const flip_msg = await  message.followUp({ content: 'Flipping the coin...' })
        setTimeout(function () {
            // @ts-ignore
            flip_msg.edit({ content: `${sides[Math.floor(Math.random() * sides.length)]}` })
        }, 3000)
    }
}