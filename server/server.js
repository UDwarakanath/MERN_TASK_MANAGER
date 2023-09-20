const express = require("express");
const dotenv = require("dotenv").config();
// const connectDB = require("./config/connectDB");
const { default: mongoose } = require("mongoose");
const Task = require("./model/taskModel");
const app = express();

// MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Routes
app.get("/", (req, res) => {
  res.send(`<html>
    <body>
        <h1>Hey There hope you are doing Great</h1>
    </body>
  </html>`);
});

  // Create task
app.post("/api/tasks",async (req,res)=>{
  try {
    const task = await Task.create(req.body)
    console.log(task)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
})

// Get/Read All tasks

app.get("/api/tasks",async (req,res)=>{
  try {
    const task = await Task.find()
    console.log(task)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
})

// connetion to DataBase
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.POR || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error}`);
  });
