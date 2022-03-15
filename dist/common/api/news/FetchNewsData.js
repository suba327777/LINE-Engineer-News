"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchNewsData = void 0;
const NewsApiClient_1 = require("./NewsApiClient");
const FetchNewsData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const setTitle = [""];
        const setUrl = [""];
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const ISO = yesterday.toISOString();
        yield NewsApiClient_1.NewsApiClient.get("/everything", {
            params: {
                //   検索する記事
                q: "プログラミング OR エンジニア",
                // 10件の記事を取得する
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
            res.data.articles.forEach((val, i) => {
                setTitle[i] = val.title;
                setUrl[i] = val.url;
            });
        })
            .catch((err) => {
            console.log(err);
        });
        return { setTitle, setUrl };
    }
    catch (err) {
        console.log(err);
    }
});
exports.FetchNewsData = FetchNewsData;
//# sourceMappingURL=FetchNewsData.js.map