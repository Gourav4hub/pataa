const axios = require('axios')
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const server = express()
const path = require('path')
const fs = require('fs')
server.use(express.json())

server.post("/register",(req,res)=>{
    var serviceData = req.body // { name : "employee" , info : { host:"",port:234 }}

    const servicesInfo = JSON.parse(fs.readFileSync('./services.json', { encoding: 'utf-8' }))

    var serviceObj = servicesInfo.services[serviceData.name]
    var instanceUUID = uuidv4() // Put Repeat Instance Registry Check
    if(serviceObj==undefined)
    {
        servicesInfo.services[serviceData.name] = {
            instances:[{
                uuid : instanceUUID,
                reqCount: 0,
		        lastHealthTime: new Date().getTime(),
                info : serviceData.info
            }]
        }
    }
    else{
        servicesInfo.services[serviceData.name].instances.push({
                uuid : instanceUUID,
                reqCount: 0,
		        lastHealthTime: new Date().getTime(),
                info : serviceData.info
            })
    }
    
    fs.writeFileSync('./services.json',JSON.stringify(servicesInfo))
    
    res.json({msg:"Service Register Done !"})
})

// http://localhost:8083/salary/list
server.all("/:serviceName/:url", (req, res) => 
{
    const servicesInfo = JSON.parse(fs.readFileSync('./services.json', { encoding: 'utf-8' }))
    var serviceName = req.params.serviceName

    var serviceObject = servicesInfo.services[serviceName]
    if (serviceObject == undefined)
        res.status(400).json({ msg: "Service Not Found", status: false })
    else 
    {
        var instance = loadBalance(serviceObject)
        var host = instance.info.host + ":" + instance.info.port + "/"
        var requestUrl = host + req.params.url
        console.log(requestUrl)
        // Increase Request Count for Instance
        changeInstanceRequestCount(true,instance.uuid,serviceName,servicesInfo)
        axios({
            method: req.method,
            url: requestUrl,
            headers: {
                'Content-Type': "application/json"
            },
            data: req.body
        })
        .then(response =>res.json(response.data))
        .catch(err=>res.status(500).json({status:false,msg:"Something Wrong !"}))
        .finally(()=> changeInstanceRequestCount(false,instance.uuid,serviceName,servicesInfo))
    }
})

function changeInstanceRequestCount(isIncrement,uuid,serviceName,servicesInfo)
{
    servicesInfo.services[serviceName].instances = servicesInfo.services[serviceName].instances.map(instance=>{
        if(instance.uuid==uuid)
            instance.reqCount = isIncrement?instance.reqCount+10:instance.reqCount-1;
        return instance    
    })
    fs.writeFileSync('./services.json',JSON.stringify(servicesInfo))
}

function loadBalance(serviceObject)
{
    var instances = serviceObject.instances
    if(instances.length==1)
        return instances[0]
    else
    {
        return instances.sort((ins1,ins2)=>ins1.reqCount-ins2.reqCount)[0]
    }    
}

function healthCheckUp(){
    const servicesInfo = JSON.parse(fs.readFileSync('./services.json', { encoding: 'utf-8' }))
    var instances = []
    var keys = Object.keys(servicesInfo.services)
    for(var key of keys)
    {
        var service = servicesInfo.services[key]
        instances = [...instances,...service.instances]
    }
    var instance = instances.sort((ins1,ins2)=>ins1.lastHealthTime-ins2.lastHealthTime)[0]

    // Instance Health API Call >>> Catch >> Delete Instance....
}

server.listen(8089, () => {
    console.log("API Gateway  : http://localhost:8089")
    setInterval(healthCheckUp,1000*5)
})