const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");

document.querySelector(".btn").addEventListener("click", function() {

  var colorIteration = "#";

  for (i = 0; i<6; i++) {
    var randomNumber = Math.floor(Math.random()*16);
    colorIteration += hex[randomNumber];
    console.log(colorIteration);
  }

  //how to change the text in the container to equal the color value...

  document.body.style.backgroundColor = colorIteration;
  color.textContent = colorIteration;


});
