// Load the package
import {
  Client,
  ClientConfig,
  middleware,
  MiddlewareConfig,
} from "@line/bot-sdk";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { QiitaArticleMessage } from "./common/template/message/QiitaArticleMessage";
import { NewsArticleMessage } from "./common/template/message/NewsArticleMessage";
import { GreetingMessage } from "./common/template/message/GreetingMessage";

const PORT = process.env.PORT || 3000;

// Setup all LINE client and Express configurations.
const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET || "",
};

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET || "",
};

// Create a new Express application.
const app: express.Express = express();
// Create a new LINE SDK client.
const client = new Client(config);

// Testing Routing
app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("hello");
});

// App Routing
app.post(
  "/webhook",
  middleware(middlewareConfig),
  async (req: express.Request, res: express.Response): Promise<void> => {
    // Respond to LINE side with status code 200 ahead of time.
    res.sendStatus(200);

    // リプライメッセージ機能はつけないのでなし
  },
);

(async (): Promise<void> => {
  try {
    client.broadcast(GreetingMessage());
    client.broadcast(await QiitaArticleMessage());
    client.broadcast(await NewsArticleMessage());
  } catch (err: unknown) {
    console.log(err);
  }
})();

// Start the server
app.listen(PORT, (): void => {
  console.log(`Application is live and listening on port ${PORT}`);
});
