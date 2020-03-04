let newYork = document.getElementById("newYork");
let rio = document.getElementById("rio");
let tokyo = document.getElementById("tokyo");
let cities = [newYork, rio, tokyo];
counter = 0;
cities[counter].style.display = "block";

function openContent(number) {
  cities[counter].style.display = "none";
  //when clicking right
  if (number == 1) {
    // if counter < 2 counter goes up
    counter < 2 ? counter++ : (counter = 0);
    //when clicking left
  } else {
    // if counter > 0  counter goes dow
    counter > 0 ? counter-- : (counter = 2);
  }
  cities[counter].style.display = "block";
}
