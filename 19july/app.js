const express = require('express')
const path = require('path')
const url = require('url')

const userRouter = require('./routers/UserRouter')

const server = express()

server.set('view engine','ejs')
server.use(express.static(path.join(__dirname,"assets")))

server.use(express.urlencoded()) // Post : form
//server.use(express.json()) // Post : JSON

// Custom Middleware
server.use((request,response,next)=>{
    var ob = url.parse(request.url,true)
    if(Object.keys(ob.query).length>0)
        request.reqdata = ob.query  
    next()    
})

server.get("/",(request,response)=>{
    response.render('index')
})
server.get("/about",(request,response)=>{
    response.render('about')
})
server.get("/work",(request,response)=>{
    response.render('work')
})
server.get("/testimonial",(request,response)=>{
    response.render('testimonial')
})
server.get("/contact",(request,response)=>{
    response.render('contact')
})

server.use("/user",userRouter)


server.listen(8989,()=>{
    console.log("http://localhost:8989")
})


/*
    student : register , login , view bathes ,
        http://www.abcd.com/student/view
    
    faculty : login , ....

    routers : student / faculty / fees / 


    GET
        1. Data URL Concate
        2. Text Data
        3. Limited 2048 Characters
        4. No Secure
        5. Bookmark
    POST
        1. Data Request Encode
        2. Text / Binary
        3. Unlimited
        4. Secure
        5. No Bookmark
*/