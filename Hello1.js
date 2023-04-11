// 関数定義する
function add(a, b) {
  return a + b;
}

// 使う
console.log(add(1, 2)); // 3が表示される

// 関数を変数に割り当てる
const addFunc = function(a, b) {
  return a + b;
}

// 使う
console.log(addFunc(1, 2)); // 3が表示される

// 自分で定義する関数
function add(a, b) {
  return a + b;
}

// 定義した関数を変数に入れる
const addFunc2 = add; // カッコはつけない！

// JavaScriptに標準でついてる関数でもできる
const myMax = Math.max; // max関数をmyMaxという変数に入れる

// 呼び出してみる
console.log(add(1, 2), addFunc2(1, 2)); // どっちも3になる
console.log(Math.max(1, 2), myMax(1, 2)); // どっちも2

// 関数を2回実行する関数！！
function doTwice(funca) {
  funca(); // 1回目！
  funca(); // 2回目！
}

// あいさつするだけの関数
function hello() {
  console.log('Hello!');
}

// あいさつを2回実行する
doTwice(hello);
// function testFunc(callback) {
 
//   setTimeout(function() {
//     console.log('testFuncが実行されました');
//     callback();
//   }, 5000)
 
// }

// function myCallback() {
 
//   console.log('myCallbackが実行されました');

// }

// //testFunc(myCallback);

// testFunc(function() {
 
//   console.log('即時関数が実行されました');

// })

// console.log('Hello')
// function hello(numb){
//   let num = 100*numb
//   console.log(num)
// }
// hello();
// hello(5);

// // let i=i++;
// // console.log(i)

