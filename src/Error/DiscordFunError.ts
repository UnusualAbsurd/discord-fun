class DiscordFunError extends Error {
    constructor(msg: string) {
        if(!msg) throw new TypeError('Missing Error Message! 🏓')
        super(msg);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DiscordFunError.prototype);
    }

    sayHello() {
        return "Discord Fun Error: " + this.message;
    }

    
}

export { DiscordFunError }