const express = require('express')
const router = express.Router()

var data = [
    {id:12,name:"vikas",age:34},
    {id:14,name:"gopal",age:21},
    {id:16,name:"rajesh",age:26},
]

router.get("/list",(req,res)=>{
    res.json(data)
})
router.post("/get",(req,res)=>{
    var id = req.body.id 
    res.json(data.find(ob=>ob.id==id))
})


module.exports = router