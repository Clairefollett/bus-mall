'use strict';
var paths = ['wine-glass.jpg','bag.jpg','banana.jpg','bathroom.jpg','boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg.jpg','dog-duck.jpg', 'dragon.jpg','pen.jpg','pet-sweet.jpg', 'scissors.jpg','shark.jpg','sweep.png', 'tauntaun.jpg','unicorn.jpg','water-can.jpg','usb.gif',];
var items = [];
var displayArea = 0;

var displayArea = document.getElementById('image_one');

displayArea.addEventListener('click', clickhandler);

function clickhandler(event) {




function changePicture() {
  var imageOne = document.getElementById('image_one');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  imageOne.src = '../bus-mall/img/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
changePicture();
generateRandomNumber();
