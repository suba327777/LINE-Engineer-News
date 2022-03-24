/* packages */
import { FlexBubble, FlexCarousel, FlexMessage } from "@line/bot-sdk";
/* modules */
import { FetchQiitaData } from "../../api/qiita/FetchQiitaData";
import moment from "moment";
/* types */
import { QiitaItem } from "../../api/qiita/types/QiitaItemType";

export const QiitaArticleMessage = async (): Promise<FlexMessage> => {
  const qiitaData: any = await FetchQiitaData();

  const FlexMessageContents: FlexBubble[] = await qiitaData.map((val: QiitaItem) => {
    const createdAt = moment(val.created_at);
    const formatCreatedAt = createdAt.format("MM月DD日HH時mm分 (ddd)");

    const flexBuble: FlexBubble = {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#59bb0c",
        contents: [
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "Qiita",
                color: "#ffffff",
              },
              {
                type: "box",
                layout: "horizontal",
                alignItems: "flex-end",
                contents: [
                  {
                    type: "image",
                    url: "https://img.icons8.com/fluency/48/000000/thumb-up.png",
                    size: "40%",
                  },
                  {
                    type: "text",
                    text: `${val.likes_count}`,
                  },
                ],
                paddingStart: "50px",
              },
            ],
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "image",
                    url: val.user.profile_image_url,
                    aspectMode: "cover",
                    size: "full",
                    align: "end",
                  },
                ],
                cornerRadius: "100px",
                width: "30px",
                height: "30px",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: val.user.id,
                    size: "10px",
                  },
                ],
                paddingStart: "11px",
                paddingTop: "7px",
              },
            ],
            paddingBottom: "2px",
          },
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text: `投稿日 ${formatCreatedAt}`,
                size: "10px",
              },
            ],
            paddingBottom: "10px",
          },
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
              label: "詳細はこちら!!",
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
