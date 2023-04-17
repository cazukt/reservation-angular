'use strict'

const button = document.getElementById('button')

button.addEventListener('click', function () {
  //this.innerHTML='thank you!'
  this.innerHTML = 'クリック済'
  this.setAttribute('disabled', true)
})

const buttonAdd = document.getElementById('button-add')
const buttonClear = document.getElementById('button-clear')
const list = document.getElementById('list')

buttonAdd.addEventListener('click', function () {
  const element = document.createElement('li')
  element.innerHTML = 'リスト'
  list.appendChild(element)
})

buttonClear.addEventListener('click', function () {
  //list.removeChild(list.lastChild)
  while (list.lastChild) {
    list.removeChild(list.lastChild)
  }
  //list.remove();
})

const element01 = document.querySelector('.color .button-blue')
console.log('[.color .button-blue]で取得した要素', element01)

const element02 = document.querySelector('.color .button:last-of-type')
console.log('[.color .button:last-of-type]で取得した要素', element02)

const element03 = document.querySelectorAll('.button')
console.log('[.button]で取得した要素', element03)

const buttonColor = document.querySelectorAll('.color .button')
const listColor = document.getElementById('list-color')
const buttonColorClick = function () {
  let element = document.createElement('li')
  element.innerHTML = this.innerHTML
  listColor.appendChild(element)
}
for (let i = 0; i < buttonColor.length; i++) {
  buttonColor[i].addEventListener('click', buttonColorClick)
}

// const btn01 = document.getElementById('btn01')
// btn01.addEventListener('click', function () {
//   //console.log(btn01)
//   this.classList.add('clicked')
//   this.classList.toggle('clicked2')
// })

// const btn = document.getElementsByClassName('btn')
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', function () {
//     this.classList.toggle('clicked')
//   })
// }

// const btn01 = document.getElementById('btn01')
// btn01.addEventListener('click', function () {
//   console.log(this)
// })

// const btn01 = document.getElementById('btn01')
// console.log(btn01)

// const btn=document.getElementsByClassName('btn')
// console.log(btn)

// document.getElementById()
// document.getElementsByClassName()

// const myBlog={
//   title:'java500',
//   author:'cazukt',
//   addPost:()=>{
//     console.log('記事を投稿したよ')
//   },
//   deletePst:()=>{
//     console.log('記事を削除したよ')
//   },
// }
// console.table(myBlog)
// console.log(typeof myBlog)
// console.table(myBlog.title)
// myBlog.addPost()
//window.alert('a')

// const myfunc = (a, b) => a + b

// console.log(myfunc(1, 2))

// const myfunc=function(a = 99, b = 99) {
//   console.log(a,b)
//   return a + b
// }
// console.log(myfunc(1, 2))

// function myCalc(a = 99, b = 99) {
//   console.log(a,b)
//   return a + b
// }
// console.log(myCalc(1, 2))
// console.log(myCalc())

// function myAlert(greeting='mitei'){
//   console.log(greeting)
// }
// myAlert('hello')

// function myAlert(greeting='mitei'){
//   console.log(greeting)
// }
// myAlert()

// let arr=['うめ','つな','明太'];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }
// let x=0;
// while (x < arr.length) {
//   console.log(arr[x])
//   x++
// }

// let y = 0
// while (y < 5) {
//   y++
//   console.log(y)
// }

// for(let i=1;i<=5;i++){
//   console.log(i)
// }

// let x = 4
// if (x>3){
//   console.table('xは3より大きいです')
// }else if(x===3){
//   console.table('xは3です')
// }else{
//   console.table('xは3より小さいです')
// }

// let x = 0
// if (x){
//   console.table('この式は正しいです')
// }else{
//   console.table('この式は間違いです')
// }

// const num = 1
// console.log(num);
// console.log(typeof num);
// const str = num.toString()
// console.log(str);
// console.log(typeof str);

// console.log(str);

// let x = 2
// if (x>3){
//   console.table('xは3より大きいです')
// }else{
//   console.table('xは3より小さいです')
// }

// let name = 'java test'
// name = 'test'
// console.log('どうも'+name+'です')
// console.log('どうも'+'name'+'です')

// const namea='java test'
// namea='java test'

// console.log(10, typeof 10)
// console.log('20', typeof '20')
// console.log(false, typeof false)
// console.log(true, typeof true)
// console.log({ color: '赤', size: 'M' })
// console.log(typeof { color: '赤', size: 'M' })
// console.table({ color: '赤', size: 'M' })
// console.table(typeof { color: '赤', size: 'M' })

// console.log(typeof { color: '赤', size: 'M' })
// console.log({ color: '赤', size: 'M' })
// console.table({ color: '赤', size: 'M' })

// console.log(typeof ['赤','青','黄'])
// console.log(['赤','青','黄'])
// console.table(['赤','青','黄'])
