const mongoose=require('mongoose');

var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Address:String
})
var EmployeeModel=mongoose.model("student",schema)
module.exports=EmployeeModel