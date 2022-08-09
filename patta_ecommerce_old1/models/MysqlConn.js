const mysql = require('mysql')
const { resolve } = require('path')

function getConnection(){
    return new Promise((resolve,reject)=>{
        var conObj = mysql.createConnection({
            host : process.env.DB_HOST,
            port : process.env.DB_PORT,
            user : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE
        });
        conObj.connect((err)=>{
           if(err)
            reject(err.message)
           else
            resolve(conObj) 
        })
    })
}

module.exports = getConnection