const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')

const app = express()

const server = app.listen(1377, () => {
  console.log('Listening on port 1337')
})
module.exports = server
