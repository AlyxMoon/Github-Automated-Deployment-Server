const crypto = require('crypto')

const verifyPayload = (payloadBody, payloadSignature) => {
  const signature = 'sha1=' + crypto.createHmac('sha1', process.env.SECRET_TOKEN).update(payloadBody).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(payloadSignature))
}

module.exports = verifyPayload
