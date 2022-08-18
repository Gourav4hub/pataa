const express = require('express')
const ApiResponse = require('./responses/ApiResponse')
const {Customer,Cart,Product,Order,OrderItem,sequelize} = require('../models/index')

const router = express.Router()

router.get("/orders",async (req,res)=>
{
    var email = req.user_email;
    var customer = await Customer.findOne({where:{email}})
    var orders = await Order.findAll({
        where:{customer:customer.id},
        include : 'orderitems'
    })
    res.status(200).json(new ApiResponse(true,orders,"Customer Orders !"))
})

router.post("/placeorder",async (req,res)=>
{
    var email = req.user_email;
    var customer = await Customer.findOne({where:{email}})
    if(customer!=null)
    {
        const transaction = await sequelize.transaction();
        try {
        var carts = await Cart.findAll({
            where:{customer:customer.id},
            include : 'prod'
        })
        var totalAmount = carts.reduce((preValue,currentObj)=>
        {
            var ob = currentObj.dataValues
            var amt = (ob.qty * ob.prod.dataValues.product_price)-ob.discount
            return amt + preValue
        },0)
        var order = await Order.create({total_amount:totalAmount,customer:customer.id},{ transaction})

        var items = carts.map(cart=>{
            var ob = {
                qty : cart.qty , 
                price : cart.prod.dataValues.product_price,
                discount : cart.discount,
                amount : (cart.qty * cart.prod.dataValues.product_price)-cart.discount,
                product : cart.prod.dataValues.id,
                order : order.dataValues.id
            }
            return ob
        });
        
        var item = await OrderItem.bulkCreate(items,{ transaction})

        await Cart.destroy({ where: { customer : customer.id }},{transaction})
        await transaction.commit()
        res.status(200).json(new ApiResponse(true,order,"Customer Order Placed !"))
    }catch(err){
        await transaction.rollback()
        res.status(500).json(new ApiResponse(false,null,"Somthing Wrong !"))
    }
       
    }else{
        res.status(400).json(new ApiResponse(false,null,"Customer Not Found !"))
    }
})

router.get("/myinfo",async (req,res)=>
{
    try {
        var customer = await Customer.findOne({
            where : {email :  req.user_email}
        })
        res.status(200).json(new ApiResponse(true,customer,"Info"))
    }catch(err){
        res.status(500).json(new ApiResponse(false,undefined,err))
    }
})


module.exports = router;

/*
for(var cart of carts)
        {
            var ob = {
                qty : cart.qty , 
                price : cart.prod.dataValues.product_price,
                discount : cart.discount,
                amount : (cart.qty * cart.prod.dataValues.product_price)-cart.discount,
                product : cart.prod.dataValues.id,
                order : order.dataValues.id
            }
            var item = await OrderItem.create(ob)
            res.status(200).json(new ApiResponse(true,order,"Customer Order Placed !"))
        }
*/