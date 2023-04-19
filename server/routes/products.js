const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const UserCtrl=require('../controllers/user')

router.get('/secret', UserCtrl.authMiddleware, async function (req, res) {
  return res.json({"secret":true})
})

router.get('', async function (req, res) {
  //res.json({'ok':true})
  foundProducts = await Product.find()
  return res.json(foundProducts)
})

router.get('/:productId', UserCtrl.authMiddleware,async function (req, res) {
  const productId = req.params.productId

  try {
    foundProduct = await Product.findById(productId)
    return res.json(foundProduct)
  } catch (err) {
    return res.status(422).send({ errors: [{ title: 'product error', detail: 'produnt not found' }] })
  }
})

module.exports = router
