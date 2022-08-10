const express = require('express')

const categoryRouter = require('./CategoryRouter')
const productRouter = require('./ProductRouter')
const customerRouter = require('./CustomerRouter')
const userRouter = require('./UserRouter')

const jwt = require('../config/JWT')
const router = express.Router()

router.use("/category",categoryRouter)
router.use("/product",productRouter)
router.use("/user",userRouter)
router.use("/customer",jwt.authenticateToken(),customerRouter)
module.exports = router;