"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const timers_1 = require("timers");
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        timers_1.setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}
function Loop() {
    return new Promise(resolve => {
        var res = 1;
        var i = 0;
        for (i = 1; i < 100000000; i++) {
            res = i;
        }
        ;
        resolve(res);
    });
}
function addAsync(x) {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield doubleAfter2Seconds(10);
        const b = yield Loop();
        const c = yield doubleAfter2Seconds(30);
        return x + a + b + c;
    });
}
console.log("Start Async");
// asynchronous jobs are started
addAsync(10).then((sum) => {
    console.log("Async Result is ", sum);
});
// while running asyncronous jobs system can process next commandos ... so easys can be paralell processing with
// node js
console.log("Ready for Next Job ...");
//var DelayTime = 5000;
//var Periode = 500;
//setTimeout
//(
//    () =>
//    {
//        console.log('Delayed ...');
//    }, DelayTime
//);
//setInterval
//(
//    () =>
//    {
//        console.log('Periodic ...');
//    }, Periode
//);
//# sourceMappingURL=app.js.map