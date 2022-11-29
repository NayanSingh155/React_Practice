const { createTodo, getTodos, updateTodo, deleteTodo, markTodo } = require("../controllers/todo.controller");
const router = require("express").Router();
router.post("/create", createTodo);
router.get("/", getTodos);
router.put("/update/:id",updateTodo)
router.delete("/delete/:id",deleteTodo)
router.put("/mark/:id",markTodo)
module.exports = router;