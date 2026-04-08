// control flow ko hi logic flow bola jata hai 

// if statement
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50"); 
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== ye opeators use krke hum kaam kr skte hai 

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // scope se bahar hai ye error dega ye


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); // unredable h mut hi likho ese code 

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}