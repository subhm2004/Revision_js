//  Comparison Operators (Confusion in comparison hota hai, isliye isko samajhna zaruri hai)

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("\n");

console.log("2" > 1);
console.log("02" > 1);
console.log("2" > "12"); // string comparison hota hai, pehle character ka unicode value compare hota hai, agar pehla character same hota hai to dusre character ka unicode value compare hota hai
console.log("2" == 2); // == loose equality operator, ye operator type conversion karta hai, agar type same nhi hoga to type conversion karke compare karega, agar type same hoga to value compare karega
console.log("2" != 2);

console.log("\n");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true kyo ki null ko number me convert karne par 0 milta hai, isliye null >= 0 true hota hai, lekin null > 0 false hota hai kyo ki null ko number me convert karne par 0 milta hai, isliye null > 0 false hota hai, aur null == 0 false hota hai kyo ki null ko number me convert karne par 0 milta hai, isliye null == 0 false hota hai

console.log("\n");

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log("\n");

// ===  strict equality operator, ye operator type conversion nhi karta hai, agar type same nhi hoga to false return karega, agar type same hoga to value compare karega
// ye values ko to check krta hi h sath me ye values ke type ko bhi check krta h, agar type same nhi hoga to false return karega, agar type same hoga to value compare karega
console.log(2 === 2);
console.log(2 === "2");
console.log("2" === "2");
console.log(true === 1);
console.log(false === 0);
console.log(null === undefined);
console.log(null === null);
console.log(undefined === undefined);
console.log(2 === "2");

console.log("2" === 2);