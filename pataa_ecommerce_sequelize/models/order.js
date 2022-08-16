'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer,{foreignKey:'customer',as:'cust'})
      Order.hasMany(models.OrderItem,{foreignKey: 'order' , as : 'orderitems'})
    }
  }
  Order.init({
    total_amount: {
      type : DataTypes.FLOAT,
      allowNull:false,
      validate: {
        notEmpty : {msg : "Amount Can Not Be Empty !"},
        notNull : {msg : "Amount Not Found !"}
      }
    },
    status: {
      type : DataTypes.STRING,
      allowNull:false,
      defaultValue : "Pending",
      validate: {
        notEmpty : {msg : "Status Can Not Be Empty !"},
        notNull : {msg : "Status Not Found !"}
      }
    }
  }, {
    sequelize,
    tableName:'orders',
    modelName: 'Order',
  });
  return Order;
};