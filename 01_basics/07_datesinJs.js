// Dates in JavaScript

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString()); // Fri Apr 03 2026 11:11:21 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Apr 03 2026

console.log(myDate.toTimeString()); // 11:11:21 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()); // 4/3/2026, 11:11:21 AM

console.log(typeof myDate); // Object

let myCreatedDate1 = new Date(2026, 0, 23) 
console.log(myCreatedDate1.toDateString()); // // Fri Jan 23 2026 (Months 0 idx se start hote hai javascript mein)

let myCreatedDate2 = new Date(2026, 0, 23, 13, 41,56) // (year, month, date, hours, minutes, seconds)
console.log(myCreatedDate2.toLocaleString()); //1/23/2026, 5:41:56 AM
let myCreatedDate3 = new Date("2026-01-14")

let myCreatedDate4 = new Date("01-14-2026")
console.log(myCreatedDate4.toLocaleString());

console.log(myCreatedDate2.toLocaleString('en-IN')); // 23/1/2026, 1:41:56 pm (en-IN me date pehle aata hai phir month aur phir year)

// Time stamps
let myTimeStamp = Date.now()

console.log(myTimeStamp); // ye ek miliseconds me time stamp return karta hai, ye 1 January 1970 se lekar ab tak ke milliseconds ko return karta hai, isko hum epoch time bhi kehte hai

console.log(myCreatedDate2.getTime()); // ye bhi time stamp return karta hai, ye 1 January 1970 se lekar myCreatedDate2 ke time tak ke milliseconds ko return karta hai

console.log(Math.floor(Date.now()/1000)); // ye seconds return krta hai 

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1); // month chahiye to ye kr dete hai 
console.log(newDate.getDay());
console.log(newDate.getFullYear());


// `${newDate.getDay()} and the time `



console.log(newDate.toLocaleString("en-IN", { // hum apne accoding customise kr skte hai toLocaleString me
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
}           
));
