"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingMessage = void 0;
const GreetingMessage = () => {
    const today = new Date().toLocaleDateString("ja-JP");
    return {
        type: "text",
        text: `${today}の記事はこちらです!!`,
    };
};
exports.GreetingMessage = GreetingMessage;
//# sourceMappingURL=CommentMessage.js.map