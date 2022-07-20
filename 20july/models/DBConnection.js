const mysql = require('mysql')

function getConnection()
{
    var pr = new Promise((resolve,reject)=>
    {
        var conObj = mysql.createConnection({
            host : 'localhost',
            port : 3306,
            user : 'gourav',
            password : 'Gourav@123',
            database : 'pataa'
        })
        conObj.connect((err)=>{
            if(err)
               reject(err)
            else
               resolve(conObj)  
        })
    })
    return pr;
}

module.exports = getConnection