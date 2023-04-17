//console.log('test01')

// function plus(callfunc,msg,val1,val2,val3) {
//   console.log(val1+msg+val2+msg+val3)
//   callfunc(val1,val2,val3)
// }

// plus(()=>{console.log('start')},'test',1,2,3,45)

// plus(
//   function (val1,val2) {
//     console.log(val1+val2)
//   }
//   ,'plus',5,3
// )

// plus(
//   (val1,val2,val3)=>console.log(val1-val2-val3),'minus',6,3,1
// )
// a=1
// b=2
// fun = (val1,val2)=>{
//   return val1+val2
// }
// const max1 = fun(1, 2); // これはカッコがついてるので関数の計算結果が入る
// const max2 = fun; // これはカッコがないので関数自体が入る
// const max3 = fun(); // これはカッコがないので関数自体が入る
// const max4 = fun(a, b); // これはカッコがついてるので関数の計算結果が入る

// console.log(max1);
// console.log(max2);
// console.log(max3);
// console.log(max4);

// // 関数を2回実行する関数！！
// function doTwice(func) {
//   func(); // 1回目！
//   func(); // 2回目！
// }

// // あいさつするだけの関数
// function hello() {
//   console.log('Hello!');
// }

// // あいさつを2回実行する
// doTwice(hello);

// 関数を2回実行する関数！！
function doTwice(func) {
  console.log('Hello!') // 1回目！
  console.log('Hello!') // 2回目！
}

// あいさつするだけの関数
function hello() {
  console.log('Hello!')
}

// あいさつを2回実行する
doTwice(hello)

const name = 'James'

const person = { first: name }

console.log(person)

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`)
}

sayHelloLinting('James')

var myVar = "I'm fine."
console.log(myVar)

var myJson = "{\"name\": \"Taro\", \"age\": 18}";
var myObj = JSON.parse(myJson);


