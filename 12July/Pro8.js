var arr1 = [55,66,44,51,33,22,11,34,32]

// Even Number +10
// var arr2 = arr1.map(function(num){
//     if(num%2==0)
//         return num+10
//     else
//         return num    
// })

//var arr2 = arr1.map(num=>num%2==0?num+10:num)
var arr2 = arr1.map(num=>num%2==0?num+10:num-5)

console.log(arr1)
console.log(arr2)

// undefined / None