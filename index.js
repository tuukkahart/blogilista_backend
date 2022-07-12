const app = require('./app')
const http = require('http')
require('dotenv').config()
const config = require('./utlis/config')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

