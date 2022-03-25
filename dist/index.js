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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
/* messages */
const QiitaArticleMessage_1 = require("./common/template/message/QiitaArticleMessage");
const NewsArticleMessage_1 = require("./common/template/message/NewsArticleMessage");
const CommentMessage_1 = require("./common/template/message/CommentMessage");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
// Setup all LINE client and Express configurations.
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
    channelSecret: process.env.CHANNEL_SECRET || "",
};
const middlewareConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
    channelSecret: process.env.CHANNEL_SECRET || "",
};
// Create a new Express application.
const app = (0, express_1.default)();
// Create a new LINE SDK client.
const client = new bot_sdk_1.Client(config);
// Testing Routing
app.get("/", (req, res) => {
    res.send("hello");
});
// App Routing
app.post("/webhook", (0, bot_sdk_1.middleware)(middlewareConfig), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.broadcast((0, CommentMessage_1.GreetingMessage)());
        client.broadcast(yield (0, QiitaArticleMessage_1.QiitaArticleMessage)());
        client.broadcast(yield (0, NewsArticleMessage_1.NewsArticleMessage)());
    }
    catch (err) {
        console.log(err);
    }
    // Respond to LINE side with status code 200 ahead of time.
    res.sendStatus(200);
}));
// (async (): Promise<void> => {
//   try {
//     client.broadcast(GreetingMessage());
//     client.broadcast(await QiitaArticleMessage());
//     client.broadcast(await NewsArticleMessage());
//   } catch (err: unknown) {
//     console.log(err);
//   }
// })();
// Start the server
app.listen(PORT, () => {
    console.log(`Application is live and listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map