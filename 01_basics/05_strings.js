const name = "shubham"
const repoCount = 53

console.log(name + " " + repoCount + " Value"); // ye concatenation hai or purana method h koi use nhi krta

// modern day me string interpolation use krte hai 
// isme hum banate hai place holders or usme jo bhi variable hai hum use directly inject kr skte hai

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

let Name = "shubham malik"
console.log(`Hello i am ${Name} and i am a web developer`);

// ye bhi ek string hai but ye string object ke form me hai
const gameName = new String('shubham-malik-com')
console.log(typeof gameName); // string object ke form me hai

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}
console.log(gameName.length); //  17
console.log(gameName.toUpperCase()); // SHUBHAM-MALIK-COM
console.log(gameName.charAt(2)); // 1
console.log(gameName.indexOf('t')); // -1 (agar string me koi character nahi hai to -1 return krta hai)
console.log(gameName.indexOf('a')); // 6

const newString = gameName.substring(0, 4) // (start index, end index - 1)
console.log(newString); // shub

const anotherString = gameName.slice(-8, 4) // slice me hum negative index bhi de skte hai, negative index ka matlab hai string ke end se count karna
console.log(anotherString);

const newStringOne = "   shubham    "
console.log(newStringOne);
console.log(newStringOne.trim()); // faltu ke spaces ko remove kr deta hai trim string se

const url = "https://shubham.com/shubham%20malik"

console.log(url.replace('%20', '-')); // replace (kise replace krna hai, kise replace krna hai) 

console.log(url.includes('malik')); // include ye btata hai ki string me koi particular substring hai ya nahi, agar hai to true return krta hai nahi to false


const words = gameName.split('-'); // it is used to convert string into array , split me hum ek separator dete hai jiske basis pe string ko split krna hai, yaha pe humne '-' diya hai to string ko '-' ke basis pe split kr dega aur ek array return karega
console.log(words); // [ 'shubham', 'malik', 'com' ]

console.log(words[0]); // shubham
