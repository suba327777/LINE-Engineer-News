import { TextMessage } from "@line/bot-sdk";

import { FetchQiitaData } from "../../api/qiita/FetchQiitaData";
import { FetchMessage } from "../../module/FetchMessage";

export const QiitaArticleMessage = async (): Promise<TextMessage> => {
  const data: any = await FetchQiitaData();

  const message: string = await FetchMessage(data);
  return {
    type: "text",
    text: message,
  };
};
