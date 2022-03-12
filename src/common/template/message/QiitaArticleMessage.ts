import { TextMessage } from "@line/bot-sdk";
import { FetchQiitaData } from "../../api/qiita/FetchQiitaData";

export const QiitaArticleMessage = async (): Promise<TextMessage> => {
  const data: Array<string> = await FetchQiitaData();
  //   console.log("a");
  console.log(data);
  data.map((res, i: number) => {
    res[i];
  });
  return {
    type: "text",
    text: "やあ",
  };
};
