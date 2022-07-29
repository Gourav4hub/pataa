const db = require('./MysqlConn')
class CategoryModel {
    updateCategory = async (id, data) => {
        return new Promise(async (resolve) => {

            var queryString = "update category set "

            var columns = []
            for (var key of Object.keys(data))
                columns.push(`${key}='${data[key]}'`)
            queryString += columns.join(',')
            queryString += ` where cate_id=${id}`
            console.log(queryString)
            var result = await db.query(queryString)
                .catch(err => resolve({ status: false, msg: "Category Not Updated !" }));

            var rows = result[0].affectedRows
            if (rows > 0)
                resolve({ status: true, msg: "Category Updated !" })
            else
                resolve({ status: false, msg: "Category Not Found !" })
        })
    }
    saveCategory = async (data) => {
        return new Promise(async resolve => {
            var quString = `insert into category(cate_title,cate_description) value('${data.title}','${data.description}')`;
            var result = await db.query(quString)
                .catch(err => resolve({ status: false, msg: "Category Not Saved !" }));

            resolve({ status: true, msg: "Category Saved !" })
        });
    }

    listCategory = async (status = true) => {
        return new Promise(async resolve => {
            var result = await db.query(`select * from category where cate_status=${status}`)
                .catch(err => resolve({ status: false, data: undefined }));
            resolve({ status: true, data: result[0] })
        })
    }

    getCategory = async (id, isFalseSend) => {
        return new Promise(async resolve => {
            var result = await db.query(`select * from category where cate_id=${id}`)
                .catch(err => resolve({ status: false, data: undefined }));
            var data = result[0]
            if (data.length == 0)
                resolve({ status: false, data: undefined, msg: "Category Not Found !" })
            else {
                var ob = data[0]
                if (ob.cate_status || (ob.cate_status == false && isFalseSend))
                    resolve({ status: true, data: ob })
                else
                    resolve({ status: true, data: undefined, msg: "Unable To Send !" })
            }
        })
    }

    deleteCategory = async (id, status) => {
        return new Promise(async resolve => {
            var result = await db.query(`update category set cate_status=${status} where cate_id=${id}`)
                .catch(err => resolve({ status: false, msg: "Not Changed !" }));
            var rows = result[0].affectedRows
            if (rows > 0)
                resolve({ status: true, msg: "Category Status Updated !" })
            else
                resolve({ status: false, msg: "Category Not found !" })
        })
    }
}

module.exports = new CategoryModel()


/*
deleteCategory = async (id)=>{
        return new Promise(async resolve=>{
            var result = await db.query(`delete from category where cate_id=${id}`)
            .catch(err=>resolve({status:false,msg:"Not Deleted !"}));
            var rows = result[0].affectedRows
            if(rows>0)
                resolve({status:true,msg:"Category Deleted !"})
            else
                resolve({status:false,msg:"Category Not found !"})
        })
    }
*/