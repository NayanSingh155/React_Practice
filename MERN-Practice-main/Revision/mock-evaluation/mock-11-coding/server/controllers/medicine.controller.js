const express = require("express");
const Patient = require("../models/patient.model");
const Doctor = require("../models/doctor.model");
const Medicine=require("../models/medicine.mode")

module.exports.createMed = async (req, res,next) => {
    try {
        const medicine = await Medicine.create(req.body);
        const patient = await Patient.updateOne(
          { _id: req.body.patient },
          { $push: { medicines: medicine._id } }
        );
        return res.status(200).json(medicine);
      } catch (error) {
        next(error);
      }
};
module.exports.updateTodo = async function (req, res) {
  try {
    const todoId = req.params.id;
    const { title, status, tag } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
      title: title,
      status: status,
      tag: tag,
    });
    return res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    return res.status(200).json({
      status: true,
      msg: "Deleted",
    });
  } catch (error) {
    next(error);
  }
};
