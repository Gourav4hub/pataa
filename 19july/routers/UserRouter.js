const express = require('express')

const router = express.Router()

// http://localhost:8989/user/register
router.get("/register",(request,response)=>{
    console.log(request.reqdata)
    console.log(request.query)
       response.send("Hi")
})

router.post("/register2",(request,response)=>{   
    console.log(request.body)
    response.send("Hi")
})

module.exports = router