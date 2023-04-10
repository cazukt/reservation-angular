const express=require('express')
const router=express.Router()
const Product=require('../model/product')

router.get('',async function(req,res){
  //res.json({'ok':true})
  foundProducts=await Product.find()
  res.json(foundProducts)
})

module.exports=router
