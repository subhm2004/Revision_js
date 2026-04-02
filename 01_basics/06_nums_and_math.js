// +++++++++++++ Numbers +++++++++++++++++++++++
const score = 400
console.log(score);

const balance = new Number(100) // specially hum ne cast kiya hai number me, ye ek number object ban jayega, aise karne ka koi fayda nahi hai, aise karna bekar hai, aise karne se performance me bhi problem hoti hai, aise karna avoid karna chahiye
console.log(balance);
console.log(typeof balance); // object return krega, kyuki ye ek number object hai, primitive number nahi hai

// number ke sath hum kuch methods bhi use kr skte hai, jaise toString, toFixed, toPrecision, toLocaleString etc

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // toFixed method ka use hum decimal places ko control karne ke liye karte hai, jaise agar hum 1 denge to 1 decimal place tak hi number ko show karega

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // number ke total digits ko control karne ke liye toPrecision method ka use karte hai, jaise agar hum 4 denge to number ke total 4 digits tak hi number ko show karega, chahe wo decimal ke baad ho ya pehle

const anotherNumber = 23544.756789
console.log(anotherNumber.toPrecision(5));


const hundreds = 1e6 // ye ek scientific notation hai, iska matlab hai 1 ke baad 6 zero, yani 1000000
console.log(hundreds);
console.log(hundreds.toLocaleString()); // US Standards k according laga dega ye comma har 3 digits ke baad, toLocaleString me hum apne locale ke according bhi format kar sakte hai, jaise agar hum 'en-IN' denge to Indian Standards k according lakh aur crore ke hisab se comma lagayega, yani 10,00,000
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE); // ye sabse bada number hai jo javascript me store kiya ja sakta hai
console.log(Number.MIN_VALUE); // ye sabse chota number hai jo javascript me store kiya ja sakta hai
console.log(Number.POSITIVE_INFINITY); // ye positive infinity ko represent karta hai, jab bhi hum kisi number ko 0 se divide karte hai to result positive infinity hota hai
console.log(Number.NEGATIVE_INFINITY); // ye negative infinity ko represent karta hai, jab bhi hum kisi negative number ko 0 se divide karte hai to result negative infinity hota hai
console.log(Number.NaN); // NaN ka matlab hota hai Not a Number, jab bhi hum kisi aise operation ko perform karte hai jiska result number nahi hota hai to result NaN hota hai, jaise agar hum kisi string ko number me convert karne ki koshish karte hai to result NaN hota hai
console.log(Number.MAX_SAFE_INTEGER); // ye sabse bada safe integer hai jo javascript me store kiya ja sakta hai, safe integer ka matlab hai ki wo integer jiski value -(2^53 - 1) se lekar (2^53 - 1) ke beech me ho, yani -9007199254740991 se lekar 9007199254740991 ke beech me ho
console.log(Number.MIN_SAFE_INTEGER); // ye sabse chota safe integer hai jo javascript me store kiya ja sakta hai, safe integer ka matlab hai ki wo integer jiski value -(2^53 - 1) se lekar (2^53 - 1) ke beech me ho, yani -9007199254740991 se lekar 9007199254740991 ke beech me ho


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Math ek built-in object hai jisme mathematical constants aur functions hote hai, jaise Math.PI, Math.E, Math.sqrt(), Math.pow(), Math.abs(), Math.round(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random() etc

console.log(Math.PI); // ye pi constant ko represent karta hai, pi ka value 3.141592653589793 hota hai
console.log(Math.E); // ye e constant ko represent karta hai, e ka value 2.718281828459045 hota hai

console.log(Math.abs(-4)); // ye absolute value ko return karta hai, yani kisi bhi number ka positive value return karta hai, chahe wo number positive ho ya negative


console.log(Math.round(4.6)); // 4.6 ka 5 ho jayega kyoki 0.5 se bada hai, agar 4.4 hota to 4 ho jata kyoki 0.5 se chota hai
console.log(Math.ceil(4.2)); //  4.2 ka 5 ho jayega
console.log(Math.floor(4.9)); // 4.9 ka 4 ho jayega
console.log(Math.min(4, 3, 6, 8)); // minimum valye dega ye 3
console.log(Math.max(4, 3, 6, 8)); // maximum value dega ye 8
console.log(Math.pow(2, 3)); // ye 2 ka 3rd power dega yani 2*2*2 = 8
console.log(Math.sqrt(16)); // ye 16 ka square root dega yani 4

console.log(Math.random()); // iski value 0 se 1 ke beech me hoti hai mostly decimal hi aati hai 

console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); // ye 1 se 10 k beech me dega random value 

// INPORTANT ( agar hume random values generate krwani h min se max k beech me to hum neeche diye gya formula use krte hai )
const min = 10
const max = 20
let randomValue = Math.random() * (max - min) + min
console.log(randomValue); // ye 10 se 20 ke beech me random value dega

