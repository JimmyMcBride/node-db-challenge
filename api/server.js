// Set up express 🚀
const express = require('express')

// Enable .env 💬
require('dotenv').config()

// Set up routes and middeware 🏇
const projectsRouter =require('./routers/projectsRouter')
const helmet = require('helmet')
const morgan = require('morgan')

// Set up dotenv messages 💬
const welcomeMessage = process.env.WM
const instructions = process.env.IN

// Enable express on server 🚀
const server = express()

// Enable routes and middleware 🐎
server.use(morgan('dev'))
server.use(logger)
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use(helmet())

// Enable MOTD 💬
server.get("/", (req, res) => {
  res.send(`<h2>${welcomeMessage}</h2> <h4>${instructions}</h4>`)
})

/* 🔥 Custom middleware 🔥 */
function logger(req, res, next) {
  console.log(`${req.method} request received`)
  next()
}

// Export server 🚀
module.exports = server