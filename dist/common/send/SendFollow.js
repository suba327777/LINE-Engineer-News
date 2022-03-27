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
exports.SendFollow = void 0;
/* Messages */
const FollowMessage_1 = require("../template/message/FollowMessage");
const SendFollow = (client, event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.type === "follow") {
        const userName = event.source.userId
            ? (yield client.getProfile(event.source.userId)).displayName
            : "user";
        const { replyToken } = event;
        client.replyMessage(replyToken, (0, FollowMessage_1.FollowMessage)(userName));
    }
});
exports.SendFollow = SendFollow;
//# sourceMappingURL=SendFollow.js.map