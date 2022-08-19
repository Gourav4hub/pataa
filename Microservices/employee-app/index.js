const express = require('express')
const axios = require('axios')
const empRouter = require('./routers/EmpRouter')

const server = express()
server.use(express.json())

server.use("",empRouter)

server.listen(8081,()=>
{
    console.log("Employee Service : http://localhost:8081")
    axios({
        method: "POST",
        url: "http://localhost:8083/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: { name : "employee" , info : 
        { 
            host: "http://localhost", port : 8081 
        }}
    }).then(response =>console.log(response.data))
    .catch(err=>console.log("Not Registered !"))
 })