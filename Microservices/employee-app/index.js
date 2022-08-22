const express = require('express')
const axios = require('axios')
const empRouter = require('./routers/EmpRouter')

const server = express()
server.use(express.json())

server.use("",empRouter)
server.get("/health",(req,res)=>res.status(200).json({status:true}))
var PORT = 8082
server.listen(PORT,()=>
{
    console.log("Employee Service : http://localhost:"+PORT)
    axios({
        method: "POST",
        url: "http://localhost:8089/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: { name : "employee" , info : 
        { 
            host: "http://localhost", port : PORT 
        }}
    }).then(response =>console.log(response.data))
    .catch(err=>console.log("Not Registered !"))
 })