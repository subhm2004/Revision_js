let score = "Shubham"
// let score = 33
// let score = "33abc"
// let score = null


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number) or jo type hoga wo number hi hoga 
// null => 0
//  true => 1; false => 0

let isLoggedIn = "shubham" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shubham" => true


let someNumber = 22001003124

let stringNumber = String(someNumber)
// console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value // value nefative me convert ho jayega
// console.log(negValue); 

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 2^3 = 8 
console.log(2/3); // 0.6666666666666666
console.log(2%3); // 2 (remainder)

let str1 = "hello"
let str2 = "shubham"

let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2); // in 3 cases string concatenation hota hai 
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(1 + 2 + "2"); // left to right evaluation hota hai, isliye pehle 1+2 hota hai fir uska result string ke sath concatenate hota hai

console.log( (3 + 4) * 5 % 3);

console.log(+true); // ye code sabse beakr h likhna esa nhi likhna hota h 
console.log(+false);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // right to left evaluation hota hai, isliye pehle 2+2 hota hai fir uska result num3 me store hota hai, fir num3 ka value num2 me store hota hai, fir num2 ka value num1 me store hota hai

console.log(num1, num2, num3);

let gameCounter = 100
gameCounter++; // post increment operator, pehle value return hoti hai fir uske baad increment hota hai (101 ho gya hai )
console.log(gameCounter++); // ab phle print krega value return hoga 101 fir uske baad increment hoga (102 ho gya hai)
console.log(gameCounter); // 102 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion