//  for each loop ( ye bohot use hota hai )

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){
    console.log(item);
    console.log(item.length);
    
} )

// arro function bhi use kr skte hai 

coding.forEach((val)=>{
     console.log(val);
    console.log(val.length);
})


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )