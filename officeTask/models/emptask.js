'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emptask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Emptask.belongsTo(models.Employee,{foreignKey:'employee',as:'emp'})
    }
    toJSON(){
      return {...this.get(),id:undefined,employee:undefined}
    }
  }
  Emptask.init({
    task_title: {
      type: DataTypes.STRING,
      allowNull : false ,
      validate :{
        notNull : {msg : "Task Title Not Found !"},
        notEmpty : {msg : "Task Title Can Not Be Blank !"}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull : true ,
      validate :{       
        notEmpty : {msg : "Task Description Can Not Be Blank !"}
      }
    },
    start_date:{
      type: DataTypes.DATE,
      allowNull : false ,
      validate :{
        notNull : {msg : "Task Start Date Not Found !"},
        notEmpty : {msg : "Task Start Date Can Not Be Blank !"}
      }
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull : true ,
      validate :{       
        notEmpty : {msg : "Task End Date Can Not Be Blank !"}
      }
    },
    status: {
      type : DataTypes.STRING,
      defaultValue : 'Pending'
    }
  }, {
    sequelize,
    tableName: 'emp_tasks',
    modelName: 'Emptask',
  });
  return Emptask;
};