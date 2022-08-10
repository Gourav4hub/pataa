const express = require('express')
const ApiResponse = require('./responses/ApiResponse')
const {Customer} = require('../models/index')

const router = express.Router()

router.get("/myinfo",async (req,res)=>
{
    try {
        var customer = await Customer.findOne({
            where : {email :  req.user_email}
        })
        res.status(200).json(new ApiResponse(true,customer,"Info"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


module.exports = router;