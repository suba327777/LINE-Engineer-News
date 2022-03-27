/* packages */
import { TextMessage } from "@line/bot-sdk";

export const FollowMessage = (uesrName: string): TextMessage => {
  return {
    type: "text",
    text: `${uesrName}さん\nはじめまして!\n毎日エンジニアニュースです!\n友達追加ありがとうございます\n毎日プログラミングに関する記事を通知します!`,
  };
};
