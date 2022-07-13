const http = require('http')

const server = http.createServer((request,response)=>
{
    response.write("<h1>My First NodeJS Response !</h1>")
    response.end()
});

server.listen(8989)