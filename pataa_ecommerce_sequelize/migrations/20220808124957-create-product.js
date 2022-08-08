'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      category: { // CategoryId
          type : DataTypes.INTEGER,
          references : { model : 'categories' , primaryKey: 'id'}
      },
      product_name: {
        type : DataTypes.STRING,
        allowNull : false
      },
      product_price: {
        type : DataTypes.FLOAT,
        allowNull : false
      },
      description: {
        type : DataTypes.STRING
      },
      product_image: {
        type : DataTypes.STRING
      },
      product_status: {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('products');
  }
};