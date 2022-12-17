const express = require("express");
const {
  addTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", addTask);

router.get("/tasks", getTasks);

router.get("/task/:id", getTask);

router.patch("/task/:id", updateTask);

router.delete("/task/:id", deleteTask);

module.exports = {
  routes: router,
};
