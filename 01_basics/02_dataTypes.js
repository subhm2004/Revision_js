"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser broswer me chalta h ye na ki node me 

console.log(3 + 3) // code readability should be high

console.log("shubham")


let name = "shubham"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint use kar dete h agar number se bada value rakhni ho to
// string => ""
// boolean => true/false
// null => standalone value 
// undefined => 
// symbol => unique


// object

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean


console.log(typeof undefined); // undefined
console.log(typeof null); // object


// primitive data types => 7 types ke hote hai 
// number, string, boolean, null, undefined, symbol, bigint
const score = 100; 
const scoreValue = 100n; // bigint last me n lagana hota hai to big int ban jata hai

const isLoggedIn1 = false; // boolean
const temperature = null; // null
let userName; // undefined
const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // symbol, unique value return karega, even if description same hoga to bhi unique value return karega

console.log(id === anotherId); // false, kyuki dono symbol unique hote hai

const bigNumber = BigInt("1234567890123456789012345678901234567890") // bigInt, it can store very large numbers
const anotherBigNumber = 1234567890123456789012345678901234567890n; // bigInt, it can store very large numbers
console.log(bigNumber);

// non-primitive data types => object, array, function

const heros = ["shaktiman", "doga", "nagraj"]; // array, non-primitive data type

let myObj = {
    name: "shubham",
    age: 18,
    isLoggedIn: false
} // object, non-primitive data type

function myFunc() {
    console.log("hello world");
} // function, non-primitive data type

const myFunc2 = function() { // function as a variable me store kar sakte hai, anonymous function
    console.log("hello world");
} // function, non-primitive data type

const myFunc3 = () => {
    console.log("hello world");
} // function, non-primitive data type

console.log(typeof heros); // object, kyuki array bhi object hi hota hai
console.log(typeof myObj); // object
console.log(typeof myFunc); // function (object function)

console.log(Array.isArray(heros)); // true, array check karne ke liye use karte hai
console.log(typeof null); // object, ye ek bug hai javascript ka, null ko object return karta hai, isliye null ko primitive data type me count nahi karte hai
console.log(typeof 100n); // bigint, kyuki 100n ko bigint banaya gaya hai

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TYPE OF MEMORY

// stack memory => primitive data types store hote hai stack memory me, stack memory fast hota hai, but size limited hota hai
// heap memory => non-primitive data types store hote hai heap memory me, heap memory slow hota hai, but size unlimited hota hai

// primitive data types => stack memory me store hote hai
// non-primitive data types => heap memory me store hote hai, but reference stack memory me store hota hai, reference ke through heap memory me access karte hai non-primitive data types ko

let myName2 = "shubham"; // primitive data type, stack memory me store hoga
let myName3 = myName2; // primitive data type, stack memory me store hoga, myName3 me myName2 ki value copy ho jayegi, dono alag alag memory location pe store honge
myName3 = "hardik"; 

console.log(myName2); // shubham
console.log(myName3); // hardik

let userOne = {
    email: "subhu04012003@gmail.com",
    name: "shubham",
    age: 18
} // non-primitive data type, heap memory me store hoga, reference stack memory me store

let userTwo = userOne; 
userTwo.name = "hardik"; 
console.log(userOne.name); // hardik, kyuki userOne aur userTwo dono same reference ko point kar rahe hai heap memory me, isliye dono me changes reflect honge
console.log(userTwo.name); // hardik

