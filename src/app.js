const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const config = require('../config')
const { createOrUpdateRepository } = require('./lib')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.json())

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

  if (req.body && req.body.repository) {
    res.json({ success: true })

    createOrUpdateRepository(req.body.repository)
  } else {
    res.status(500).json({ success: false, error: 'The correct json data was missing?', data: req.body })
  }
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
