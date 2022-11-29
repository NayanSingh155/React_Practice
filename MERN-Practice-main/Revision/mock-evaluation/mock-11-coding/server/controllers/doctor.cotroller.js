const express = require("express");
const Doctor = require("../models/doctor.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ error: "Please fill all the fields properly" });
  }

  Doctor.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(404).json({ error: "User already exists" });
    }

    bcrypt.hash(password,saltRounds).then((hashpass)=>{
      const u=new Doctor({...req.body,password:hashpass})
      u.save().then((r)=>{
          return res.json(u)
         }).catch((e)=>next(e))
   })
}).catch((e)=>next(e))
  
};
module.exports.login= async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({ error: "Please fill the details properly" });
  }
  Doctor.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: "Invalid username or password" });
    }
    bcrypt
      .compare(password, user.password)
      .then((r) => {
        if (r) {
          // return res.json("Succesfully Logged in")
          const { _id, name,  email } = user;
          const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
          return res.json({
            token,
            user: { _id, name,  email },
          });
        } else {
          return res
            .status(404)
            .json({ error: "Invalid username or password" });
        }
      })
      .catch((e) => next(e));
  });
}
