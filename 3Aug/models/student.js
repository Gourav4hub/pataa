'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Exam,{foreignKey:'student',as:'exams'})
    }

    toJSON(){
      return {...this.get(),id:undefined}
    }

  }
  Student.init({
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
    }
  }, {
    sequelize,
    tableName: "students",
    modelName: 'Student',
  });
  return Student;
};