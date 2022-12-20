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

const email_type_one = "idealista";
const email_type_two = "immobiliare";
const email_type_two_unique = `text-decoration: none;" alig`
const str = `<td style="border-collapse: collapse; font-family: arial; font-size: 16px=
; line-height: 22px; text-decoration: none; font-weight: bold;" align="le=
ft"><a style="color: #377fa6; text-decoration: none;" title="Appartamen=
to in vendita" href="http://www.immobiliare.it/annunci/99879974/" target=
="_blank" rel="noopener noreferrer">Appartamento in vendita</a></td>
</tr>
<tr>
<td style="border-collapse: collapse; font-family: Arial; font-size: 13px=
; color: #666666; line-height: 25px; text-decoration: none;" align="left"=
>Via San Michele Arcangelo 47, Macerata</td>
</tr>
<tr>`

const parseBetween = (beginString, endString, originalString) => {
    var beginIndex = originalString.indexOf(beginString);
    if (beginIndex === -1) {
        return null;
    }
    var beginStringLength = beginString.length;
    var substringBeginIndex = beginIndex + beginStringLength;
    var substringEndIndex = originalString.indexOf(endString, substringBeginIndex);
    if (substringEndIndex === -1) {
        return null;
    }
    return originalString.substring(substringBeginIndex, substringEndIndex);
}
var newStr = parseBetween(email_type_two_unique, "</td>", str)
newStr = newStr.split(',');
console.log(newStr)
