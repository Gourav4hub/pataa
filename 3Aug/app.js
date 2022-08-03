const express = require('express')

const studentRouter = require('./routers/StudentRouter')
const examRouter = require('./routers/ExamRouter')
const {sequelize , Student } = require("./models/index")
const server = express()
server.use(express.json())


server.use("/student",studentRouter)
server.use("/exam",examRouter)

server.listen(8182,async ()=>{
    await sequelize.authenticate()
    console.log("Server Start : http://localhost:8182")
    console.log("Database Connected !")
})