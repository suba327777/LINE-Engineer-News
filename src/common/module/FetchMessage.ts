import { SetItem } from "./types/SetItemType";

export const FetchMessage = async (data: SetItem): Promise<any> => {
  try {
    let titleMessage = "";
    let urlMessage = "";
    let numberList = 1;
    data.setTitle.forEach((res) => {
      const addTitleMessage = res;
      if (titleMessage === "") {
        titleMessage = `[${numberList}]${addTitleMessage}`;
        numberList++;
      } else {
        titleMessage += `\n\n[${numberList}]${addTitleMessage}`;
        numberList++;
      }
    });
    numberList = 1;
    data.setUrl.forEach((res) => {
      const addUrlMessage = res;
      if (urlMessage === "") {
        urlMessage = `[${numberList}]${addUrlMessage}`;
        numberList++;
      } else {
        urlMessage += `\n\n[${numberList}]${addUrlMessage}`;
        numberList++;
      }
    });
    const message = titleMessage + "\n\n" + urlMessage;
    return message;
  } catch (err: unknown) {
    console.log(err);
  }
};
