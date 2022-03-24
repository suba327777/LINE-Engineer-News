/*  packages */
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const qiitaAccessToken = process.env.QIITA_ACCESS_TOKEN;

// // リクエストヘッダ+認証情報
export const QiitaApiClient = axios.create({
  baseURL: "https://qiita.com/api/v2",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    // 認証
    Authorization: `Bearer ${qiitaAccessToken}`,
  },
});
