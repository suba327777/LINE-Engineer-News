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
exports.FetchQiitaData = void 0;
const QiitaApiClient_1 = require("./QiitaApiClient");
const FetchQiitaData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const setTitle = [""];
        const setUrl = [""];
        yield QiitaApiClient_1.QiitaApiClient.get("/items", {
            params: {
                //    5件の記事を取得する
                per_page: 5,
                // 記事のストック数が10以上
                query: "stocks:>=10",
            },
        })
            .then((res) => {
            res.data.forEach((val, i) => {
                setTitle[i] = val.title;
                setUrl[i] = val.url;
            });
        })
            .catch((err) => {
            console.log(err);
        });
        return { setUrl, setTitle };
    }
    catch (err) {
        console.log(err);
    }
});
exports.FetchQiitaData = FetchQiitaData;
//# sourceMappingURL=FetchQiitaData.js.map