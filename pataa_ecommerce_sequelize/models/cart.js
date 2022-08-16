'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Product,{foreignKey:'product',as:'prod'})
      Cart.belongsTo(models.Customer,{foreignKey:'customer',as:'cust'})
    }
  }
  Cart.init({
    qty: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Quantity Can Not Be Empty !"},
        notNull : {msg : "Quantity Not Found !"}
      }
    },
    discount: {
      type : DataTypes.FLOAT,
      allowNull : true,
      validate: {
        notEmpty : {msg : "Discount Can Not Be Empty !"},
      }
    }
  }, {
    sequelize,
    tableName : 'carts',
    modelName: 'Cart',
  });
  return Cart;
};