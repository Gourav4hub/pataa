'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('product_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      comment: {
        type: DataTypes.STRING,
        allowNull : false
      },
      product: { 
        type : DataTypes.INTEGER,
        references : { model : 'products' , primaryKey: 'id'}
      },
      customer: { 
        type : DataTypes.INTEGER,
        allowNull  : true,
        references : { model : 'customers' , primaryKey: 'id'}
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
    await queryInterface.dropTable('product_comments');
  }
};