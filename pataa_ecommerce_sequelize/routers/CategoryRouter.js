const express = require('express')
const ApiResponse = require('./responses/ApiResponse')
const {Category,Product} = require('../models/index')

const router = express.Router()

router.post("/save",async (req,res)=>
{
    var data = req.body
    try {
        var category = await Category.create(data)
        res.status(200).json(new ApiResponse(true,category,"Category Saved !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.get("/list",async (req,res)=>
{
    try {
        var categories = await Category.findAll({
            include:'product'
        })
        res.status(200).json(new ApiResponse(true,categories,"Success !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


module.exports = router;