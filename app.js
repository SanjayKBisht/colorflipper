const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.querySelector(".btn").addEventListener("click", function() {
  var randomNumber = Math.floor(Math.random()*3);
  document.body.style.backgroundColor = colors[randomNumber];

  //how to change the text in the container to equal the color value...

  document.querySelector(".color").textContent = colors[randomNumber];


});
