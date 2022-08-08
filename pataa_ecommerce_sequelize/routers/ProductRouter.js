const express = require('express')
const ApiResponse = require('./responses/ApiResponse')
const {Product} = require('../models/index')

const router = express.Router()

router.post("/save",async (req,res)=>
{
    var data = req.body
    try {
        console.log(data)
        var product = await Product.create(data)
        res.status(200).json(new ApiResponse(true,product,"Product Saved !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.get("/list",async (req,res)=>
{
    try {
        var products = await Product.findAll({
            attributes : {
                exclude : ['id','category']
            },
            include : 'cate'
        })
        res.status(200).json(new ApiResponse(true,products,"Success !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


module.exports = router;