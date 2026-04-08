 // Array in JavaScript

const myArr = [0, 1, 2, 3, 4, 5] // number array
 const myHeors = ["shaktiman", "naagraj"] // string array
const myArr2D = [[1, 2], [3, 4], [5, 6]] // 2D array


 const myArr2 = new Array(1, 2, 3, 4)
 console.log(typeof myArr2D);
 console.log(myArr[1]);

console.log(myArr2D[1][0]);

//  Array methods
console.log(myArr.length);
 console.log(myArr[myArr.length - 1]); // last element of the array
 console.log(myArr);
 myArr.push(6) // last me add kr dega 6
myArr.push(7)
myArr.pop() // removes the last element of the array
 console.log(myArr);

 myArr.unshift(9) // first me add kr dega 9
 console.log(myArr);
    myArr.shift() // removes the first element of the array
console.log(myArr);

 console.log(myArr.includes(9)); // array me 9 hai ya nahi ? True or False return krta hai
 console.log(myArr.indexOf(3)); // array me 3 ka index kya hai ? agar 3 nahi hai to -1 return krta hai

 const newArr = myArr.join() // array ke elements ko string me convert kr dega, by default comma se separate krta hai

 console.log(myArr);
 console.log( newArr);
 console.log(typeof newArr); // string me convert ho gaya hai

 const newArr2 = myArr.join('-') // agar hum chahte hai ki elements ke beech me koi aur separator ho to usko de sakte hai, yaha pe humne '-' diya hai to elements ke beech me '-' aa jayega

console.log(newArr2);


// slice, splice (IMPORTANT FOR INTERVIEW)

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // (start index, end index) end index se pehle tak ke elements ko return krta hai, yani 1 se 3 ke beech me jo elements hai wo return honge, yani 1 aur 2 return honge

console.log("Ans of myn1: ", myn1); // Ans of myn1:  [ 1, 2 ]


console.log("B ", myArr);// B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3) // (start index, delete count) start index se lekar delete count tak ke elements ko remove krta hai, yani 1 se lekar 3 tak ke elements ko remove kr dega, yani 1, 2 aur 3 remove ho jayenge
console.log("Ans of myn2: ", myn2); // Ans of myn2:  [ 1, 2, 3 ]

console.log("C ", myArr); // C  [ 0, 4, 5 ]
