const express = require('express')
const path = require('path')

const app = express()

const config = require('../config')

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.json({})
})

app.get('/payload', (req, res) => {
  res.json({})
})

app.post('/payload', (req, res) => {
  res.json({})
})

app.listen(config.server.PORT, () => {
  console.log(`Simple Github Deployment Server is UP on PORT ${config.server.PORT}`)
})
