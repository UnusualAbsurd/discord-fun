"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EightBall = void 0;
const DiscordFunError_1 = require("../Error/DiscordFunError");
class EightBall {
    options;
    message;
    constructor(options) {
        if (!options.message)
            throw new DiscordFunError_1.DiscordFunError('Test');
    }
}
exports.EightBall = EightBall;
//# sourceMappingURL=8ball.js.map