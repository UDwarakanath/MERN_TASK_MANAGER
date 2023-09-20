const express = require("express")
const Task = require("../model/taskModel")
const router = express.Router()


  // Create task
  router.post("/api/tasks",async (req,res)=>{
    try {
      const task = await Task.create(req.body)
      console.log(task)
      res.status(200).json(task)
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
  })
  
  // Get/Read All tasks
  
  router.get("/api/tasks",async (req,res)=>{
    try {
      const task = await Task.find()
      console.log(task)
      res.status(200).json(task)
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
  })

  
module.exports = router