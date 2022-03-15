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
const FetchNewsData_1 = require("../../api/news/FetchNewsData");
const FetchMessage_1 = require("../../module/FetchMessage");
const NewsArticleMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, FetchNewsData_1.FetchNewsData)();
    const message = yield (0, FetchMessage_1.FetchMessage)(data);
    return {
        type: "text",
        text: message,
    };
});
exports.NewsArticleMessage = NewsArticleMessage;
//# sourceMappingURL=NewsArticleMessage.js.map