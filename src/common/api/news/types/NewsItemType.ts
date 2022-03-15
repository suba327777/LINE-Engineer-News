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
      content: string;
    },
  ];
};
