function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
    
}

sayMyName(); // function call or function invocation

// functions to add two numbers
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// JavaScript me hume data type define karne ki zarurat nahi hoti, hum directly value pass kar sakte hai, aur function usko handle kar lega
function addTwoNumbers(number1, number2){
    console.log(`Adding ${number1} and ${number2}`);
    
    return number1 + number2
    console.log("Dalle"); // ye line kabhi execute nahi hogi, kyunki return ke baad function exit kar jata hai, aur koi bhi code execute nahi hota
    
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("shubham"))



// kitne arguments aane wale hai mujhe nhi pta to ese hoga add 
function addAllNumbers(...numbers){
    console.log(numbers);
    
    let total = 0;
    for(let number of numbers){
        total +=  number
    }
    return total
}

console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// spread operator ... ye array ko individual elements me convert kar deta hai, aur rest operator ... ye individual elements ko array me convert kar deta hai
function makearray(...args){
    return args
}

console.log(makearray(1, 2, 3, 4, 5));

function calculateCartPrice(val1, val2, ...num1){
    return num1 // num1 is rest parameter, it will be an array of all the arguments passed after val1 and val2
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shubham",
    prices: 199
}

// object ko kse pass kiya jata h function me 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)

// array ko kse pass kiya jata h function me
const myNewArray = [200, 400, 100, 600]

function findValueAtIndex(arr, index){
    return arr[index]
}

console.log(findValueAtIndex(myNewArray, 2))

