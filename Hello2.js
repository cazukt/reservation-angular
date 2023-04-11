// // 関数定義する
// function add(a, b) {
//   return a + b;
// }

// // 使う
// console.log(add(1, 2)); // 3が表示される

// // 関数を変数に割り当てる
// const addFunc = function(a, b) {
//   return a + b;
// }

// // 使う
// console.log(addFunc(1, 2)); // 3が表示される

// // 自分で定義する関数
// function add(a, b) {
//   return a + b;
// }

// // 定義した関数を変数に入れる
// const addFunc2 = add; // カッコはつけない！

// // JavaScriptに標準でついてる関数でもできる
// const myMax = Math.max; // max関数をmyMaxという変数に入れる

// // 呼び出してみる
// console.log(add(1, 2), addFunc2(1, 2)); // どっちも3になる
// console.log(Math.max(1, 2), myMax(1, 2)); // どっちも2

// // 関数を2回実行する関数！！
// function doTwice(funca) {
//   funca(); // 1回目！
//   funca(); // 2回目！
// }

// // あいさつするだけの関数
// function hello() {
//   console.log('Hello!');
// }

// // あいさつを2回実行する
// doTwice(hello);

// // 関数を2回実行する関数！！
// function doTwice(func) {
//   func(); // 1回目！
//   func(); // 2回目！
// }

// // あいさつを2回実行する
// doTwice(function() {
//   console.log('Hello!');
// });

// 関数に値を渡しつつ2回実行する関数！！
function doTwiceWithValue(func) {
  func('Hello!'); // 1回目！
  func('I am here!!!'); // 2回目！
}

// 受け取ったmessageを表示するだけの関数を渡す
doTwiceWithValue(function(message) {
  console.log(message);
});
