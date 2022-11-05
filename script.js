var arr1 = location.search.split("&");
var arr2 = arr1[1].split("=");
var PlayerTwo = arr2[1];
var arr3 = arr1[0].split("=");
var PlayerOne = arr3[1];
console.log(PlayerOne, PlayerTwo);

window.localStorage.clear();
window.localStorage.setItem("PlayerOne", JSON.stringify(PlayerOne));
window.localStorage.setItem("PlayerTwo", JSON.stringify(PlayerTwo));
window.localStorage.setItem("PlayerOneScore", 0);
window.localStorage.setItem("PlayerTwoScore", 0);
function funOne() {
  window.open("./GameIndex.html");
}
