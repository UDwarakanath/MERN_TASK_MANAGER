const express = require("express")
const { createTask, getAllTasks } = require("../controllers/taskControllers")
// const Task = require("../models/taskModel")
const router = express.Router()


  // Create task
  router.post("/api/tasks",createTask)
  
  // Get/Read All tasks
  
  router.get("/api/tasks",getAllTasks)

  
module.exports = router