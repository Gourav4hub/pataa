var arr1 = [
    {roll:101,name:"vikas",age:34,marks:343.32},
    {roll:102,name:"gopal",age:21,marks:232.32},
    {roll:103,name:"mahesh",age:23,marks:212.32},
    {roll:104,name:"meena",age:31,marks:231.32},
    {roll:105,name:"pooja",age:27,marks:342.32},
]

var arr2 = arr1.filter(student=>student.age>30)

console.log(arr1)
console.log(arr2)