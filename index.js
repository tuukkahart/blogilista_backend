const app = require('./app')
const mongoose = require('mongoose')
const http = require('http')


const mongoUrl = 'mongodb+srv://fullstack:UYkzigx6o9LufkXP@cluster0.slqqj.mongodb.net/blogiLista?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)

const server = http.createServer(app)


const PORT = 3003
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})