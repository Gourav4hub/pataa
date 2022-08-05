const express = require('express')

const employeeRouter = require('./routers/EmployeeRouter')
const taskRouter = require('./routers/TaskRouter')

const server = express()

server.use(express.json())

server.use("/employee",employeeRouter)
server.use("/task",taskRouter)

server.listen(8182,()=>{
    console.log("Server Up : http://localhost:8182")
})