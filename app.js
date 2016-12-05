'use strict';
var paths = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg', 'bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg', 'pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg', 'usb.gif','water-can.jpg','wine-glass.jpg',];
var items = [];
var displayIndices1 = 0;
var displayIndices2 = 1;
var displayIndices3 = 2;
var totalVoteCount = 0;
//Grabbing the main element where the images are
var elMain = document.getElementById('image-area');
//Grabbing each seperate image element
var elImgSrc = document.getElementsByTagName('img');
var elImgSrc1 = elImgSrc[0];
var elImgSrc2 = elImgSrc[1];
var elImgSrc3 = elImgSrc[2];
var elChart = document.getElementById('chart');
//Constructor function to trun each image into an object
function ItemImage(path) {
  this.name = path.split('.')[0];
  this.filepath = 'img/' + path;
  this.shown = 0;
  this.clicked = 0;
}
//Generate random nu,ber function in order to randomize the images
function generateRandomNumber() {
  return Math.floor(Math.random() * paths.length);
}
function renderChart () {
  var labels = [];
  var data = [];

  for (var i = 0; i < items.length; i++) {
    labels.push(items[i].name);
    data.push(items[i].clicked);
  }

  var chartData = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: data,
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
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero:true
            }
          }
        ]
      }
    }
  };
  new Chart(elChart, chartData);
}
//We put our init function here and I dont' think we have it here so we are going to do this part right here after we find other functions we have completed and put those together.
function initialize () {
  var dataItems = localStorage.getItem('items');

  if (dataItems) {
    var dataTotalVoteCount = parseInt(localStorage.getItem('totalVoteCount'));

    if (dataTotalVoteCount !== 26) {
      totalVoteCount = dataTotalVoteCount;
    }

    items = JSON.parse(dataItems);
    displayIndices1 = localStorage.getItem('displayIndices1');
    displayIndices2 = localStorage.getItem('displayIndices2');
    displayIndices3 = localStorage.getItem('displayIndices3');

  } else {
    for (var i = 0; i < paths.length; i++) {
      items.push(new ItemImage(paths[i]));
    }
  }

  elImgSrc1.src = items[displayIndices1].filepath;
  elImgSrc2.src = items[displayIndices2].filepath;
  elImgSrc3.src = items[displayIndices3].filepath;

  items[displayIndices1].shown += 1;
  items[displayIndices2].shown += 1;
  items[displayIndices3].shown += 1;

}

function changePicture() {
  var randomIndexOne = generateRandomNumber();
  var randomIndexTwo = generateRandomNumber();
  var randomIndexThree = generateRandomNumber();

  while (displayIndices1 === randomIndexOne) {
    randomIndexOne = generateRandomNumber();
  }

  while (displayIndices2 === randomIndexTwo || randomIndexTwo === randomIndexOne) {
    randomIndexTwo = generateRandomNumber();
  }

  while (displayIndices3 === randomIndexThree || randomIndexThree === randomIndexTwo || randomIndexThree === randomIndexOne) {
    randomIndexThree = generateRandomNumber();
  }

  elImgSrc1.src = items[randomIndexOne].filepath;
  elImgSrc2.src = items[randomIndexTwo].filepath;
  elImgSrc3.src = items[randomIndexThree].filepath;

  items[randomIndexOne].shown += 1;
  items[randomIndexTwo].shown += 1;
  items[randomIndexThree].shown += 1;

  displayIndices1 = randomIndexOne;
  displayIndices2 = randomIndexTwo;
  displayIndices3 = randomIndexThree;
}
//Making a function in order to save the number of clicks each image has after 25 clicks onto the local storage
function setLocalStorage () {
  localStorage.setItem('items', JSON.stringify(items));
  localStorage.setItem('displayIndices1', displayIndices1);
  localStorage.setItem('displayIndices2', displayIndices2);
  localStorage.setItem('displayIndices3', displayIndices3);
  localStorage.setItem('totalVoteCount', totalVoteCount);
}
//Making the click handler event
function clickHandler(event) {
  if (totalVoteCount < 26) {
    var clickedImageSrc;

    if(event.target.tagName === 'FIGURE') {
      clickedImageSrc = event.target.children[0].src;
    } else {
      clickedImageSrc = event.target.src;
    }
    var clickedImageIndices =
    paths.indexOf(clickedImageSrc.split('img/')[1]);
    items[clickedImageIndices].clicked += 1;

    totalVoteCount += 1;

    changePicture();
    setLocalStorage();

    if(totalVoteCount === 25) {
      renderChart();
    }
  }
}
initialize();

elMain.addEventListener('click', clickHandler);
