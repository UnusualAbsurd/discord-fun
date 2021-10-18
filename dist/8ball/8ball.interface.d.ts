export interface EightBallInt {
    /**
     * Message Option
     */
    message: object;
    /**
     * Slash Command Option
     */
    slash: boolean;
    /**
     * Question Option
     */
    question: string;
    /**
     * Embed
     */
    embed?: {
        color?: string;
    };
}
