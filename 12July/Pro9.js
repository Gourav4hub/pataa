var arr1 = [
    {roll:101,name:"vikas",age:34,marks:343.32},
    {roll:102,name:"gopal",age:21,marks:232.32},
    {roll:103,name:"mahesh",age:23,marks:212.32},
    {roll:104,name:"meena",age:31,marks:231.32},
    {roll:105,name:"pooja",age:27,marks:342.32},
]

//arr1.sort((ob1,ob2)=>ob1.age-ob2.age)
arr1.sort((ob1,ob2)=>ob1.name.localeCompare(ob2.name))

console.log(arr1)

