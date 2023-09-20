const express = require("express");
const dotenv = require("dotenv").config();
// const connectDB = require("./config/connectDB");
const taskRouter = require("./routes/taskRoutes")
const { default: mongoose } = require("mongoose");
const app = express();

// MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(taskRouter)

// Routes
app.get("/", (req, res) => {
  res.send(`<html>
    <body>
        <h1>Hey There hope you are doing Great</h1>
    </body>
  </html>`);
});

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
