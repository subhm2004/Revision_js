const marvel_heros = ["thor", "Ironman", "spiderman" , "captain america"]
const dc_heros = ["superman", "flash", "batman" , "aquaman"]

marvel_heros.push(dc_heros) // array ke andar array push kar dega ye 

console.log(marvel_heros);
console.log(marvel_heros[4][1]); // falsh 
console.log(marvel_heros.length); // 5 length return kta h

const allHeros = marvel_heros.concat(dc_heros) // ye acha method hai array ko merge karne ke liye
console.log(allHeros); 
console.log(allHeros.length); // 8 length return kta h 

// spread operator se bhi hum array ko merge kar sakte hai (Mosty used method)
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

// agar ye array kr andar array ke andar hai to usko flat karna padega
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Shubham")) // kya ye array hai ya nahi : false return karega
console.log(Array.isArray(marvel_heros)) // true return karega

console.log(Array.from("Shubham")) // Array.from() method creates a new, shallow-copied Array instance (array bana dega ye )
console.log(Array.from({name: "Shubham"})) // interesting case isme hume btana padega ki kiska array banau nhi btaoge to ye empty array bana k de dega


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));