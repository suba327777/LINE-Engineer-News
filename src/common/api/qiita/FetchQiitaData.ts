import { QiitaApiClient } from "./QiitaApiClient";
import { QiitaItemResponse } from "./types/QiitaItemType";

export const FetchQiitaData = async (): Promise<any> => {
  try {
    let setTitle = [""];
    let setUrl = [""];

    await QiitaApiClient.get<Array<QiitaItemResponse>>("/items", {
      params: {
        //    5件の記事を取得する
        per_page: 5,
        // 記事のストック数が10以上
        query: "stocks:>=10",
      },
    })
      .then((res) => {
        res.data.map((val, i: number) => {
          setTitle[i] = val.title;
          setUrl[i] = val.url;
        });
      })
      .catch((err: unknown) => {
        console.log(err);
      });
    return { setUrl, setTitle };
  } catch (err: unknown) {
    console.log(err);
  }
};
