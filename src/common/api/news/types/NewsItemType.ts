// 使用する型
export type NewsItem = {
  title: string;
  url: string;
  urlToImage: string;
};

// NewsApiのレスポンスの　型
export type NewsItemResponse = {
  status: string;
  totalResults: number;
  articles: [
    {
      source: [];
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
    },
  ];
};
