const express = require('express');
const categoryRouter =express.Router();
const Blog = require("../models/blog.model");

const Category = require("../models/category.model")
categoryRouter.get("/",async function(req, res,next){
    try {
        const all = await Category.find();
        res.status(200).json(all);
    } catch (error) {
        next(error)
    }
})


categoryRouter.post("/",async function(req, res,next){
    try{
const categories =await Category.create(req.body);
return res.status(201).send(categories);
    }catch(err){
        return res.status(404).send({err});
    }
})
categoryRouter.post("/",async(req,res,next)=>{
    try {
        const categories = req.body.category;
        for(key in categories){
            if(categories[key]){
                const category = await Category.findOne({name:key});
                const updatedUser = await Blog.updateOne({_id:req.body.blog},{$push:{ category: category._id}});
            }
        }
        return res.status(200).json({status:true,msg:"Categories has been added successfully"});
    } catch (error) {
        next(error)
    } 
})
module.exports = categoryRouter