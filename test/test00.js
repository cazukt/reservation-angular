console.log('hello test00')
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

// 自分で定義する関数
function add(a, b) {
  return a + b;
}

// 定義した関数を変数に入れる
//const addFunc2 = add; // カッコはつけない！

console.log(addFunc2(2,3))

//addFunc2(1,2)

// // JavaScriptに標準でついてる関数でもできる
// const myMax = Math.max; // max関数をmyMaxという変数に入れる

// // 呼び出してみる
 console.log(add(1, 2), addFunc2(1, 2)); // どっちも3になる
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
function doTwiceWithValue(funca) {
  funca('Hello!'); // 1回目！
  funca('I am here!!!'); // 2回目！
}

// // 受け取ったmessageを表示するだけの関数を渡す
// doTwiceWithValue(function(message) {
//   console.log(message);
// });

// // 受け取ったmessageを表示するだけの関数を渡す
// doTwiceWithValue(messagea=>
//   console.log(messagea)
// );

// // 関数に値を渡しつつ2回実行する関数！！
// function doTwiceWithValue(funca) {
//   funca('Hello!'); // 1回目！
//   funca('I am here!!!'); // 2回目！
// }

console.log('a')

//コールバック関数
//「関数を受け取る関数」を「高階関数」と呼び,「高階関数に渡すための関数」をコールバック関数と呼ぶ。
//自分で直接実行するのではなく、相手に実行してもらうのがコールバック関数です。
//setTimeoutは、受け取ったコールバック関数を指定ミリ秒後に実行します。
//function 高階関数(コールバック関数){
//  コールバック関数();
//}

// setTimeout(function() {
//   console.log('Hello!');
// }, 5000);

// function disp() {
//   console.log('Hello!');
// }
// setTimeout(disp,3000);

// function aa(){
//   fn(sayName);
// }
//setTimeout(aa,3000);

// 下記のコードを実行すると、コンソールにHello Worldが表示されます。
// fn(say)で関数fnが実行され、引数にsayが渡される
// 関数fnが実行され、引数に渡されたcallback(say)を呼び出す
// say関数が実行され、コンソールにHello Worldが出力される
function say() {
  console.log("Hello World");
}
function fn(callback) {
  callback();
}
fn(say);

//コールバック関数で呼び出される関数に引数を渡す
function sayName(name) { // -> 引数nameに実引数のJohnが渡る
  console.log(`Hello ${name}`);
}
function fn(callbk) {
  callbk("John"); // -> 実引数にJohnを設定
}
fn(sayName);

//コールバック関数が使われる場面
// function delayFn() {
//   console.log("3秒後に実行されます");
// }
// setTimeout(delayFn, 3000); // -> 3秒後にdelayFn関数を実行させる

//0
// setTimeout(function delayFn() {
//   console.log("3秒後に実行されます");
// }
// , 3000); // -> 3秒後にdelayFn関数を実行させる

//1
// setTimeout(function () {
//   console.log("3秒後に実行されます");
// }
// , 3000); // -> 3秒後にdelayFn関数を実行させる

//2
// setTimeout(()=>{
//   console.log("3秒後に実行されます");
// }
// , 3000); // -> 3秒後にdelayFn関数を実行させる

//3
//setTimeout(()=>console.log("3秒後に実行されます")
//, 3000); // -> 3秒後にdelayFn関数を実行させる

//通常の関数リテラル:ソースコードに直接べた書きされた関数

//宣言した時点では名前を持たないことから　匿名関数　無名関数　と呼ばれる
let getTriangle1 = function(base,height){
  return base * height / 2;
 };
 console.log('三角形の面積は' + getTriangle1(10,2));//三角形の面積は10
//アロー関数とは　その名の通り、=>(矢)を使って関数リテラルを記述する　(引数,...)=>{...関数の本体...}
let getTriangle2 = (base, height) => {
  return base * height / 2;
};
console.log('三角形の面積は' + getTriangle2(10,2));//三角形の面積は10

// よりシンプルにアロー関数を記述する
// 1,本体が一文である場合、ブロックを表す{...}を省略でき、return命令も省略可
let getTriangle = (base, height) => base * height / 2;
console.log(getTriangle(10,2));//10

// 2,引数がひとつの場合、引数をくくるカッコも省略できます。
let getCircle = radius => radius * radius * Math.PI;
console.log(getCircle(10))//314.1592653589793;

// 3,引数がない場合はカッコを省略せずに記述します。
let show =()=> console.log('Hello, world!'); 
show(); //Hello, world!

