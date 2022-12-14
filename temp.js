// const func = () => {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             console.log("I will run after every 2 seconds");
//             resolve(true);
//         }, 5000)
//     })
// }

// setInterval(async () => {
//     await func()
//     console.log("I will run after every minute")
// }, 1000)



// function IntervalTimer(callback, interval) {
//     var timerId, startTime, remaining = 0;
//     var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

//     this.pause = function () {
//         if (state != 1) return;

//         remaining = interval - (new Date() - startTime);
//         clearInterval(timerId);
//         state = 2;
//     };

//     this.resume = function () {
//         if (state != 2) return;

//         state = 3;
//         setTimeout(this.timeoutCallback, remaining);
//     };

//     this.timeoutCallback = function () {
//         if (state != 3) return;

//         callback();

//         startTime = new Date();
//         timerId = setInterval(callback, interval);
//         state = 1;
//     };

//     startTime = new Date();
//     timerId = setInterval(callback, interval);
//     state = 1;
// }

// var timer = new IntervalTimer(function () {
//     console.log("Done!");
// }, 5000);

// setTimeout(function () {
//     timer.pause();
//     setTimeout(function () {
//         timer.resume();
//     }, 5000);
// }, 2000);

const { findStringForEmail } = require('./utils/Emailer/controller')
const subject = "Fwd: Nuovo messaggio di Paola turco sul tuo immobile, con rif: 01-166/2015 2, Villa in piazzetta Monache, Contrada Vennarello, - 87030, 6, Carolei";
console.log(findStringForEmail(subject, ""))
