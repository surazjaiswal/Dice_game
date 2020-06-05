
// function randomNum() {
//   var num = Math.floor(Math.random()*6+1);
//   var imgNum = "dice" + num +".png";
//   var imgscr = "res/images/"+imgNum;
//   return imgscr;
// }
//
//
// document.querySelectorAll("img")[0].setAttribute("src",randomNum());
// document.querySelectorAll("img")[1].setAttribute("src",randomNum());

var num = Math.floor(Math.random()*6+1);
var imgNum = "dice" + num +".png";
var imgscr = "res/images/"+imgNum;
document.querySelectorAll("img")[0].setAttribute("src",imgscr);

num2 = Math.floor(Math.random()*6+1);
imgNum2 = "dice" + num2 +".png";
imgscr2 = "res/images/"+imgNum2;
document.querySelectorAll("img")[1].setAttribute("src",imgscr2);

if(num>num2){
  document.querySelector("h1").innerHTML="🎉Player 1 Wins🎉";
}
else if (num2>num) {
  document.querySelector("h1").innerHTML="🎉Player 2 Wins🎉";
}
else if (num=num2) {
  document.querySelector("h1").innerHTML="‍🎲 Draw 🎲";
}
