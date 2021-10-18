"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordFunError = void 0;
class DiscordFunError extends Error {
    constructor(msg) {
        if (!msg)
            throw new TypeError('Missing Error Message! 🏓');
        super(msg);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DiscordFunError.prototype);
    }
    sayHello() {
        return "Discord Fun Error: " + this.message;
    }
}
exports.DiscordFunError = DiscordFunError;
//# sourceMappingURL=DiscordFunError.js.map