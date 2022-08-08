'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category,{foreignKey:'category',as : 'cate'})
    }
  }
  Product.init({
    product_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Product Name Can Not Be Empty !"},
        notNull : {msg : "Product Name Not Found !"}
      }
    },
    product_price: {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate: {
        isNumeric : {msg : "Product Price Always Be Numeric !"},        
        notNull : {msg : "Product Price Not Found !"}
      }
    },
    description: {
      type : DataTypes.STRING,    
      validate: {
        notEmpty : {msg : "Product Description Can Not Be Empty !"}   
      }
    },
    product_image: {
      type : DataTypes.STRING,    
      validate: {
        notEmpty : {msg : "Product Image Can Not Be Empty !"}   
      }
    },
    product_status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true
    }
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};