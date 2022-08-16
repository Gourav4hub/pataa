const express = require('express')
const ApiResponse = require('./responses/ApiResponse')
const {Customer, Product , Cart} = require('../models/index')

const router = express.Router()

router.post("/add",async (req,res)=>{
    // {qty,product,discount}
    var reqData = req.body
    var email = req.user_email;
    var customer = await Customer.findOne({where:{email}})
    var product = await Product.findOne({where:{id:reqData.product}})

    var cart = await Cart.create({
                qty:reqData.qty,
                product:product.id,
                customer: customer.id,
                discount: reqData.discount})

    res.status(200).json(new ApiResponse(true,cart,"Cart Save Done !"))            
})

router.get("/get",async (req,res)=>{   
    var email = req.user_email;
    var customer = await Customer.findOne({where:{email}})
   
    var carts = await Cart.findAll({where:{customer:customer.id}})

    res.status(200).json(new ApiResponse(true,carts,"Carts !"))            
})

module.exports = router;