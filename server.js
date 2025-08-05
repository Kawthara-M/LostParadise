// imports
<<<<<<< HEAD
const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require("cors")
=======
const express = require("express")
require("dotenv").config()
const path = require("path")
const cors = require("cors")

>>>>>>> 0fd275f013d209860aef26736013510ae7e4ce50
// Initialize app
const app = express()

// Database Configuration
<<<<<<< HEAD
const mongoose = require('./config/db')
=======
const mongoose = require("./config/db")
>>>>>>> 0fd275f013d209860aef26736013510ae7e4ce50

// set Port Configuration
const port = 3001

// Require MiddleWares
const methodOverride = require("method-override")
const morgan = require("morgan")

// Require passUserToView & isSignedIn middlewares

// use MiddleWares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

// Require Routers

// Root Route
app.get("/", (req, res) => {
  res.send("Your app is connected . . . ")
})

// Require Routers
const gamesRouter = require("./routes/games")

// use Routers
app.use("/games", gamesRouter)

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
