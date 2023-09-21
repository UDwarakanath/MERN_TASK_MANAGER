const express = require("express");
const {
  createTask,
  getAllTasks,
  getATask,
  deteteAtask,
  updateATask,
} = require("../controllers/taskControllers");
// const Task = require("../models/taskModel")
const router = express.Router();

// Create task
router.post("/api/tasks", createTask);

// Get/Read All tasks

router.get("/api/tasks", getAllTasks);

// Get/Read A tasks

router.get("/api/tasks/:id", getATask);

// Delete a Task
router.delete("/api/tasks/:id", deteteAtask);

// Update a Task
router.patch("/api/tasks/:id", updateATask);

module.exports = router;
