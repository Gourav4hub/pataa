'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      qty: {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      price: {
        type : DataTypes.FLOAT,
        allowNull : false
      },
      discount: {
        type : DataTypes.FLOAT,
        allowNull : true
      },
      amount: {
        type : DataTypes.FLOAT,
        allowNull : false
      },
      product: { 
        type : DataTypes.INTEGER,
        references : { model : 'products' , primaryKey: 'id'}
      },
      order: { 
        type : DataTypes.INTEGER,
        references : { model : 'orders' , primaryKey: 'id'}
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
    await queryInterface.dropTable('order_items');
  }
};