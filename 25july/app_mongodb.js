const express = require('express')
const { MongoClient , ObjectId } = require('mongodb')

const server = express()
server.use(express.urlencoded())
server.use(express.json())

server.post("/get",(request,response)=>{
    console.log(request.body)
    MongoClient.connect("mongodb://localhost:27017")
    .then(client=>{
        var db = client.db('pataadb')
        db.collection('employee')
        .findOne({_id:ObjectId(request.body.id)})
        .then(data=>{
            response.json(data)
        })
        .catch(err=>{
            console.log({status:false})
        })
    })
    .catch(err=>{
        console.log("Failed : " , err)
    })
})

server.post("/list",(request,response)=>{
    console.log(request.body)
    MongoClient.connect("mongodb://localhost:27017")
    .then(client=>{
        var db = client.db('pataadb')
        db.collection('employee').find().toArray()
        .then(data=>{
            response.json(data)
        })
        .catch(err=>{
            console.log({status:false})
        })
    })
    .catch(err=>{
        console.log("Failed : " , err)
    })
})

server.post("/save2",(request,response)=>{
    console.log(request.body)
    MongoClient.connect("mongodb://localhost:27017")
    .then(client=>{
        var db = client.db('pataadb')
        db.collection('employee').insertMany(request.body)
        .then(result=>{
            console.log(result)
            if(result.acknowledged)
                response.json({status:true,msg:"Saved !"})
            else
                response.json({status:false,msg:"Not Saved !"})    
        })
        .catch(err=>{
            console.log(err)
            response.json({status:false,msg:"Not Saved !"})
        })
    })
    .catch(err=>{
        console.log("Failed : " , err)
    })
})

server.post("/save",(request,response)=>{
    console.log(request.body)
    MongoClient.connect("mongodb://localhost:27017")
    .then(client=>{
        var db = client.db('pataadb')
        db.collection('employee').insertOne(request.body)
        .then(result=>{
            if(result.acknowledged)
                response.json({status:true,msg:"Saved !"})
            else
                response.json({status:false,msg:"Not Saved !"})    
        })
        .catch(err=>{
            console.log(err)
            response.json({status:false,msg:"Not Saved !"})
        })
    })
    .catch(err=>{
        console.log("Failed : " , err)
    })
})

server.listen(8989,()=>{
    console.log("http://localhost:8989")
})