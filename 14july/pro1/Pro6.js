const fs = require('fs')

// var data = fs.readFileSync('./package.json',"UTF-8")
// //console.log(data.toString())
// console.log(data)

fs.readFile("./package.json","UTF-8",(err,data)=>{
    if(err)
        console.log("Erorororororo : " , err)
    else
        console.log(data)    
})

console.log("Thanks")