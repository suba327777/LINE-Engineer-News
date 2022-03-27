/* packages */
import { TextMessage } from "@line/bot-sdk";

export const ErrorMessage = (): TextMessage => {
  return {
    type: "text",
    text: "メッセージ入力に対する機能は対応しておりません",
  };
};
