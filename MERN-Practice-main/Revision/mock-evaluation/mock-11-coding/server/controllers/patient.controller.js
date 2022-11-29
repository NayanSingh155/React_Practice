const express = require("express");

const Doctor = require("../models/doctor.model");
const Patient = require("../models/patient.model");

module.exports.getPatients = async (req, res) => {
  const _limit = 3;
  const { _page } = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit * (currPage - 1);
    try {
        const patients = await Patient.find({doctor:req.user._id}).limit(_limit).skip(skip).populate("medicines")
        return res.status(200).json(patients);
    } catch (error) {
        next(error)
    }
};
module.exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create({...req.body,doctor:req.user._id});
    const doctor = await Doctor.updateOne({_id:patient.doctor},{$push: {patients: patient._id}});
   
    return res.json(patient)
} catch (error) {
    next(error)
}
};
module.exports.getPatient = async (req, res, next)=>{
  try {
      const patient = await Patient.findOne({_id: req.params.id}).populate("medicines")
      return res.status(200).json(patient)
  } catch (error) {
     next(error)
  }
}
module.exports.updatePatient = async function (req, res) {
  try {
    const {id} = req.params
    const patient = await Patient.findByIdAndUpdate(id,req.body);
    return res.status(200).json(patient)
} catch (error) {
    next(error)
}
};
module.exports.lowToHigh=async(req,res,next)=>{
  const _limit = 3;
const { _page } = req.query;
const currPage = Number(_page) || 1;
const skip = _limit * (currPage - 1);
  try{
    
      const patient=await Patient.find().sort({age:1}).limit(_limit).skip(skip).populate("medicines")
      return res.status(200).json(patient)
  }
  catch (error) {
      next(error)
  }
}
module.exports.highToLow=async(req,res,next)=>{
  const _limit = 3;
const { _page } = req.query;
const currPage = Number(_page) || 1;
const skip = _limit * (currPage - 1);
  try{
    
      const patient=await Patient.find().sort({age:-1}).limit(_limit).skip(skip).populate("medicines")
      return res.status(200).json(patient)
  }
  catch (error) {
      next(error)
  }
}
module.exports.genderMale=async(req,res,next)=>{
  const _limit = 3;
const { _page } = req.query;
const currPage = Number(_page) || 1;
const skip = _limit * (currPage - 1);
  try{
    
      const patient=await Patient.find({gender:"Male"}).limit(_limit).skip(skip).populate("medicines")
      return res.status(200).json(patient)
  }
  catch (error) {
      next(error)
  }
}
module.exports.genderFemale=async(req,res,next)=>{
  const _limit = 3;
const { _page } = req.query;
const currPage = Number(_page) || 1;
const skip = _limit * (currPage - 1);
  try{
    
      const patient=await Patient.find({gender:"Female"}).limit(_limit).skip(skip).populate("medicines")
      return res.status(200).json(patient)
  }
  catch (error) {
      next(error)
  }
}
module.exports.deletePatient = async (req, res, next) => {
  try {
    const deleted = await Patient.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: true,
      msg: "Deleted",
    });
  } catch (error) {
    next(error);
  }
};
