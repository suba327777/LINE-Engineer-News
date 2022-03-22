import { QiitaApiClient } from "./QiitaApiClient";
import { QiitaItemResponse } from "./types/QiitaItemType";

export const FetchQiitaData = async (): Promise<any> => {
  try {
    const qiitaData = await QiitaApiClient.get<Array<QiitaItemResponse>>(
      "/items",
      {
        params: {
          //    5件の記事を取得する
          per_page: 5,
          // 記事のストック数が10以上
          query: "stocks:>=10",
        },
      },
    )
      .then((res) => {
        return res.data;
      })
      .catch((err: unknown) => {
        console.log(err);
      });

    return qiitaData;
  } catch (err: unknown) {
    console.log(err);
  }
};
