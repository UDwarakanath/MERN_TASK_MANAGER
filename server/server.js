const express = require("express");
const dotenv = require("dotenv").config()
const connectDB = require("./config/connectDB")
const app = express();

app.get("/", (req, res) => {
  res.send(`<html>
    <body>
        <h1>Hey There hope you are doing Great</h1>
    </body>
  </html>`);
});

const startServer = async ()=>{
    try {
        await connectDB()
        const PORT = process.env.POR || 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

    } catch (error) {
        console.log("error at connection",error)
    }
}

startServer()

