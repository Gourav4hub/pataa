var ob1 = {
    name : "vikas",
    age  : 23,
    salary  : 12000,
    address : {
        street : "Raj Nager",
        city : "indore"
    }
}

console.log(ob1)
var ob2 = {...ob1,address:{...ob1.address}}
ob1.address.city="ujjain"
console.log(ob2)