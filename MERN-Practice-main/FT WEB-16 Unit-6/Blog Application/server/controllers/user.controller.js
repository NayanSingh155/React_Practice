const express = require('express');
const User =require('../models/user.model');
const bcrypt=require("bcrypt")
const userRouter =express.Router();
userRouter.get("/:id",async function(req, res,next){
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        next(err);
    }
})
userRouter.get("/",async(req,res,next)=>{
    try {
        const users = await User.find().populate("blogs");
        res.send(users);
    } catch (error) {
        next(error)
    }
})
userRouter.post("/login",async function(req, res,next){
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({status:false,msg:"User not found"})
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword) return res.status(404).json({status:false,msg:"Wrong email or password"})
        const token = user.getJWTToken();
        return res.status(200).cookie("token",token,{httpOnly:true,secure:false}).json({
            status:true,
            user,
            token
        })
    } catch (error) {
        next(error.message)
    }
})


userRouter.post("/signup",async function(req, res){
    try {
        const {name,email,password} = req.body;
        const userCheck = await User.findOne({name});
        if(userCheck){
            return res.status(404).json({status: false, msg: "User already used"})
        }
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.status(404).json({status:false,msg:"Email already used"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        
        res.status(200).json({
            status:true,
            user
        })
    } catch (error) {
        next(error)
    }
})
module.exports = userRouter