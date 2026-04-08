// Reduce ka use hai is code me 

const myNums = [1, 2, 3]

const fund_sum = myNums.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(fund_sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price},0)

console.log(priceToPay);