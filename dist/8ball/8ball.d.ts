import { EightBallInt } from './8ball.interface';
export declare class EightBall {
    options: EightBallInt;
    message: any;
    embed_option: any;
    result: any;
    constructor(options: EightBallInt);
    fire(): void;
}
