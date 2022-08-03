'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Exam.belongsTo(models.Student,{foreignKey:'student',as:'studinfo'})
    }

    toJSON(){
      return {...this.get(),id:undefined,student:undefined}
    }
  }
  Exam.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    marks: {
      type : DataTypes.FLOAT,
      allowNull : false
    }
  }, {
    sequelize,
    tableName : 'exams',
    modelName: 'Exam',
  });
  return Exam;
};