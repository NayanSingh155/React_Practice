const mongoose = require("mongoose");
const User = require("../models/user.model");
module.exports = {
  getStudents: async function (req, res, next) {
    try {
      const users = await User.find({ role: "student" });
      res.status(200).json({ users });
    } catch (err) {
      next(err);
    }
  },
  getInstructors: async function (req, res, next) {
    try {
      const users = await User.find({ role: "instructor" });
      res.status(200).json({ users });
    } catch (err) {
      next(err);
    }
  },
  getOneStudentOrInstructor: async function (req, res, next) {
    try {
      const users = await User.findById(req.params.id);
      res.status(200).json({ users });
    } catch (err) {
      next(err);
    }
  },
  deleteStudentById: async function (req, res, next) {
    try {
      const user = await User.findByIdAndDelete(req.param.id);
      res.send("Students Deleted");
    } catch (err) {
      next(err);
    }
  },
  createUser: async function (req, res, next) {
    try {
      const { firstName, lastName, age, email, password, phone } = req.body;

      let newUser = new User({
        firstName,
        lastName,
        email,
        password,
        referer,
        age,
        phone,
      });
      await newUser.save();

      const authToken = await newUser.generateToken();

      res.cookie(process.env.COOKIE_NAME, authToken, {
        httpOnly: true,
      });
    } catch (err) {
      next(err);
    }
  }
};
