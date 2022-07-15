var arr1 = [44,33,55,33,11,43]

var arr2 = arr1.map(num=>num==33?66:num)
//arr2.push(100)
//arr2.push(200)
arr2 = [...arr2,100,200]

console.log(arr1)
console.log(arr2)