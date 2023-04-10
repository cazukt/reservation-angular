const express=require('express')
const mongoose = require("mongoose")
const config =require('./config/dev')
const FakeDB=require('./fake-db')

//mongoose.connect("mongodb+srv://cazukt:taka0610mongo@cluster0.xoezhha.mongodb.net/blogUserDatabase?retryWrites=true&w=majority",{
mongoose.connect(config.DB_URI,{
  // useNewUrlParser:true,
  // useUnifiedTopplogy:true
}).then(
  ()=>{
    const fakeDb=new FakeDB()
    fakeDb.seeDb()
  }
)

const app=express()

app.get('/products',function(req,res){
  res.json({'suceess':true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
  console.log('I am running!')
})
