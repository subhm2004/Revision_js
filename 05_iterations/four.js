// for in loop ka use krte hai hum objects pr iterate krne k liye 
// for in loop ka use hum array pr bhi kr skte hai 

// for in loop on objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop on arrays 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {

    console.log(`${key} is key and ${programming[key]} is value`);
}

