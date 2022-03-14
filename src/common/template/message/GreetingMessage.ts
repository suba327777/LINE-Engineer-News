import { TextMessage } from "@line/bot-sdk";

export const GreetingMessage = (): TextMessage => {
  const today: string = new Date().toLocaleDateString("ja-JP");

  return {
    type: "text",
    text: `おはようございます!!\n${today}の記事はこちらです!!`,
  };
};
