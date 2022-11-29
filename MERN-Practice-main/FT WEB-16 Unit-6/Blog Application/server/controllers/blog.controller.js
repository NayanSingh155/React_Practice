const express = require("express");
const Blog = require("../models/blog.model");
const Category = require("../models/category.model");
const User=require("../models/user.model")
const blogRouter = express.Router();
blogRouter.get("/", async (req, res,next) => {
  try {
    const blogs = await Blog.find()
      .populate("category")
      .populate("user")
      .populate("likes")
      .populate("comments");
    return res.send(blogs);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});
blogRouter.get("/:id", async function (req, res,next) {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("category")
      .populate("user")
      .populate("likes")
      .populate("comments");
    return res.send(blog);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});
blogRouter.post("/", async function (req, res,next) {
  try {
    const blog = await Blog.create(req.body);
    const updatedUser = await User.updateOne({_id:blog.user},{$push: {blogs: blog._id}});
   
    return res.status(201).json({
        status: true,
        msg: "Blog created successfully",
        blog
    })
} catch (error) {
    next(error)
}
});
blogRouter.put("/:id/deleted", async function (req, res) {
  const { id } = req.params;
  const blog = { deleted: true };
  await Blog.findByIdAndUpdate({ _id: id }, blog);
  res.json(blog);
});
blogRouter.put("/:id/restore", async function (req, res) {
  const { id } = req.params;
  const blog = { deleted: false };
  await Blog.findByIdAndUpdate({ _id: id }, blog);
  res.json(blog);
});
blogRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const blog = { title, body, updatedAt: Date.now() };
  await Blog.findByIdAndUpdate({ _id: id }, blog);
  res.json(blog);
});
blogRouter.get("/category/:cat", async (req, res,next) => {
  try {
    const catId = await Category.find({ name: req.params.cat });
    const blogs = await Blog.find({ category: catId[0]._id })
      .populate("category")
      .populate("likes")
      .populate("comments");
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});
module.exports = blogRouter;
