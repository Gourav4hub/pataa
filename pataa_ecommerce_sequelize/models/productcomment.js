'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductComment.belongsTo(models.Product,{foreignKey:'product',as:'prod'})
      ProductComment.belongsTo(models.Customer,{foreignKey:'customer',as:'cust'})
    }
  }
  ProductComment.init({
    comment: {
      type: DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Comment Can Not Be Empty !"},
        notNull : {msg : "Comment Not Found !"}
      }
    }
  }, {
    sequelize,
    tableName : 'product_comments',
    modelName: 'ProductComment',
  });
  return ProductComment;
};