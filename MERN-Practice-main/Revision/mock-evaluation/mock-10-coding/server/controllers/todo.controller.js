const express = require("express");
const Todo = require("../models/todo.model");
const User = require("../models/user.model");
const router = express.Router();

module.exports.getTodos = async (req, res) => {
  Todo.find({ createdBy: req.user._id })
    .then((r) => {
      res.json(r);
    })
    .catch((e) => console.log(e));
};
module.exports.createTodo = async (req, res) => {
  const { title, status, tag } = req.body;

  const todo = await Todo.create({ ...req.body, createdBy: req.user });
  const updatedUser = await User.updateOne(
    { _id: req.user._id },
    { $push: { todos: todo._id } }
  );
  return res.json(todo);
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
module.exports.markTodo = async function (req, res) {
  try {
    const todoId = req.params.id;

    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
      status: true,
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
