/*  packages */
import { TextMessage } from "@line/bot-sdk";

export const CommentMessage = (): TextMessage => {
  const today: string = new Date().toLocaleDateString("ja-JP");

  return {
    type: "text",
    text: `${today}の記事はこちらです!!`,
  };
};
