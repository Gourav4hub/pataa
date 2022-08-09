const express = require('express')
const fileUpload = require('express-fileupload')
const {v4 : uuidv4} = require('uuid')
const path = require('path')
const fs = require('fs')
const ApiResponse = require('./responses/ApiResponse')
const {Product} = require('../models/index')

const router = express.Router()
router.use(fileUpload())
router.use(express.static(path.join(__dirname,"../uploads")))
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

router.get("/list/:status?",async (req,res)=>
{
    try {
        var options = {
            attributes : {
                exclude : ['id','category']
            },
            include : 'cate'
        }
        if(req.params.status!=undefined)
            options.where = {product_status : req.params.status}
        var products = await Product.findAll(options)
        res.status(200).json(new ApiResponse(true,products,"Success !"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.put("/update/:id",async (req,res)=>
{
    try {
        var product = await Product.findOne({
            where : {id: req.params.id}
        })
        if(product==null)
            res.status(200).json(new ApiResponse(false,product,"Product Not Found !"))
        else
        {
            product.product_name = req.body.product_name 
            product.product_price  = req.body.product_price 
            product.description = req.body.description
          
            await product.save()
            res.status(200).json(new ApiResponse(true,product,"Product Update !"))
        }    
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.put("/changestatus/:id/:status",async (req,res)=>
{
    try {
        var product = await Product.findOne({
            where : {id: req.params.id}
        })
        if(product==null)
            res.status(200).json(new ApiResponse(false,product,"Product Not Found !"))
        else
        {
            product.product_status = req.params.status
            await product.save()
            res.status(200).json(new ApiResponse(true,product,"Product Status Changed !"))
        }    
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})

router.post("/upload/:id",async (req,res)=>
{
    try {
        var product = await Product.findOne({
            where : {id: req.params.id}
        })
        if(product==null)
            res.status(200).json(new ApiResponse(false,product,"Product Not Found !"))
        else
        {
            if(product.product_image!=null)
            {
              var delFilePath = path.join(__dirname,"../uploads/",product.product_image) 
              fs.unlinkSync(delFilePath)
            }

            var file = req.files.image 
            var filename = uuidv4()+path.extname(file.name)
            var filePath = path.join(__dirname,"../uploads/",filename)
            file.mv(filePath)            
            product.product_image = filename
            await product.save()

            res.status(200).json(new ApiResponse(true,product,"Product Image Uploaded !"))
        }    
    }catch(err){
        //console.log(err.message)
        res.status(400).json(new ApiResponse(false,"Hello",err))
    }
})


module.exports = router;