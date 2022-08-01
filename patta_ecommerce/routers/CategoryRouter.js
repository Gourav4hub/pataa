const express = require('express')

const categoryModel = require('../models/CategoryModel')
const validation = require('./validation/Validation')
const {categorySchema} = require("./validation/Schemas")
const router = express.Router()

// Save Category
router.post("",validation(categorySchema),async (request,response)=>{
    var data = request.body
    console.log(data)
    var result = await categoryModel.saveCategory(data)
    response.json(result)
})

// Update Category
router.put("/:id",async (request,response)=>{
    var data = request.body
    var result = await categoryModel.updateCategory(request.params.id,data)
    response.json(result)  
})

// List Category
router.get("/:status?",async (request,response)=>{
    console.log(request.params.status)
    var result = await categoryModel.listCategory(request.params.status)
    response.json(result)
})

// Get Category
router.get("/:id",async (request,response)=>{
    var id = request.params.id
    var record = await categoryModel.getCategory(id,true)
    response.json(record)
})

// SoftDelete Category
router.delete("/:id",async (request,response)=>{
    var id = request.params.id
    var record = await categoryModel.deleteCategory(id,false)
    response.json(record)
})

module.exports = router;



