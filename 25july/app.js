const express = require('express')
const mongoose = require('mongoose')
const empModel = require('./EmpModel')

const server = express()
server.use(express.urlencoded())
server.use(express.json())

server.post("/save",(request,response)=>{
    

    mongoose.connect('mongodb://localhost:27017/pataadb')
    .then(()=>{
        var employee = new empModel(request.body)
       // employee.create()
        employee.save()
        .then(result=>{
            console.log(result)
            response.json({status:true})
        })
        .catch(err=>{
            console.log(err.message)
            response.json({status:false})
        })
    }).catch(()=>{
        response.json({status:false})
    })
})

server.listen(8989,()=>{
    console.log("http://localhost:8989")
})