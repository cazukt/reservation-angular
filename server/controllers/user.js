const jwt = require('jsonwebtoken')
const User = require('../model/user')
const config = require('../config/index')

function notAuthorized(res) {
  return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'You need to login!' }] })
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return notAuthorized(res)
  }

  jwt.verify(token.split(' ')[2], config.SECRET, async function (err, decodedToken) {
    if (err) {
      return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'Invalid token1!' }] })
    }

    try {
      foundUser = await User.findById(decodedToken.userId)
      //return res.json(foundProduct)
    } catch (err) {
      return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'Invalid token2!' }] })
    }
    if (!foundUser) {
      return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'Invalid token3!' }] })
    }
    next()
  })
}
