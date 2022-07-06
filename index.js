const app = require('./app')
const mongoose = require('mongoose')
const http = require('http')
require('dotenv').config()


const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)

const server = http.createServer(app)


const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})