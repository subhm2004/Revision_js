// Filters

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values); // undefined degaa


// 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter bohot jagah use hota hai 
// jab me scope start kr duga arrow function me to mujhe return keyword ka use krna hi padega

const newNums = myNums.filter( (val) => {
    return val > 4
} )

console.log(newNums);

const newNums2 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
} )

console.log(newNums2);

// array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // 
  let userBooks1 = books.filter( (bk) => {
    return bk.genre === "Science";
  })
console.log(userBooks1);

 let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
})
  console.log(userBooks2);