const express = require("express");
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.post("/add-task", addTask);
router.get("/all-tasks", getAllTasks);
router.get("/get-one-task/:id", getTaskById);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

module.exports = router;
