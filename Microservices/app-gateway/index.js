const axios = require('axios')
const express = require('express')
const server = express()
const path = require('path')
const fs = require('fs')
server.use(express.json())

server.post("/register",(req,res)=>{
    var serviceData = req.body // { name : "employee" , info : { host:"",port:234 }}

    const servicesInfo = JSON.parse(fs.readFileSync('./services.json', { encoding: 'utf-8' }))

    servicesInfo.services[serviceData.name] = serviceData.info
    fs.writeFileSync('./services.json',JSON.stringify(servicesInfo))
    
    res.json({msg:"Service Register Done !"})
})

// http://localhost:8083/salary/list
server.all("/:serviceName/:url", (req, res) => {
    const servicesInfo = JSON.parse(fs.readFileSync('./services.json', { encoding: 'utf-8' }))
    var serviceName = req.params.serviceName

    var serviceObject = servicesInfo.services[serviceName]
    if (serviceObject == undefined)
        res.status(400).json({ msg: "Service Not Found", status: false })
    else {
        var host = serviceObject.host + ":" + serviceObject.port + "/"
        var requestUrl = host + req.params.url

        axios({
            method: req.method,
            url: requestUrl,
            headers: {
                'Content-Type': "application/json"
            },
            data: req.body
        }).then(response => res.json(response.data)).catch(err=>{
            res.status(500).json({status:false,msg:"Something Wrong !"})
        })
    }
})

server.listen(8083, () => {
    console.log("API Gateway  : http://localhost:8083")
})