const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request,response)=>
{
    console.log(request.url)
    var ext = path.extname(request.url)
    if(ext){
        switch(ext){
            case ".jpg":
            case ".jpeg": 
                var imgpath = path.join(__dirname,"images",request.url)
                console.log(imgpath)
                response.write(fs.readFileSync(imgpath))
        }
    }
    else
    {
        switch(request.url)
        {
            case "/":  response.write(fs.readFileSync('./pages/home.html','UTF-8'))
                    break;
            case "/about":  response.write(fs.readFileSync('./pages/about.html','UTF-8'))
                    break;
            case "/contact":  
                    // ???    
                    response.write(fs.readFileSync('./pages/contact.html','UTF-8'))
                    break;        
        }
    }
    response.end()
})

server.listen(8989)

