const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types

const todoSchema=new Schema({
    title:{type:String,required:true},
    status:{type:Boolean,required:true},
    tag:{type:String,required:true},
    createdBy:{type:ObjectId,ref:"user"}
})
const Todo=model("todo",todoSchema)
module.exports=Todo