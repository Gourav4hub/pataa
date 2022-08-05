const express = require('express')

const {Employee,Emptask} = require('../models/index')

const router = express.Router()

router.post("/save",async (request,response)=>{
    var data = request.body
    try {
        var employee = await Employee.create(data)
        response.status(200).json(employee)
    }catch(err){
        response.status(500).json(err)
    }
})

router.get("/list",async (request,response)=>{   
    try {
        var employees = await Employee.findAll({
            attributes: {
                exclude: ['id']},
            include : {
                as : 'tasks',
                model : Emptask,
                attributes : ['task_title','start_date','status']
            }
        })
        response.status(200).json(employees)
    }catch(err){
        response.status(500).json(err)
    }
})

router.get("/get/:mail",async (request,response)=>{   
    try {
        var mail = request.params.mail
        var employee = await Employee.findOne({
            where : {email : mail}
        })
        if(employee!=null)
            response.status(200).json(employee)
        else    
            response.status(200).json({msg:"Employee Not Found !"})
    }catch(err){
        response.status(500).json(err)
    }
})

router.put("/update/:mail",async (request,response)=>{   
    try {
        var data = request.body
        var mail = request.params.mail
        var employee = await Employee.findOne({
            where : {email : mail}
        })
        if(employee!=null)
        {
            // Changes
            await Employee.save(employee)
        }
        else    
            response.status(200).json({msg:"Employee Not Found !"})
    }catch(err){
        response.status(500).json(err)
    }
})

module.exports = router