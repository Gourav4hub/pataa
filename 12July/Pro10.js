var arr1 = [2,3,4,1,5,7]

// var num = arr1.reduce((previousValue,currentValue)=>{
//     console.log(previousValue , currentValue)
//     return previousValue+currentValue
// },0)

//var num = arr1.reduce((pvalue,cvalue)=>pvalue+cvalue,0)

var num = arr1.reduce((pvalue,cvalue)=>cvalue%2!=0?pvalue+cvalue:pvalue,0)

console.log(num)

