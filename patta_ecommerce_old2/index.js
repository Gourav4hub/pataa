const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config()

// Custom Module
const categoryRouter = require("./routers/CategoryRouter")
const productRouter = require("./routers/ProductRouter")

const server = express()
server.use(express.static(path.join(__dirname,"/uploads")))
server.use(express.json())
server.use(fileUpload())

server.use("/api/category",categoryRouter)
server.use("/api/product",productRouter)

server.listen(process.env.PORT,()=>{
    console.log(`Server Running at : http://localhost:${process.env.PORT}`)
})