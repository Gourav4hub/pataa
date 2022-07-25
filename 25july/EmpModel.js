const mongoose = require('mongoose')
var empSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 6,
        maxLength : 12
    },
    age : {
        type : Number,
        min  : 18,
        max : 75
    },
    email : {
        type : String,
        unique : true,
        lowercase : true
    },
    salary : Number,
    city : {
        type : String,
        required : true
    }
}) 
var empModel = mongoose.model("employee",empSchema) 

module.exports = empModel