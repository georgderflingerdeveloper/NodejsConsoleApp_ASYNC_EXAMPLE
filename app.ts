import { setTimeout, setInterval } from "timers";


function doubleAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
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
		};
		resolve(res);
	});
}

async function addAsync(x) {
	const a = await doubleAfter2Seconds(10);
	const b = await Loop();
	const c = await doubleAfter2Seconds(30);
	return x + a + b + c;
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

 