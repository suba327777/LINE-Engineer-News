/* packages */
import { Client, WebhookEvent } from "@line/bot-sdk";
/* Messages */
import { FollowMessage } from "../template/message/FollowMessage";

export const SendFollow = async (client: Client, event: WebhookEvent): Promise<void> => {
  if (event.type === "follow") {
    const userName = event.source.userId
      ? (await client.getProfile(event.source.userId)).displayName
      : "user";

    const { replyToken } = event;
    client.replyMessage(replyToken, FollowMessage(userName));
  }
};
