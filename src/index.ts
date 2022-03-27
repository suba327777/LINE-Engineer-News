/*  packages */
import { Client, ClientConfig, middleware, MiddlewareConfig, WebhookEvent } from "@line/bot-sdk";
import express from "express";
import dotenv from "dotenv";
/* Send */
import { SendMessage } from "./common/send/SendMessage";
import { SendFollow } from "./common/send/SendFollow";

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
    // Assign only the 0th element of the array from the events array to a variable.
    const events: WebhookEvent[] = req.body.events;

    // 受信した全てのイベントを処理する
    events.map(async (event: WebhookEvent): Promise<void> => {
      try {
        await SendMessage(client, event);
        await SendFollow(client, event);
      } catch (err: unknown) {
        console.log(err);
      }
    });
    // Respond to LINE side with status code 200 ahead of time.
    res.sendStatus(200);
  },
);

// Start the server
app.listen(PORT, (): void => {
  console.log(`Application is live and listening on port ${PORT}`);
});
