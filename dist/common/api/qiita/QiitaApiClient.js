"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QiitaApiClient = void 0;
/*  packages */
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const qiitaAccessToken = process.env.QIITA_ACCESS_TOKEN;
// // リクエストヘッダ+認証情報
exports.QiitaApiClient = axios_1.default.create({
    baseURL: "https://qiita.com/api/v2",
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        // 認証
        Authorization: `Bearer ${qiitaAccessToken}`,
    },
});
//# sourceMappingURL=QiitaApiClient.js.map