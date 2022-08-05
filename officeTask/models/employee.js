'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasMany(models.Emptask,{foreignKey:'employee',as:'tasks'})
      //Employee.hasMany(models.Emptask,{foreignKey:'employee',as:'address'})
    }
    // toJSON(){
    //   return {...this.get(),id:undefined}
    // }
  }
  Employee.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : { msg : "Name Not Found !" },
        notEmpty : { msg : "Name Can Not Be Blank !" }
      }
    },
    email:{
      type : DataTypes.STRING,
      allowNull: false,
      unique : true,
      validate:{
        isEmail : { msg : "Email Format is not correct !" },
        notNull : { msg : "Email Not Found !" },
        notEmpty : { msg : "Name Can Not Be Blank !" }
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : true,
      unique : true,
      validate:{
        min : {
          args : 10,
          msg : "Phone Number is not valid !"
        },
        notEmpty : { msg : "Phone Can Not Be Blank !" }
      }
    },
    salary: {
      type  : DataTypes.FLOAT,
      allowNull  : false,
      validate : {
        isNumeric : { msg : "Salary always be a Number !"},
        notNull : { msg : "Salary Not Found !"},
        notEmpty : { msg : "Salary Can Not Be Blank !" }
      }
    }
  }, {
    sequelize,
    tableName : 'employees',
    modelName: 'Employee',
  });
  return Employee;
};