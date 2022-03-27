"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessage = void 0;
const ErrorMessage_1 = require("../template/message/ErrorMessage");
const SendMessage = (client, event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (event.type !== "message" || event.message.type !== "text") {
            return;
        }
        const { replyToken } = event;
        const { text } = event.message;
        if (text) {
            client.replyMessage(replyToken, (0, ErrorMessage_1.ErrorMessage)());
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.SendMessage = SendMessage;
//# sourceMappingURL=SendMessage.js.map