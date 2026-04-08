// for  of loop 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const ch of greetings) {
    console.log(`Each char is ${ch}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") 


console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

// hum objects pr for of loop ka use nhi kr skte maps pr use hota hai for in loop 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 

