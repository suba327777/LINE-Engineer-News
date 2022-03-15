import { TextMessage } from "@line/bot-sdk";

import { FetchNewsData } from "../../api/news/FetchNewsData";
import { FetchMessage } from "../../module/FetchMessage";

export const NewsArticleMessage = async (): Promise<TextMessage> => {
  const data: any = await FetchNewsData();

  const message: string = await FetchMessage(data);

  return {
    type: "text",
    text: message,
  };
};
