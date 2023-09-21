const Task = require("../models/taskModel");

// Create A Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// .... Get All Tasks ...
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();
    console.log(task);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
};
