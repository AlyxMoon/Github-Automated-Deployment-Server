const express = require('express')
const path = require('path')

const app = express()

const config = require('../config')

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/payload', (req, res) => {
  if (config.server.DEBUG) {
    console.debug('DEBUG: Recieved a request on GET /payload')
  }

  res.sendFile(path.join(__dirname, 'pages/payload.html'))
})

app.post('/payload', (req, res) => {
  if (config.server.DEBUG) {
    console.debug('DEBUG: Recieved a request on POST /payload')
  }

  res.json({})
})

app.all('*', (req, res) => {
  if (config.server.DEBUG) {
    console.debug(`DEBUG: Recieved a request on ${req.method} ${req.path}`)
  }

  res.sendFile(path.join(__dirname, 'pages/index.html'))
})

app.listen(config.server.PORT, () => {
  console.log(`Simple Github Deployment Server is UP on PORT ${config.server.PORT}`)
})
