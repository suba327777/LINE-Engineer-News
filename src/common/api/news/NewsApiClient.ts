/*  packages */
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const newsAccessToken = process.env.NEWS_ACCESS_TOKEN;

// // リクエストヘッダ+認証情報
export const NewsApiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    // 認証
    Authorization: `Bearer ${newsAccessToken}`,
  },
});
