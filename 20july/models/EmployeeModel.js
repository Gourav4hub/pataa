const { resolve } = require('path')
const stringFormat = require('string-format')
const dbCon = require('./DBConnection')

class EmployeeModel
{
    saveEmployee = (data)=>{
        var pr = new Promise((resolve,reject)=>{
            dbCon().then(conn=>
            {
                var sqlQuery = stringFormat("insert into employee(emp_name,emp_email,emp_salary) value('{}','{}',{});",data.empname,data.empemail,data.empsal)
                console.log(sqlQuery)
                conn.query(sqlQuery,(err,result)=>
                {
                    console.log(result)
                    conn.end()
                    if(err)
                        reject("New Employee Save Error !")
                    else
                        resolve(true)    
                });
            }).catch(err=>{
                reject("DB Connection Failed !")
            })  
        })
        return pr;
    }

    listEmployee = ()=>{
        var pr = new Promise((resolve,reject)=>{
            dbCon().then(conn=>{
                conn.query("select * from employee",(err,records)=>
                {
                    conn.end()
                    if(err)
                        reject("Fetching Error !")
                    else
                        resolve(records)    
                });
            }).catch(err=>{
                reject("DB Connection Failed !")
            })  
        })
        return pr;
    }
}

module.exports = new EmployeeModel()