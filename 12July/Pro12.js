var arr1 = [
    {roll:101,name:"vikas",age:34,marks:343.32},
    {roll:102,name:"gopal",age:21,marks:232.32},
    {roll:103,name:"mahesh",age:23,marks:212.32},
    {roll:104,name:"meena",age:31,marks:231.32},
    {roll:105,name:"pooja",age:27,marks:211.32},
    {roll:106,name:"mohan",age:31,marks:287.32},
    {roll:107,name:"lokesh",age:28,marks:265.32},
    {roll:108,name:"reena",age:26,marks:345.32},
]

//var arr2 = arr1.every(ob=>ob.age>22)

var x = arr1.some(ob=>ob.age>22)
console.log(x)
