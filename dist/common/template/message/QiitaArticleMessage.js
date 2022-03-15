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
exports.QiitaArticleMessage = void 0;
const FetchQiitaData_1 = require("../../api/qiita/FetchQiitaData");
const FetchMessage_1 = require("../../module/FetchMessage");
const QiitaArticleMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, FetchQiitaData_1.FetchQiitaData)();
    const message = yield (0, FetchMessage_1.FetchMessage)(data);
    return {
        type: "text",
        text: message,
    };
});
exports.QiitaArticleMessage = QiitaArticleMessage;
//# sourceMappingURL=QiitaArticleMessage.js.map