const express = require('express')
const {Exam} = require("../models/index")
const router = express.Router()

// router.put("/update/:roll",async (request,response)=>
// {
//     try
//     {
//         var roll = request.params.roll
//         var student = await Student.findOne({
//             where : {roll}
//         })
//         student.name = request.body.name
//         student.age = request.body.age
//         student.email = request.body.email
//         await student.save()
//         response.json({status:true})
//     }catch(err){
//         console.log(err)
//         response.status(500).json(err)
//     }
// })

// router.delete("/delete/:roll",async (request,response)=>
// {
//     try
//     {
//         var roll = request.params.roll
//         var student = await Student.findOne({
//             where : {roll}
//         })
//         student.destroy()
//         response.json({status:true})
//     }catch(err){
//         console.log(err)
//         response.status(500).json(err)
//     }
// })

// router.get("/get/:roll",async (request,response)=>
// {
//     try
//     {
//         var roll = request.params.roll
//         var student = await Student.findOne({
//             where : {roll}
//         })
//         response.json(student)
//     }catch(err){
//         console.log(err)
//         response.status(500).json(err)
//     }
// })

router.get("/list",async (request,response)=>
{
    try
    {
        var exams = await Exam.findAll()
        response.json(exams)
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

router.post("/save",async (request,response)=>
{
    try
    {
        var data = request.body
        var exam = await Exam.create(data)
        response.json(exam)
    }catch(err){
        console.log(err)
        response.status(500).json(err)
    }
})

module.exports = router