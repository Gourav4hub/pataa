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
   
    employeeModel.delEmployee(request.params.id)
        .then(result=>{           
            response.json({status:true})
        })
        .catch(err=>{           
            response.json({status:false})
        });
})

router.all("/save",(request,response)=>
{
    if(request.method=="GET")
    {
    var msg ="";
    var status = request.session.insertStatus// Session Get
    if(status!=undefined){
        msg = "Employee Saved Successfully !"
        delete request.session.insertStatus
    }
    response.render('employee',{msg})
    }

    if(request.method=="POST"){
        employeeModel.saveEmployee(request.body)
        .then((status)=>{
            // Session Save
            request.session.insertStatus = true
            response.redirect("/employee/save")
        })
        .catch(error=>{           
            response.render('error',{error})
         })
    }
})

router.get("/list",(request,response)=>{
    var msg = ""
    var delStatus = request.session.isDelete
    
    msg = delStatus==true?"Delete Successfully":delStatus==false?"Delete Failed":"";

    employeeModel.listEmployee()
        .then(records=>{
            //console.log(records)
            response.render('emplist',{records,msg})
        })
        .catch(error=>{
           // console.log(error)
           response.render('error',{error})
        })
})

module.exports = router

// CSRF www.abcd.com,www.xyz.com

// AJAX : Asychronous JavaScript and XML