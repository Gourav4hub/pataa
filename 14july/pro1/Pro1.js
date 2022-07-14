const path = require('path')

var str = "C:/users/abhay/mywed/mypic.jpg"

console.log(path.basename(str))
console.log(path.dirname(str))

console.log(path.extname(str))
console.log(path.relative("/home/gourav/Desktop/JS",__filename))

