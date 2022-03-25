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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QiitaArticleMessage = void 0;
/* modules */
const FetchQiitaData_1 = require("../../api/qiita/FetchQiitaData");
const moment_1 = __importDefault(require("moment"));
const QiitaArticleMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const qiitaData = yield (0, FetchQiitaData_1.FetchQiitaData)();
    const FlexMessageContents = yield qiitaData.map((val) => {
        const createdAt = (0, moment_1.default)(val.created_at);
        const formatCreatedAt = createdAt.format("MM月DD日HH時mm分 (ddd)");
        const flexBuble = {
            type: "bubble",
            header: {
                type: "box",
                layout: "vertical",
                backgroundColor: "#59bb0c",
                contents: [
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "Qiita",
                                color: "#ffffff",
                            },
                            {
                                type: "box",
                                layout: "horizontal",
                                alignItems: "flex-end",
                                contents: [
                                    {
                                        type: "image",
                                        url: "https://img.icons8.com/fluency/48/000000/thumb-up.png",
                                        size: "40%",
                                    },
                                    {
                                        type: "text",
                                        text: `${val.likes_count}`,
                                    },
                                ],
                                paddingStart: "50px",
                            },
                        ],
                    },
                ],
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "image",
                                        url: val.user.profile_image_url,
                                        aspectMode: "cover",
                                        size: "full",
                                        align: "end",
                                    },
                                ],
                                cornerRadius: "100px",
                                width: "30px",
                                height: "30px",
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                contents: [
                                    {
                                        type: "text",
                                        text: val.user.id,
                                        size: "10px",
                                    },
                                ],
                                paddingStart: "11px",
                                paddingTop: "7px",
                            },
                        ],
                        paddingBottom: "2px",
                    },
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "text",
                                text: `投稿日 ${formatCreatedAt}`,
                                size: "10px",
                            },
                        ],
                        paddingBottom: "10px",
                    },
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
                            label: "詳細はこちら!!",
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
exports.QiitaArticleMessage = QiitaArticleMessage;
//# sourceMappingURL=QiitaArticleMessage.js.map