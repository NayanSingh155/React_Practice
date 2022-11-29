const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const medicineSchema=new Schema({
    name:{type:String,required:true},
    qty:{type:Number,required:true},
    patient:{type:ObjectId,ref:"patient"}
})
const Medicine=model("medicine",medicineSchema)
module.exports=Medicine