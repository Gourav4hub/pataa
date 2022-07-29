const express = require('express')
const path = require('path')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

// router.use()

// Upload Image
// /api/product/upload
router.post("/upload",(request,response)=>{
   var file = request.files.pic 
   var filename = uuidv4()+path.extname(file.name)
   console.log(filename)
   var filePath = path.join(__dirname,"../uploads/",filename)
   file.mv(filePath) 
   response.send("Yes")
})

module.exports = router;



