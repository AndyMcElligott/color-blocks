/* eslint-disable no-use-before-define */
$(document).ready(readyNow);

function readyNow() {
  $(`.redButton`).on('click', addRed);
  $(`.yellowButton`).on('click', addYellow);
  $(`.greenButton`).on('click', addGreen);
  $(`.blueButton`).on('click', addBlue);
}

function addRed() {
  console.log('in addRed function');
  $('.placeForBox').append(`<div class="redLeader"></div>`);
}

function addYellow() {
  console.log('in addYellow function');
  $('#yellowNum').append(`<button id="yellowFive">red</button>`);
}

function addBlue() {
  console.log('in addBlue function');
  $('#blueNum').append(`<div class="blueBaron"></div>`);
}

function addGreen() {
  console.log('in addGreen function');
  $('#greenNum').append(`<div class="greenGoblin"></div>`);
}
