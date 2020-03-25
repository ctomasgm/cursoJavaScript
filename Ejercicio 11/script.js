var numbers = [4, 9, 16, 25];
var ages = [32, 33, 16, 40];
var numbers1 = [175, 50, 25];

function myFuncMap() {
  x = document.getElementById("demo1")
  x.innerHTML = numbers.map(Math.sqrt);
}

function checkAdult(age) {
  return age >= 18;
}
function myFuncFilt() {
  document.getElementById("demo2").innerHTML = ages.filter(checkAdult);
}


document.getElementById("demo3").innerHTML = numbers1.reduce(myFuncRed);

function myFuncRed(total, num) {
  return total - num;
}