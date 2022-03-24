import { QiitaApiClient } from "./QiitaApiClient";
/* types */
import { QiitaItem, QiitaItemResponse } from "./types/QiitaItemType";

export const FetchQiitaData = async (): Promise<any> => {
  try {
    const qiitaData = await QiitaApiClient.get<Array<QiitaItemResponse>>("/items", {
      params: {
        //    10件の記事を取得する
        per_page: 10,
        // 記事のストック数が10以上
        query: "stocks:>=10",
      },
    })
      .then((res) => {
        // console.log(res);
        return res.data.map<QiitaItem>((val) => {
          return {
            title: val.title,
            likes_count: val.likes_count,
            user: val.user,
            url: val.url,
            created_at: val.created_at,
          };
        });
      })
      .catch((err: unknown) => {
        console.log(err);
      });

    console.log(qiitaData);
    return qiitaData;
  } catch (err: unknown) {
    console.log(err);
  }
};
