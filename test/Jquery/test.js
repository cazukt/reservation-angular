// test.js
console.log('JavaScriptファイルを用意')
//alert('test')
function fnc() {
  console.log('JavaScriptファイルを用意')
}
fnc()

document.getElementById("li3").textContent="ボタン3がクリックされました";

document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("li1").textContent="ボタン1がクリックされました";
  document.getElementById("li3").textContent="ボタン1がクリックされました";
});      
document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("li2").textContent="ボタン2がクリックされました";
  document.getElementById("li3").textContent="ボタン2がクリックされました";
});
document.getElementById("button3").addEventListener("click", function(){
  document.getElementById("li1").textContent="ボタン3がクリックされました";
  document.getElementById("li2").textContent="ボタン3がクリックされました";
  document.getElementById("li3").textContent="ボタン3がクリックされました";
  document.getElementsByClassName("")
});


