"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMessage = void 0;
const CommentMessage = () => {
    const today = new Date().toLocaleDateString("ja-JP");
    return {
        type: "text",
        text: `${today}の記事はこちらです!!`,
    };
};
exports.CommentMessage = CommentMessage;
//# sourceMappingURL=CommentMessage.js.map