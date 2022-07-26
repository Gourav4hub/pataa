const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

// Custom Module
const categoryRouter = require("./routers/CategoryRouter")

const server = express()
server.use(express.json())

server.use("/api/category",categoryRouter)

server.listen(process.env.PORT,()=>{
    console.log(`Server Running at : http://localhost:${process.env.PORT}`)
})