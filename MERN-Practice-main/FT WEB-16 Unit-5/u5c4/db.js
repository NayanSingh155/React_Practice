const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/news");

const NewSchema = new mongoose.Schema({
Title: String,
Description: String,
Date: Date,
Author : String,
Location: String ,
tags: String,
total_views:{type:Number,default:0},
category:{type:String}
})

const New = mongoose.model("new",NewSchema);
module.exports = {New, connection};