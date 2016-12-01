'use strict';
var paths = ['wine-glass.jpg','bag.jpg','banana.jpg','bathroom.jpg','boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg', 'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg','shark.jpg','sweep.png', 'tauntaun.jpg','unicorn.jpg','water-can.jpg','usb.gif',];
var items = [];

var elMain = document.getElementById('image_area');

for (var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}
elMain.addEventListener('click', clickhandler);

function clickhandler(event) {
  var elPicture = event.target.src;

  tallyClicks(elPicture);
  changePicture();
}
function ItemImage(path) {
  this.path = '../bus-mall/img/' + path;
  this.clicked = 0;
}
function generateRandomNumber() {
  return Math.floor(Math.random() * paths.length);
}
function changePicture() {
  var imageOne = document.getElementById('image_one');
  var imageTwo = document.getElementById('image_two');
  var imageThree = document.getElementById('image_three');
  var randomIndexOne = generateRandomNumber();
  var randomIndexTwo = generateRandomNumber();
  var randomIndexThree = generateRandomNumber();


  while (randomIndexTwo === randomIndexOne) {
    randomIndexTwo = generateRandomNumber();
  }

  while (randomIndexThree === randomIndexTwo || randomIndexThree === randomIndexOne) {
    randomIndexThree = generateRandomNumber();
  }

  imageOne.src = '../bus-mall/img/' + paths[randomIndexOne];
  imageTwo.src = '../bus-mall/img/' + paths[randomIndexTwo];
  imageThree.src = '../bus-mall/img/' + paths[randomIndexThree];
}

function tallyClicks(path) {
  var clickedPath = path.split('img/')[1];
  var itemPath;

  for (var i = 0; i < items.lenth; i++) {
    itemPath = items[i].path.split('img/')[1];
    if (itemPath === clickedPath) {
      items[i].clicked += 1;
    }
  }
}
function saveClickValues() {
  var itemsJSON = JSON.stringify('items');
  local.Storage.setItem('items', itemsJSON);
  localStorage.getItem('items');
  JSON.parse(storedItemsString);
}

//I hope this is right

generateRandomNumber();

saveClickValues();


function renderChart() {
  var dataArray = [];
  for (var i = 0; i < items.length; i++) {
    dataArray.push(items[i].clicked);
  }
  var ctx = document.getElementById('my_chart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: 'Number of Clicks',
        data: dataArray,
        backgroundColor: [
          'rgba(207, 54, 16, 0.2)',
          'rgba(106, 6, 6, 0.2)',
          'rgba(187, 82, 82, 0.2)',
          'rgba(69, 226, 223, 0.2)',
          'rgba(16, 75, 202, 0.2)',
          'rgba(65, 72, 143, 0.2)',
          'rgba(234, 238, 47, 0.2)',
          'rgba(237, 229, 124, 0.2)',
          'rgba(206, 175, 22, 0.2)',
          'rgba(32, 206, 22, 0.2)',
          'rgba(8, 119, 3, 0.2)',
          'rgba(75, 199, 96, 0.2)',
          'rgba(137, 75, 199, 0.2)',
          'rgba(79, 10, 147, 0.2)',
          'rgba(183, 113, 253, 0.2)',
          'rgba(201, 111, 7, 0.2)',
          'rgba(231, 171, 58, 0.2)',
          'rgba(255, 216, 132, 0.2)',
          'rgba(249, 107, 197, 0.2)',
          'rgba(175, 2, 112, 0.2)',
          'rgba(252, 94, 194, 0.2)'
        ],
        borderColor: [
          'rgba(207, 54, 16, 1)',
          'rgba(106, 6, 6, 1)',
          'rgba(187, 82, 82, 1)',
          'rgba(69, 226, 223, 1)',
          'rgba(16, 75, 202, 1)',
          'rgba(65, 72, 143, 1)',
          'rgba(234, 238, 47, 1)',
          'rgba(237, 229, 124, 1)',
          'rgba(206, 175, 22, 1)',
          'rgba(32, 206, 22, 1)',
          'rgba(8, 119, 3, 1)',
          'rgba(75, 199, 96, 1)',
          'rgba(137, 75, 199, 1)',
          'rgba(79, 10, 147, 1)',
          'rgba(183, 113, 253, 1)',
          'rgba(201, 111, 7, 1)',
          'rgba(231, 171, 58, 1)',
          'rgba(255, 216, 132, 1)',
          'rgba(249, 107, 197, 1)',
          'rgba(175, 2, 112, 1)',
          'rgba(252, 94, 194, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
renderChart();
