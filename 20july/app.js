const express = require('express')
const path = require('path')

const employeeRouter = require('./routers/EmployeeRouter')

const server = express()
server.set('view engine','ejs')
server.set('views',path.join(__dirname,"pages"))

server.use(express.urlencoded())
server.use(express.static(path.join(__dirname,"assets")))

server.get("/",(request,response)=>
{    
    response.redirect("/employee/list")
})

server.use("/employee",employeeRouter)

server.listen(8989,()=>{
    console.log("http://localhost:8989")
})