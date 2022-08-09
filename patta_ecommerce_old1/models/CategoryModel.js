const mysqlConn = require('./MysqlConn')
const format = require('string-format')
class CategoryModel
{
    saveCategory = async (data)=>{
        return new Promise(async (resolve,reject)=>{
            var conn = await mysqlConn().catch(errMsg=>{
                console.log(errMsg)
                reject(false)
            }) 
            var queryString = format("insert into category(cate_title,cate_description) value('{}','{}')",data.title,data.description)
            console.log(queryString)
            conn.query(queryString,(err,result)=>{
                if(err) reject(false)
                else {
                    console.log(result)
                    resolve(true)
                }
            }); 
        })    
    }

    listCategory = async (status=true)=>{
        return new Promise(async (resolve,reject)=>{
            var conn = await mysqlConn().catch(errMsg=>{
                console.log(errMsg)
                reject(false)
            }) 
            var queryString = format("select * from category where cate_status={}",status)
            console.log(queryString)
            conn.query(queryString,(err,records)=>{
                if(err) reject(false)
                else resolve(records)               
            }); 
        })    
    }

    getCategory = async (id)=>{
        return new Promise(async (resolve,reject)=>{
            var conn = await mysqlConn().catch(errMsg=>{
                console.log(errMsg)
                reject(false)
            }) 
            var queryString = format("select * from category where cate_id={}",id)
            console.log(queryString)
            conn.query(queryString,(err,records)=>{
                if(err || records.length==0) reject(false)
                else resolve(records[0])               
            }); 
        })    
    }
}

module.exports = new CategoryModel()