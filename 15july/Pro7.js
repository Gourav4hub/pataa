// Curring : lodash

// function calculate(basic,bonus,incentive,deduction,tax)
// {
//     var totalExtra = bonus+incentive;
//     var totalDeduction = deduction+tax;

//     var finalSalary = basic + totalExtra - totalDeduction
//     return finalSalary;
// }

// const calculate = (basic)=>{
//                         var extra = (bonus,incentive)=>
//                         {
//                               var deduct = (deduction,tax)=>{
//                                     var totalExtra = bonus+incentive;
//                                     var totalDeduction = deduction+tax;

//                                     var finalSalary = basic + totalExtra - totalDeduction
//                                     return finalSalary;
//                               }  
//                               return deduct
//                         }
//                         return extra
//                 }


const calculate = (basic)=>
                    (bonus,incentive)=>
                        (deduction,tax)=>
                            basic + (bonus+incentive) - (deduction+tax)                   
    

var collectSalary = calculate(12000)

var collectExtra = collectSalary(200,1000)

console.log(collectExtra(500,1500))