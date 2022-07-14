const url = require('url')

var siteUrl = "http://www.abcd.com:8989/home?name=vikas&age=34"

var ob = url.parse(siteUrl,true)

console.log(ob.protocol)
console.log(ob.port)
console.log(ob.host)
console.log(ob.path)

console.log(ob.query)

var data = ob.query
console.log(data.name,data.age)