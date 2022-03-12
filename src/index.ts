// Load the package
import {
  Client,
  ClientConfig,
  middleware,
  MiddlewareConfig,
  WebhookEvent,
} from "@line/bot-sdk";
import express from "express";
import dotenv from "dotenv";
import { QiitaArticleMessage } from "./common/template/message/QiitaArticleMessage";
// import { FetchQiitaData } from "./common/api/qiita/FetchQiitaData";
dotenv.config();

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
    // const events: WebhookEvent[] = req.body.events;
    // console.log(events);
    // events.map(async (event: WebhookEvent): Promise<void> => {
    //   try {
    //
    //   } catch (err: unknown) {
    //     console.log(err);
    //   }
    // });
  },
);

// もし文字列がなかったらこの関数を実行する
(async (): Promise<void> => {
  try {
    const message = await QiitaArticleMessage();

    client.broadcast(message);
  } catch (err: unknown) {
    console.log(err);
  }
})();

// Start the server
app.listen(PORT, (): void => {
  console.log(`Application is live and listening on port ${PORT}`);
});
