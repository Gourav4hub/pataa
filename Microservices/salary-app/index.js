const express = require('express')
const axios = require('axios')
const salaryRouter = require('./routers/SalaryRouter')
const server = express()

server.use(express.json())
server.use("",salaryRouter)

server.get("/health",(req,res)=>res.status(200).json({status:true}))

var PORT = 8084
server.listen(PORT,()=>
{
    console.log("Salary Service : http://localhost:"+PORT)
    axios({
        method: "POST",
        url: "http://localhost:8089/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: { name : "salary" , info : 
        { 
            host: "http://localhost", port : PORT
        }}
    }).then(response =>console.log(response.data))
    .catch(err=>console.log("Not Registered !"))
})