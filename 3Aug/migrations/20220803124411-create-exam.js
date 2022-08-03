'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type : DataTypes.STRING,
        allowNull : false
      },
      marks: {
        type : DataTypes.FLOAT,
        allowNull : false
      },
      student : {
        type : DataTypes.INTEGER,
        allowNull : false
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
    await queryInterface.dropTable('exams');
  }
};