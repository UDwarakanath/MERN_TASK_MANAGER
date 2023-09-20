const express = require("express");
const dotenv = require("dotenv").config();
// const connectDB = require("./config/connectDB");
const { default: mongoose } = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send(`<html>
    <body>
        <h1>Hey There hope you are doing Great</h1>
    </body>
  </html>`);
});

app.post("/api/tasks",async (req,res)=>{
  console.log(req.body,"this is the body")
  res.send("Task Created successfully")
})

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
