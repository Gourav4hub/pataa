const {produce} = require('immer')

var arr1 = [44,33,55,33,11,43]

var arr2 = produce(arr1,dummy=>{
    //dummy = dummy.map(num=>num==33?66:num)
    dummy.push(100)
    dummy.push(200)
})

console.log(arr1)
console.log(arr2)