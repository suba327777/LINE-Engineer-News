/* packages */
import { Client, WebhookEvent } from "@line/bot-sdk";
import { ErrorMessage } from "../template/message/ErrorMessage";

export const SendMessage = async (client: Client, event: WebhookEvent): Promise<void> => {
  try {
    if (event.type !== "message" || event.message.type !== "text") {
      return;
    }
    const { replyToken } = event;
    const { text } = event.message;
    if (text) {
      client.replyMessage(replyToken, ErrorMessage());
    }
  } catch (err: unknown) {
    console.log(err);
  }
};
