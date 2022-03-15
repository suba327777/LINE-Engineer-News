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
exports.FetchMessage = void 0;
const FetchMessage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let titleMessage = "";
        let urlMessage = "";
        let numberList = 1;
        data.setTitle.forEach((res) => {
            const addTitleMessage = res;
            if (titleMessage === "") {
                titleMessage = `[${numberList}]${addTitleMessage}`;
                numberList++;
            }
            else {
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
            }
            else {
                urlMessage += `\n\n[${numberList}]${addUrlMessage}`;
                numberList++;
            }
        });
        const message = titleMessage + "\n\n" + urlMessage;
        return message;
    }
    catch (err) {
        console.log(err);
    }
});
exports.FetchMessage = FetchMessage;
//# sourceMappingURL=FetchMessage.js.map