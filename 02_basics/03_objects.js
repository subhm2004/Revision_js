// singleton (koi bhi constructor se hum bante hai to singleton ek object banta hai )
// Object.create yhi banta hai constructor k through 

// object literals

const mySymbol = Symbol("key1")

// Note  : hum directly symbol ko as a key nhi use kr skte hai, uske liye hume bracket notation ka use krna padega
const JsUser = {
    name: "Shubham",
    "full name": "Shubham Malik",
    age: 18,
    location: "Sonipat",
    email: "Shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySymbol]: "value_of_my_key" // is tarah se hum symbol ko as a key use kr skte hai

}

console.log(JsUser);

console.log(JsUser.email)
// console.log(JsUser.full name) // error dega ye ese acces hi nhi kr oayenge hum ise to bracket notation se access kr skte hai
console.log(JsUser["full name"])

console.log(JsUser.mySymbol) // undefined dega kyuki ye symbol ko as a key nhi samjhega

// is liye hum bracket notation ka use krke symbol ko as a key access kr skte hai
console.log(JsUser[mySymbol])
console.log(typeof JsUser[mySymbol]); // string aayega 



// adding methods(functions) to objects
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`Hello ji kse hai aap log , meri age hai ${this.age} or meri location hai ${this.location}`);
    
}

console.log(JsUser.greeting); // function execute nhi hoga, ye function ka reference dega, isliye hume parentheses lagane honge function ko execute krne ke liye

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



console.log(JsUser); 


// objects ki values ko change kse krte hai?

JsUser.email = "Shubham@microsoft.com"

// agar hum chahte hai ki object ki values change na ho to hum Object.freeze() method ka use kr skte hai, isse object ke andar ki values change nhi hongi
Object.freeze(JsUser)
JsUser.email = "Shubham@chatgpt.com" // ab ye change nhi hoga kyuki object freeze ho chuka hai
console.log(JsUser);

 