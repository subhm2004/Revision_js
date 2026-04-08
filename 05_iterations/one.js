// for loop 

for (let i = 0; i <= 10; i++) {
    console.log(`counting ${i}`);
    
    }
    
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(` ${i} * ${j} = ${i*j}` );
   }
    
}

let str_Arr = ["flash", "batman", "superman"]
console.log(str_Arr.length);
for (let i = 0; i < str_Arr.length; i++) {
    console.log(str_Arr[i]);
    
}


// break and continue

// mekro 5 tak print krna h uske baas loop na chale to break use kr do 
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${i}`);
    
}


// skip krne k kaam aata h ye ke specific iteration
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${i}`);
    
}