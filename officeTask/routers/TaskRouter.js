const express = require('express')

const {Emptask,Employee} = require('../models/index')

const router = express.Router()

router.post("/save",async (request,response)=>{
    var data = request.body
    try {
        var employee = await Employee.findOne({
            where : {email : request.body.email}
        })
        if(employee!=null)
        {
            data.employee = employee.id
            var task = await Emptask.create(data)
            response.status(200).json(task)
        }
        else    
            response.status(200).json({msg:"Employee Not Found !"})
    
    }catch(err){
        response.status(500).json(err)
    }
})

router.get("/list",async (request,response)=>{   
    try {
        var tasks = await Emptask.findAll({
            include : 'emp'
        })
        response.status(200).json(tasks)
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