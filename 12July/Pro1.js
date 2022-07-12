var ob1 = {
    name : "vikas",
    age  : 23,
    salary  : 12000
}

console.log(ob1)

//var ob2 = ob1;
// var ob2 = {
//     name : ob1.name,
//     age : ob1.age,
//     salary : ob1.salary
// }

var ob2 = {...ob1}

ob1.age = 45;

console.log(ob2)