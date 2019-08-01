require('dotenv').config()
if (!process.env.SECRET_TOKEN) {
  console.error('ERROR: The secret token was not set in the .env file, will not be able to process any webhook submissions.')
}

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const config = require('../config')
const {
  createOrUpdateRepository,
  verifyPayload
} = require('./lib')

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
    if (verifyPayload(JSON.stringify(req.body), req.get('X-Hub-Signature'))) {


      if (req.body.ref === 'refs/heads/master') {
        res.json({ success: true, message: 'Recieved payload for update on master branch. Updating code on the server' })

        createOrUpdateRepository(req.body.repository)
      } else {
        res.json({ success: true, message: 'Recieved payload, but no changes were made as commit was not made on master' })
      }
    } else {
      res.status(500).json({ success: false, error: 'Hash signatures did not match!' })
    }
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
