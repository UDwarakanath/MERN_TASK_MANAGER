const express = require("express")

const app = express()

const PORT = process.env.POR || 5000

app.listen(PORT)