/*  packages */
import { Client, ClientConfig } from "@line/bot-sdk";
import dotenv from "dotenv";
/* messages */
import { QiitaArticleMessage } from "../template/message/QiitaArticleMessage";
import { NewsArticleMessage } from "../template/message/NewsArticleMessage";
import { CommentMessage } from "../template/message/CommentMessage";

dotenv.config();

// Setup all LINE client and Express configurations.
const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET || "",
};

const client = new Client(config);

(async () => {
  client.broadcast(CommentMessage());
  client.broadcast(await QiitaArticleMessage());
  client.broadcast(await NewsArticleMessage());
})();
