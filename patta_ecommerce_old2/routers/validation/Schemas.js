const Joi = require('joi')

const categorySchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string()
  })
const productSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    price : Joi.number().required(),
    category : Joi.number().required()
  })  

module.exports = {categorySchema,productSchema}  