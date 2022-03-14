// export cnost FetchNewsData=

import { NewsApiClient } from "./NewsApiClient";
import { NewsItemResponse } from "./types/NewsItemType";

export const FetchNewsData = async (): Promise<any> => {
  try {
    let setTitle = [""];
    let setUrl = [""];
    await NewsApiClient.get<NewsItemResponse>("/everything", {
      params: {
        //   検索する記事
        q: "プログラミング",
        // 5件の記事を取得する
        pageSize: 10,
        // 人気の記事の順に並び替える
        sortBy: "popularity",
      },
    }).then((res) => {
      res.data.articles.map((val, i: number) => {
        setTitle[i] = val.title;
        setUrl[i] = val.url;
      });
    });

    return { setTitle, setUrl };
  } catch (err: unknown) {
    console.log(err);
  }
};
