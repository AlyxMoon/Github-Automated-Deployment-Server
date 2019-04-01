const crypto = require('crypto')

const verifyPayload = (payloadBody, payloadSignature) => {
  const signature = 'sha1=' + crypto.createHmac('sha1', process.env.SECRET_TOKEN).update(payloadBody).digest('hex')
  return crypto.timingSafeEqual(new Buffer(signature), new Buffer(payloadSignature))
}

module.exports = verifyPayload
