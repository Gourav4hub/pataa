// Express is a Middleware Web Framework.
const express = require('express')

const server = express()

server.get("/",(request,response)=>{
    // response.write("<h1>Home Page</h1>")
    // response.write("<b>Pataa Solution</b>")
    // response.end()
    response.send("<h1>Home Page</h1>")
})

server.get("/about",(request,response)=>{
    response.send("<h1>About Page</h1>")
})


server.get("*",(request,response)=>{
    response.send("<h1>Wrong Page</h1>")
})
server.listen(8989,()=>{
    console.log("Server is running : http://localhost:8989")
})