const { response } = require('express')
const express = require('express')
const path = require('path')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

const productModel = require("../models/ProductModel")
const validation = require('./validation/Validation')
const {productSchema} = require("./validation/Schemas")

// // Upload Image
// // /api/product/upload
// router.post("/upload",(request,response)=>
// {
//    var file = request.files.pic 
//    console.log(request.body)
//    // var filename = uuidv4()+path.extname(file.name)
//    // console.log(filename)
//    // var filePath = path.join(__dirname,"../uploads/",filename)
//    // file.mv(filePath) 
//    response.send("Yes")
// })

router.post("",validation(productSchema),async (request,response)=>{
   var data = request.body
   var result = await productModel.saveProduct(data);
   response.json(result)
})

router.put("/:id",async (request,response)=>
{
   var data = request.body
   var id = request.params.id
   var result = await productModel.updateProduct(id,data);
   response.json(result)
})

router.post("/upload/:id",async (request,response)=>
{
  try{
      var file = request.files.pic 
      var filename = uuidv4()+path.extname(file.name)
      var filePath = path.join(__dirname,"../uploads/",filename)
      file.mv(filePath)
      var id = request.params.id
      var result = await productModel.uploadProductImage(id,filename);
      response.json(result)
  }catch{
      response.status(400).json({status:false,msg:"Upload Failed !"})
  }
})

router.get("",async (request,response)=>{  
   var result = await productModel.listProduct();
   response.json(result)
})

module.exports = router;





// select * from product where product_category in 
//    (select category_id from category where cate_title like 'M%')

/*
   save , update , delete , list , get
   search : cate,price,
*/