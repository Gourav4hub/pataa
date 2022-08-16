'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.Product,{foreignKey:'product',as:'prod'})
      OrderItem.belongsTo(models.Order,{foreignKey:'order',as:'ord'})
    }
  }
  OrderItem.init({
    qty: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Quantity Can Not Be Empty !"},
        notNull : {msg : "Quantity Not Found !"}
      }
    },
    price: {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Price Can Not Be Empty !"},
        notNull : {msg : "Price Not Found !"}
      }
    },
    discount: {
      type : DataTypes.FLOAT,
      allowNull : true,
      validate: {
        notEmpty : {msg : "Discount Can Not Be Empty !"}        
      }
    },
    amount: {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Amount Can Not Be Empty !"} ,
        notNull : {msg : "Amount Not Found !"}       
      }
    }
  }, {
    sequelize,
    tableName: 'order_items',
    modelName: 'OrderItem',
  });
  return OrderItem;
};