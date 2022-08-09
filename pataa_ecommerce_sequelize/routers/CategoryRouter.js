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

router.get("/list/:status?",async (req,res)=>
{
    console.log("Status : " , req.params.status)
    var options = {
        include:'product'
    }
    if(req.params.status!=undefined)
        options.where = {cate_status : req.params.status}
    //else // User : true
    try {
        var categories = await Category.findAll(options)
        res.status(200).json(new ApiResponse(true,categories,"Success !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.put("/update/:id",async (req,res)=>
{
    try {
        var category = await Category.findOne({
            where : {id: req.params.id}
        })
        if(category==null)
            res.status(200).json(new ApiResponse(false,category,"Category Not Found !"))
        else
        {
            category.cate_name = req.body.cate_name 
            console.log(category)
            await category.save()
            res.status(200).json(new ApiResponse(true,category,"Category Update !"))
        }    
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


router.put("/changestatus/:id/:status",async (req,res)=>
{
    try {
        var category = await Category.findOne({
            where : {id: req.params.id}
        })
        if(category==null)
            res.status(200).json(new ApiResponse(false,category,"Category Not Found !"))
        else
        {
            category.cate_status = req.params.status
            await category.save()
            res.status(200).json(new ApiResponse(true,category,"Category Status Changed !"))
        }    
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


module.exports = router;