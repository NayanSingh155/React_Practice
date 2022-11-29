const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    todos:[{type:ObjectId,ref:"todo"}],
    profile_photo:{type:String,default:"https://www.bing.com/th?id=OIP.PNGQVIsPFaM41E60Zd0EdgHaHx&w=244&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"}
})
const User=model("user",userSchema)
module.exports=User