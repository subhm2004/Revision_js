// isme hum singleton objects pr baat krte hai 


const tinderUser2 = new Object() // ye singleton object hai
console.log(tinderUser2); // {} empty object aayega


const tinderUser = {} // ye non singleton object hai, isme hum jitne marzi objects bana skte hai
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  

// objects ke andar objects bhi ho skte hai, arrays bhi ho skte hai, functions bhi ho skte hai, aur hum symbol ko bhi as a key use kr skte hai
const regularUser = {
    email: "some@gmail.com",
    // full name bhi ek object hai, jisme firstname aur lastname hai
    fullname: {
        userfullname: {
            firstname: "shubham",
            lastname: "malik"
        }
    }
}
console.log(regularUser);
// or ese krke hum values ko access kr skte hai  
console.log(regularUser.fullname); 
console.log(regularUser.fullname.userfullname.firstname);
// ek yha pr optional chaining bhi use kr skte hai, jisse hum error se bach skte hai, agar fullname ya userfullname undefined hote to error aata, lekin optional chaining se undefined aayega
console.log(regularUser.fullname?.userfullname?.firstname);


// objects ko combine krte hai 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 } // isse obj3 ke andar obj1 aur obj2 as a key ban jayenge, aur unki values bhi as a value ban jayengi, isliye hume Object.assign() method ka use krna padega, jisse hum objects ko combine kr skte hai, ya phir spread operator ka use krke bhi objects ko combine kr skte hai

const obj4 = Object.assign({}, obj1, obj2, obj3) // ese combine kr skte hai objects ko 
console.log(obj4);

// using spread operator to combine objects (90% hum ye syntax use krnege)
const obj5 = {...obj1, ...obj2,...obj3} // ye bhi ek method h objects ko combine krne ka, isme hum spread operator ka use krte hai 
console.log(obj5);

// array of objects (ye bahut common hota hai, jab hume multiple objects ko store krna hota hai to hum array of objects ka use krte hai)
const users = [
    {
        id: 2,
        email: "shubham@gmail.com"
    },
    {
        id: 3,
        email: "harsh@gmail.com"
    },
    {
        id: 4,
        email: "rohan@gmail.com"
    },
]

console.log(users[2].email); // rohan@gmail.com
  
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // isme tinderUser ke sare keys aayenge ek array ke form me

console.log(Object.values(tinderUser));// samw way m hum values bhi access kr skte hai, isme tinderUser ke sare values aayenge ek array ke form me

console.log(Object.entries(tinderUser)); // har ek key value pair ko ek array ke form me dega, aur sare key value pairs ko ek array ke form me dega, isme tinderUser ke sare key value pairs aayenge ek array ke form me

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // kama aa jata h kya aapke pass ye property hai ?




// general overview of api (hoti kya hai kse kaam krti hai kse kya hau sba kuch)

// Destructuring in objects (ye bahut important concept hai, isse hum objects ke andar ki values ko easily access kr skte hai, aur unko variables me store kr skte hai)
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shubham"
}

// course.courseInstructor 

// agar baar baar value print krni hoti h to hume baar baar course.courseInstructor likhna padega, isliye hum destructuring ka use krte hai, jisse hum courseInstructor ko directly access kr skte hai, aur usko ek variable me store kr skte hai
// const {kya_value_ko_access_krna_hai : naya_nam} = kha se access krna hai
const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "shubham",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

