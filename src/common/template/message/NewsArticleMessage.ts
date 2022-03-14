import { TextMessage } from "@line/bot-sdk";

import { FetchNewsData } from "../../api/news/FetchNewsData";
import { NewsItem } from "../../api/news/types/NewsItemType";

export const NewsArticleMessage = async (): Promise<TextMessage> => {
  const NewsArticle: any = await FetchNewsData();
  const data: NewsItem = NewsArticle;

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
