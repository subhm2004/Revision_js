//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Shubham Malik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);// ye line error degi, kyunki website variable two function ke scope me hai, aur one function ke scope me nahi hai, isliye one function me website variable access nahi kar sakte hai

     two()

}

one()



if (true) {
    const username = "Shubham Malik"
    if (username === "Shubham Malik") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // ye line error degi, kyunki website variable if block ke scope me hai, aur uske bahar access nahi kar sakte hai
}

// console.log(username); // ye line error degi, kyunki username variable if block ke scope me hai, aur uske bahar access nahi kar sakte hai


// ++++++++++++++++++ interesting concept ++++++++++++++++++

// hoisting in javascript

// is case me funtion ko declaration se phle use kr skta hu , kyunki function declaration me function ko pehle hi memory me store kar diya jata hai, isliye function declaration ko use karne se pehle define karna zaruri nahi hota hai
console.log(addone(5))

function addone(num){
    return num + 1
}



// is case me error aayegi, kyunki addTwo function expression hai, aur function expression ko use karne se pehle define karna padta hai, isliye addTwo function ko call karne se pehle define karna hoga

// ye error dega bhai ( is case me funtion ko declaration se phle use kr nhi skta )
addTwo(5)
const addTwo = function(num){ // ek bhi ek fucntion hai lekin ise expression bhi bl diya jata hai 
    return num + 2
}
