const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const doctorSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    patients:[{type:ObjectId,ref:"patient"}]
})
const Doctor=model("doctor",doctorSchema)
module.exports=Doctor