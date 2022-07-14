const fs = require('fs/promises')

// var pr = fs.readFile("./package.json","UTF-8")
// pr.then(data=>console.log(data)).catch(err=>console.log(err))

fs.readFile("./package.json","UTF-8")
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

console.log("Thanks")