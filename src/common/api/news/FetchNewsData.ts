/* modules */
import { NewsApiClient } from "./NewsApiClient";
/* types */
import { NewsItem, NewsItemResponse } from "./types/NewsItemType";

export const FetchNewsData = async (): Promise<any> => {
  try {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formatYesterday = yesterday.toISOString();

    const newsData = await NewsApiClient.get<NewsItemResponse>("/everything", {
      params: {
        //   検索する記事
        q: "プログラミング OR エンジニア",

        // 12件の記事を取得する
        pageSize: 12,
        // 昨日から
        from: formatYesterday,
        // 今日まで
        to: today,
        // 人気の記事の順に並び替える
        sortBy: "publishedAt",
      },
    })
      .then((res) => {
        return res.data.articles.map<NewsItem>((val) => {
          return {
            title: val.title,
            url: val.url,
            urlToImage: val.urlToImage,
          };
        });
      })
      .catch((err: unknown) => {
        console.log(err);
      });

    return newsData;
  } catch (err: unknown) {
    console.log(err);
  }
};
