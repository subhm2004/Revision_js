// Arrow functions in javascript and this keyword   

const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// console.log(user);

// user.welcomeMessage()
// user.username = "shubham"
// user.welcomeMessage()

console.log(this); // {} aayega output me


// normal function k andar aake me ue nhi kr paa rha hu this ko 
function chai(){
    let username = "Shubham Malik";
    console.log(this.username); // undefined aayega
}

// chai()

const chai3 = function () {
    let username = "shubham"
    console.log(this.username); // ab bhi undefined aayega
}
// chai3()

// ye arrow function hai 
const chai2 =  () => {
    let username = "shubham"
    console.log(this.username); // ab bhi undefined aayega
    console.log(this); // {} aayega
}

chai2() 

const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

// array function ko ese bhi likha jata hai ise bolte hai implicite return 
const addTwoNum = (num1,num2) => (num1+num2);

console.log(addTwoNumbers(3,4));
