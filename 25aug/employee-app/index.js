const express = require('express')

const logger = require('./logger')
const empRouter = require('./routers/EmpRouter')

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

const options = {
    swaggerDefinition : {
        info : {
            title : "Employee Service",
            version : "1.0.0"
        },
        servers: [
            {
              url: 'http://localhost:8082',
              description: 'Development server',
            },
          ],
    },
  apis: ['swagger-docs.js'], // files containing annotations as above
};
const swaggerDocs = swaggerJsdoc(options)

const server = express()
server.use(express.json())

server.use('/api-docs',swaggerUi.serve , swaggerUi.setup(swaggerDocs))

server.use((req,res,next)=>{
    logger.info("URL : " , req.url)
    next()
})

server.use("",empRouter)

server.get("/health",(req,res)=>res.status(200).json({status:true}))









var PORT = 8082
server.listen(PORT,()=>
{
    console.log("Employee Service : http://localhost:"+PORT)    
 })