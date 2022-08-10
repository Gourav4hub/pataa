const express = require('express')
const jwt = require('../config/JWT')
const ApiResponse = require('./responses/ApiResponse')
const {Customer} = require('../models/index')

const router = express.Router()

router.post("/save",async (req,res)=>
{
    var data = req.body
    try {
        var customer = await Customer.create(data)
        res.status(200).json(new ApiResponse(true,customer,"User Saved !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.post("/authenticate",async (req,res)=>
{
    var data = req.body
    try {
        var customer = await Customer.findOne({
            where : {email:data.email,password:data.password}
        })
        if(customer==null)
            res.status(200).json(new ApiResponse(false,null,"Invalid User !"))
        else 
        {
            var token = jwt.generateAccessToken(data.email)   
            res.status(200).json(new ApiResponse(true,token,"Login Success !"))
        }
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})



module.exports = router;