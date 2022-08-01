const db = require('./MysqlConn')

const tableColumns = new Map([
    ["title","product_title"] ,
    ["description","product_description"],
    ["price","product_price"],
    ["category","product_category"]
])

class ProductModel 
{
    uploadProductImage = async (id, filename) => {
        return new Promise(async (resolve) => {

            var queryString = `update product set product_image='${filename}' where product_id=${id}`
            console.log(queryString)
            var result = await db.query(queryString)
                .catch(err => resolve({ status: false, msg: "Product Not Updated !" }));

            var rows = result[0].affectedRows
            if (rows > 0)
                resolve({ status: true, msg: "Product Updated !" })
            else
                resolve({ status: false, msg: "Product Not Found !" })
        })
    }

    updateProduct = async (id, data) => {
        return new Promise(async (resolve) => {

            var queryString = "update product set "

            var columns = []
            for (var key of Object.keys(data))
                columns.push(`${tableColumns.get(key)}='${data[key]}'`)
            queryString += columns.join(',')
            queryString += ` where product_id=${id}`
            console.log(queryString)
            var result = await db.query(queryString)
                .catch(err => resolve({ status: false, msg: "Product Not Updated !" }));

            var rows = result[0].affectedRows
            if (rows > 0)
                resolve({ status: true, msg: "Product Updated !" })
            else
                resolve({ status: false, msg: "Product Not Found !" })
        })
    }
    saveProduct = async (data) => {        
        return new Promise(async resolve => {
            var quString = `insert into product(product_title,product_description,product_price,product_category) value('${data.title}','${data.description}',${data.price},${data.category})`;
            var result = await db.query(quString)
                .catch(err => 
                    { console.log(err);resolve({ status: false, msg: "Product Not Saved !" })});

            resolve({ status: true, msg: "Product Saved !" })
        });
    }

    listProduct = async (status = true) => {
        return new Promise(async resolve => {
            var result = await db.query(`select * from product where product_status=${status}`)
                .catch(err => resolve({ status: false, data: undefined }));
            resolve({ status: true, data: result[0] })
        })
    }

    getProduct = async (id, isFalseSend) => {
        return new Promise(async resolve => {
            var result = await db.query(`select * from product where cate_id=${id}`)
                .catch(err => resolve({ status: false, data: undefined }));
            var data = result[0]
            if (data.length == 0)
                resolve({ status: false, data: undefined, msg: "Product Not Found !" })
            else {
                var ob = data[0]
                if (ob.cate_status || (ob.cate_status == false && isFalseSend))
                    resolve({ status: true, data: ob })
                else
                    resolve({ status: true, data: undefined, msg: "Unable To Send !" })
            }
        })
    }

    deleteProduct = async (id, status) => {
        return new Promise(async resolve => {
            var result = await db.query(`update product set cate_status=${status} where cate_id=${id}`)
                .catch(err => resolve({ status: false, msg: "Not Changed !" }));
            var rows = result[0].affectedRows
            if (rows > 0)
                resolve({ status: true, msg: "Product Status Updated !" })
            else
                resolve({ status: false, msg: "Product Not found !" })
        })
    }
}

module.exports = new ProductModel()


/*
deleteProduct = async (id)=>{
        return new Promise(async resolve=>{
            var result = await db.query(`delete from product where cate_id=${id}`)
            .catch(err=>resolve({status:false,msg:"Not Deleted !"}));
            var rows = result[0].affectedRows
            if(rows>0)
                resolve({status:true,msg:"Product Deleted !"})
            else
                resolve({status:false,msg:"Product Not found !"})
        })
    }
*/