// export cnost FetchNewsData=

import { NewsApiClient } from "./NewsApiClient";
import { NewsItemResponse } from "./types/NewsItemType";

export const FetchNewsData = async (): Promise<any> => {
  try {
    const setTitle = [""];
    const setUrl = [""];

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const ISO = yesterday.toISOString();

    await NewsApiClient.get<NewsItemResponse>("/everything", {
      params: {
        //   検索する記事
        q: "プログラミング",
        // 5件の記事を取得する
        pageSize: 10,
        // 昨日から
        from: ISO,
        // 今日まで
        to: today,

        // 人気の記事の順に並び替える
        sortBy: "popularity",
      },
    })
      .then((res) => {
        res.data.articles.forEach((val, i: number) => {
          setTitle[i] = val.title;
          setUrl[i] = val.url;
        });
      })
      .catch((err: undefined) => {
        console.log(err);
      });

    return { setTitle, setUrl };
  } catch (err: unknown) {
    console.log(err);
  }
};
