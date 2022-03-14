import { TextMessage } from "@line/bot-sdk";

import { FetchQiitaData } from "../../api/qiita/FetchQiitaData";
import { QiitaItem } from "../../api/qiita/types/QiitaItemType";

export const QiitaArticleMessage = async (): Promise<TextMessage> => {
  const qiitaArticle: any = await FetchQiitaData();
  const data: QiitaItem = qiitaArticle;

  let titleMessage = "";
  let urlMessage = "";
  let numberList = 1;
  data.setTitle.map((res) => {
    const addTitleMessage = res;
    if (titleMessage == "") {
      titleMessage = `[${numberList}]${addTitleMessage}`;
      numberList++;
    } else {
      titleMessage += `\n\n[${numberList}]${addTitleMessage}`;
      numberList++;
    }
  });
  numberList = 1;
  data.setUrl.map((res) => {
    const addUrlMessage = res;
    if (urlMessage == "") {
      urlMessage = `[${numberList}]${addUrlMessage}`;
      numberList++;
    } else {
      urlMessage += `\n\n[${numberList}]${addUrlMessage}`;
      numberList++;
    }
  });
  const message = titleMessage + "\n\n" + urlMessage;

  return {
    type: "text",
    text: message,
  };
};
