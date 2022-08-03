'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      roll: {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
      },
      name: {
        type : DataTypes.STRING,
        allowNull : false
      },
      age: DataTypes.INTEGER,
      email: {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
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
    await queryInterface.dropTable('students');
  }
};