const express = require('express')

const {sequelize , Student} = require("./models/index")
const server = express()
server.use(express.json())

server.put("/update/:roll",async (request,response)=>
{
    try
    {
        var roll = request.params.roll
        var student = await Student.findOne({
            where : {roll}
        })
        student.name = request.body.name
        student.age = request.body.age
        student.email = request.body.email
        await student.save()
        response.json({status:true})
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

server.delete("/delete/:roll",async (request,response)=>
{
    try
    {
        var roll = request.params.roll
        var student = await Student.findOne({
            where : {roll}
        })
        student.destroy()
        response.json({status:true})
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

server.get("/get/:roll",async (request,response)=>
{
    try
    {
        var roll = request.params.roll
        var student = await Student.findOne({
            where : {roll}
        })
        response.json(student)
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

server.get("/list",async (request,response)=>
{
    try
    {
        var students = await Student.findAll()
        response.json(students)
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

server.post("/save",async (request,response)=>
{
    try
    {
        var data = request.body
        var student = await Student.create(data)
        response.json(student)
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})


server.listen(8182,async ()=>{
    await sequelize.authenticate()
    console.log("Server Start : http://localhost:8182")
    console.log("Database Connected !")
})