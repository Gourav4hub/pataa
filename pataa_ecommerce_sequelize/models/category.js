'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product,{foreignKey:'category',as:'product'})
    }
  }
  Category.init({
    cate_name: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate: {
        notEmpty : {msg : "Category Name Can Not Be Empty !"},
        notNull : {msg : "Category Name Not Found !"}
      }
    },
    cate_status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true
    }
  }, {
    sequelize,
    tableName : "categories",
    modelName: 'Category',
  });
  return Category;
};