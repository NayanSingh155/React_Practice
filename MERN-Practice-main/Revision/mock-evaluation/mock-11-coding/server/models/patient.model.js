const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const patientSchema=new Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    medicines:[{type:ObjectId,ref:"medicine"}],
    doctor:{type:ObjectId,ref:"doctor"}
})
const Patient=model("patient",patientSchema)
module.exports=Patient