import { QiitaApiClient } from "./QiitaApiClient";
import { QiitaItem, QiitaItemResponse } from "./types/QiitaItems";

export const FetchQiitaData = async () => {
  try {
    const nowDate = new Date();

    let setTitle = [""];
    let setUrl = [""];

    const stocks = "stocks:>=10";

    await QiitaApiClient.get<Array<QiitaItemResponse>>("/items", {
      params: {
        //    5件の記事を取得する
        per_page: 5,
        // 記事のストック数が10以上
        query: stocks,
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
