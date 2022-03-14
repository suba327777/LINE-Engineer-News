import { TextMessage, Message } from "@line/bot-sdk";
import { FetchQiitaData } from "../../api/qiita/FetchQiitaData";
import { QiitaItem } from "../../api/qiita/types/QiitaItems";

export const QiitaArticleMessage = async (): Promise<TextMessage> => {
  const today: string = new Date().toLocaleDateString("ja-JP");
  console.log(today);
  const qiitaArticle: any = await FetchQiitaData();
  const data: QiitaItem = qiitaArticle;

  let titleMessage = "";
  let urlMessage = "";

  data.setTitle.map((res) => {
    const addTitleMessage = res;
    if (titleMessage == "") {
      titleMessage = addTitleMessage;
    } else {
      titleMessage += "\n\n" + addTitleMessage;
    }
  });

  data.setUrl.map((res) => {
    const addUrlMessage = res;
    if (urlMessage == "") {
      urlMessage = addUrlMessage;
    } else {
      urlMessage += "\n\n" + addUrlMessage;
    }
  });

  const message = titleMessage + "\n\n" + urlMessage;

  return {
    type: "text",
    text: message,
  };
};
