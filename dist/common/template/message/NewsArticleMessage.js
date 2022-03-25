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
exports.NewsArticleMessage = void 0;
/* modules */
const FetchNewsData_1 = require("../../api/news/FetchNewsData");
const NewsArticleMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const NewsData = yield (0, FetchNewsData_1.FetchNewsData)();
    const FlexMessageContents = yield NewsData.map((val) => {
        let urlImage = val.urlToImage;
        const fileExtension = urlImage.split(".").pop();
        if (fileExtension === "svg") {
            urlImage = "https://source.unsplash.com/featured/?programming";
        }
        const flexBuble = {
            type: "bubble",
            hero: {
                type: "image",
                url: urlImage,
                size: "full",
                aspectMode: "cover",
                aspectRatio: "20:13",
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "text",
                        text: val.title,
                        weight: "bold",
                        wrap: true,
                    },
                ],
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "button",
                        style: "link",
                        action: {
                            type: "uri",
                            label: "詳細はこちらをClick!!",
                            uri: val.url,
                        },
                    },
                ],
            },
        };
        return flexBuble;
    });
    const flexContainer = {
        type: "carousel",
        contents: FlexMessageContents,
    };
    const flexMessage = {
        type: "flex",
        altText: "記事の一覧になります",
        contents: flexContainer,
    };
    return flexMessage;
});
exports.NewsArticleMessage = NewsArticleMessage;
//# sourceMappingURL=NewsArticleMessage.js.map