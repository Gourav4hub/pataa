const express = require('express')
const path = require('path')
const apiRouter = require('./routers/ApiRouters')

const server = express()
server.use(express.json())
//server.use(express.static(path.join(__dirname,"models")))


server.get("/",(req,res)=>{
    res.send("<h1>Pataa Navigation ECommerce Running</h1>")   
})

server.use("/api",apiRouter)

server.get("*",(req,res)=>{
    res.status(500).json({error:"Wrong URL !"})
})

server.listen(8182,()=>{
    console.log("http://localhost:8182")
})