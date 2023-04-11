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
