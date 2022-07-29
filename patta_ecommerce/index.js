const express = require('express')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config()

// Custom Module
const categoryRouter = require("./routers/CategoryRouter")
const productRouter = require("./routers/ProductRouter")


const server = express()
server.use(express.json())
server.use(fileUpload())

server.use("/api/category",categoryRouter)
server.use("/api/product",productRouter)

// server.use((err,req,res,next)=>{
//     if(err && err.error && err.error.isJoi){
//         console.log(err)
//         res.status(400).json({
//             status:false,
//             msg : err.error.toString()
//         })
//     }else{next()}
// })

server.listen(process.env.PORT,()=>{
    console.log(`Server Running at : http://localhost:${process.env.PORT}`)
})