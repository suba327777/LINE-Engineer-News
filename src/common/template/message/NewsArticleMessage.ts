/*  packages */
import { FlexBubble, FlexMessage, FlexCarousel } from "@line/bot-sdk";
/* modules */
import { FetchNewsData } from "../../api/news/FetchNewsData";

/* types */
import { NewsItem } from "../../api/news/types/NewsItemType";

export const NewsArticleMessage = async (): Promise<FlexMessage> => {
  const NewsData: any = await FetchNewsData();

  const FlexMessageContents: FlexBubble[] = await NewsData.map((val: NewsItem) => {
    let urlImage = val.urlToImage;
    const fileExtension = urlImage.split(".").pop();

    if (fileExtension === "svg") {
      urlImage = "https://source.unsplash.com/featured/?programming";
    }

    const flexBuble: FlexBubble = {
      type: "bubble",
      hero: {
        type: "image",
        url: urlImage,
        size: "full",
        aspectMode: "cover",
        aspectRatio: "20:13",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: val.title,
            weight: "bold",
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            style: "link",
            action: {
              type: "uri",
              label: "詳細はこちらをClick!!",
              uri: val.url,
            },
          },
        ],
      },
    };
    return flexBuble;
  });

  const flexContainer: FlexCarousel = {
    type: "carousel",
    contents: FlexMessageContents,
  };

  const flexMessage: FlexMessage = {
    type: "flex",
    altText: "記事の一覧になります",
    contents: flexContainer,
  };
  return flexMessage;
};
