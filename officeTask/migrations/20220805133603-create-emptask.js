'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('emp_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      task_title: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.STRING,
        allowNull : true
      },
      start_date:{
        type: DataTypes.DATE,
        allowNull : false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull : true 
      },
      employee : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      status: {
        type : DataTypes.STRING,
        defaultValue : 'Pending'
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
    await queryInterface.dropTable('emp_tasks');
  }
};