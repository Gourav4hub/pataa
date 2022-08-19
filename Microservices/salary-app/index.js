const express = require('express')
const axios = require('axios')
const salaryRouter = require('./routers/SalaryRouter')
const server = express()

server.use(express.json())
server.use("",salaryRouter)

server.listen(8082,()=>
{
    console.log("Salary Service : http://localhost:8082")
    axios({
        method: "POST",
        url: "http://localhost:8083/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: { name : "salary" , info : 
        { 
            host: "http://localhost", port : 8082
        }}
    }).then(response =>console.log(response.data))
    .catch(err=>console.log("Not Registered !"))
})