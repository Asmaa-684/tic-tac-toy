window.onload = function(){
  if(!window.location.hash){
    window.location = window.location +'#loaded';
    window.location.reload();
  }
}
var Xscore = window.localStorage.getItem("PlayerOneScore");
var Oscore = window.localStorage.getItem("PlayerTwoScore");
var PlayerOne = window.localStorage.getItem("PlayerOne");
var PlayerTwo = window.localStorage.getItem("PlayerTwo");
var winuser =null; 
document.getElementById("playerOne").innerText +=
PlayerOne + " X " + " score = " + Xscore;
document.getElementById("playerTwo").innerText +=
PlayerTwo + " O " + " score = " + Oscore;

let title = document.querySelector(".SwitchTurn");
let turn = "x";
var squares = [];
function show(n1, n2, n3) {
  let winner = squares[n1];
 // debugger;
  title.innerHTML = `${squares[n1]} winner`;
  document.getElementById(`item` + n1).style.background = `#03e9f4`;
  document.getElementById(`item` + n2).style.background = `#03e9f4`;
  document.getElementById(`item` + n3).style.background = `#03e9f4`;
  if (winner == "x") {
    Xscore++;
    document.getElementById("playerOne").innerHTML =
       PlayerOne + " X " + " score is = " + Xscore;

    window.localStorage.setItem("PlayerOneScore", Xscore);
   // window.localStorage.setItem("PlayerTwoScore", Oscore);
   winuser="x";

  } else if (winner == "o") {
    Oscore++;
    document.getElementById("playerTwo").innerHTML =
       PlayerTwo + " O " + "  score = " + Oscore;
  //  window.localStorage.setItem("PlayerOneScore", Xscore);
    window.localStorage.setItem("PlayerTwoScore", Oscore);
    winuser="o";
  } 
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function winner() {
  for (var i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }

  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
     show(1, 2, 3);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(7, 8, 9);
  }

  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(2, 5, 8);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(3, 6, 9);
  }

  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != " "
  ) {
    if (winuser !="o" && winuser!="x")
    show(1, 5, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != " "
  ) {
    if (winuser !="o"&& winuser!="x")
    show(3, 5, 7);
  }
}
// need to switch case
function StartGame(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == " ") {   //to check x 
    element.innerHTML = "x";
    console.log(turn);  //entr x
    turn = "o";
    title.innerHTML = "o";    //entr o
  } else if (turn === "o" && element.innerHTML == " ") {  
    element.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";   //entr x
  }
  //if winner = null 
  winner();  
}
function End(){
  document.getElementById("prim").style.visibility="hidden"  ;   //hidden main square in center of page
  document.getElementById("aaa").style.marginTop="20%"  ;   //show x-O score in center of page
}