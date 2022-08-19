const express = require('express')
const router = express.Router()

var data = [
    {id:1,month:"jun",amount:34000},
    {id:2,month:"aug",amount:23450},
    {id:3,month:"aug",amount:21345},
]

router.get("/list",(req,res)=>{
    res.json(data)
})
router.post("/get",(req,res)=>{
    var id = req.body.id 
    res.json(data.find(ob=>ob.id==id))
})


module.exports = router