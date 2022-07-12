var arr1 = [55,66,44,51,33,22,11,34,32]

//var arr2 = [] // Empty
// for(var num of arr1)
// {
//     if(num%2==0){
//         arr2.push(num)
//     }
// }

// function checkEven(num){
//     return num%2==0;
// }
// var arr2 = arr1.filter(checkEven)

//var arr2 = arr1.filter((num)=>num%2==0)
var arr2 = arr1.filter(num=>num%2==0)


console.log(arr1)
console.log(arr2)