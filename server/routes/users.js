const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require('../config/index')

router.post('/login', async function (req, res) {
  const { email, password } = req.body

  if (!email) {
    return res.status(422).send({ errors: [{ title: 'email error', detail: 'please fill email' }] })
  }
  if (!password) {
    return res.status(422).send({ errors: [{ title: 'password error', detail: 'please fill password' }] })
  }

  foundUser = await User.findOne({ email })
  if (!foundUser) {
    return res.status(422).send({ errors: [{ title: 'user error', detail: 'user is not exits!' }] })
  }

  if (!foundUser.hasSamePassword(password)) {
    return res.status(422).send({ errors: [{ title: 'user error', detail: 'Incorrect password' }] })
  }

  //const token = 'I am JWT token'
  //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  const token = jwt.sign(
    {
      userId: foundUser.id,
      username: foundUser.username,
    },
    //'dfadsfasdgdsa',
    config.SECRET,
    { expiresIn: '1h' }
  )

  return res.json(token)
})

router.post('/register', async function (req, res) {
  // const username = req.body.username
  // const email = req.body.email
  // const password = req.body.password
  // const confirmPassword = req.body.confirmPassword
  const { username, email, password, confirmPassword } = req.body

  if (!username) {
    return res.status(422).send({
      errors: [{ title: 'user error', detail: 'please fill username' }],
    })
  }
  if (!email) {
    return res.status(422).send({ errors: [{ title: 'email error', detail: 'please fill email' }] })
  }
  if (!password) {
    return res.status(422).send({ errors: [{ title: 'password error', detail: 'please fill password' }] })
  }
  if (password !== confirmPassword) {
    return res.status(422).send({ errors: [{ title: 'user error', detail: 'please check password' }] })
  }

  foundUser = await User.findOne({ email })
  if (foundUser) {
    return res.status(422).send({ errors: [{ title: 'user error', detail: 'user already exist' }] })
  }

  try {
    const user = new User({ username, email, password })
    user.save()
  } catch (err) {
    return res.status(422).send({ errors: [{ title: 'user error', detail: 'Something wend wrong' }] })
  }

  return res.json({ registerd: true })

  // const productId=req.params.productId
  // try {
  //   foundProduct=await Product.findById(productId)
  //   res.json(foundProduct)
  // } catch (err) {
  //   res.status(422).send({errors:[{title:'product error',detail:'produnt not found'}]})
  // }

  // const productId=req.params.productId
  // try {
  //   foundProduct=await Product.findById(productId)
  //   res.json(foundProduct)
  // } catch (err) {
  //   res.status(422).send({errors:[{title:'product error',detail:'produnt not found'}]})
  // }
})

module.exports = router
