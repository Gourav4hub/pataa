'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull : {msg : "Customer Name Not Found !"},
        notEmpty : {msg : "Customer Name Can Not Be Empty !"},
      }
    },
    phone: {
      type: DataTypes.STRING,     
      validate : {       
        notEmpty : {msg : "Customer Phone Can Not Be Empty !"},
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique : true,
      validate : {
        notNull : {msg : "Customer Email Not Found !"},
        notEmpty : {msg : "Customer Email Can Not Be Empty !"},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull : {msg : "Customer Password Not Found !"},
        notEmpty : {msg : "Customer Password Can Not Be Empty !"},
      }
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'customers',
    modelName: 'Customer',
  });
  return Customer;
};