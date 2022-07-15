const calculate = (basic)=>
                    (bonus,incentive)=>
                        (deduction,tax)=>
                            basic + (bonus+incentive) - (deduction+tax)                   
    
module.exports = calculate