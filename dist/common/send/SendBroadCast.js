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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*  packages */
const bot_sdk_1 = require("@line/bot-sdk");
const dotenv_1 = __importDefault(require("dotenv"));
/* messages */
const QiitaArticleMessage_1 = require("../template/message/QiitaArticleMessage");
const NewsArticleMessage_1 = require("../template/message/NewsArticleMessage");
const CommentMessage_1 = require("../template/message/CommentMessage");
dotenv_1.default.config();
// Setup all LINE client and Express configurations.
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
    channelSecret: process.env.CHANNEL_SECRET || "",
};
const client = new bot_sdk_1.Client(config);
(() => __awaiter(void 0, void 0, void 0, function* () {
    client.broadcast((0, CommentMessage_1.CommentMessage)());
    client.broadcast(yield (0, QiitaArticleMessage_1.QiitaArticleMessage)());
    client.broadcast(yield (0, NewsArticleMessage_1.NewsArticleMessage)());
}))();
//# sourceMappingURL=SendBroadCast.js.map