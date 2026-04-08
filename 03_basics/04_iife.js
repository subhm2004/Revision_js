// Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution se problem hoti hai kai baar , so us pollution ko variables ko hatane k liye hum ne IIFE ka use kiya hai 

// jse hi fucntion likha use turant hi execute krwana ahi 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('SHUBHAM MALIK');

// (function ki defination)(execution call)
 