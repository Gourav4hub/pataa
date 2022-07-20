const { response } = require('express')
const express = require('express')
const employeeModel = require('../models/EmployeeModel')

const router = express.Router()

router.get("/update/:id",(request,response)=>
{
    console.log(request.params)
})

router.get("/delete/:id",(request,response)=>
{
    console.log(request.params)
})

router.all("/save",(request,response)=>
{
    if(request.method=="GET")
    {
    var msg ="";
    var status = request.query.status
    if(status!=undefined)
        msg = "Employee Saved Successfully !"
    response.render('employee',{msg})
    }

    if(request.method=="POST"){
        employeeModel.saveEmployee(request.body)
        .then((status)=>{
            response.redirect("/employee/save?status=true")
        })
        .catch(error=>{           
            response.render('error',{error})
         })
    }
})

router.get("/list",(request,response)=>{
    employeeModel.listEmployee()
        .then(records=>{
            //console.log(records)
            response.render('emplist',{records})
        })
        .catch(error=>{
           // console.log(error)
           response.render('error',{error})
        })
})

module.exports = router