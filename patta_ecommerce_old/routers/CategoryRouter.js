const express = require('express')
const categoryModel = require('../models/CategoryModel')
const router = express.Router()

// Save Category
router.post("",async (request,response)=>{
    var data = request.body
    var status = await categoryModel.saveCategory(data).catch(status=>response.json({status}));
    response.json({status})
})

// Update Category
router.put("",(request,response)=>{
    response.send("Update")
})

// List Category
router.get("",async (request,response)=>{
    var records = await categoryModel.listCategory(true).catch(status=>response.json({status}));
    response.json({records})
})

// Get Category
router.get("/:id",async (request,response)=>{
    var id = request.params.id
    var record = await categoryModel.getCategory(id).catch(status=>response.json({status}));
    response.json({record})
})

// SoftDelete Category
router.delete("",(request,response)=>{
    response.send("Delete")
})

module.exports = router;