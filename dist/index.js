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
/* Send */
const SendMessage_1 = require("./common/send/SendMessage");
const SendFollow_1 = require("./common/send/SendFollow");
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
    // Assign only the 0th element of the array from the events array to a variable.
    const events = req.body.events;
    // 受信した全てのイベントを処理する
    events.map((event) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, SendMessage_1.SendMessage)(client, event);
            yield (0, SendFollow_1.SendFollow)(client, event);
        }
        catch (err) {
            console.log(err);
        }
    }));
    // Respond to LINE side with status code 200 ahead of time.
    res.sendStatus(200);
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Application is live and listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map