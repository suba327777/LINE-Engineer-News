import { QiitaApiClient } from "./QiitaApiClient";

(async () => {
  try {
    const nowDate = new Date();

    const fetchqiitaData = await QiitaApiClient.get("/items", {
      params: {
        //    1件の記事を取得する
        per_page: 1,
      },
    })
      .then((res) => {
        console.log(res);
        // return res;
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  } catch (err: unknown) {
    console.log(err);
  }
})();
