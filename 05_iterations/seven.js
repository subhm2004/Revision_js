const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sab values me 10 add kr do 
const newNums = myNumers.map( (val) => { return val + 10})
console.log(newNums);

// chaining method
const newNums2 = myNumers.map((value) => { return value * 10} ).map( (val) => { return val + 1})
                         .filter( (num) => { return num >= 40})

console.log(newNums2);