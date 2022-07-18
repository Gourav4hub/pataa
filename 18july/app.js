// Express is a Middleware Web Framework.
const express = require('express')
const path = require('path')

const server = express()
server.set("view engine","ejs")

server.use(express.static(path.join(__dirname,"assets")))

server.get("/",(request,response)=>
{
    var ob = {
        empname : "Vikas PArmar",
        age  : 34,
        salary  : 12000
    }
    response.render('home',{
        employee : ob
    })
})
server.get("/about",(request,response)=>{
    // Data
    var title = "Pataa Solutions"
    response.render('about',{title})
})

server.get("/contact",(request,response)=>{
    var arr = [
        { street: 'Raj Nager' , city : "indore" , pincode: 452001},
        { street: 'Vijay Nager' , city : "ujjain" , pincode: 452002},
        { street: 'LIG Nager' , city : "bhopal" , pincode: 452003},
    ]
    response.render('contact',{
        contacts : arr
    })
})

server.get("*",(request,response)=>{
    response.render('wrong')
})

server.listen(8989,()=>{
    console.log("Server is running : http://localhost:8989")
})