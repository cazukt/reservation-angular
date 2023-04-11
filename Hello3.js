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
