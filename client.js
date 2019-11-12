$(document).ready(readyNow);

function readyNow(){
    $(`#redButton`).on('click', addRed)
    $(`#yellowButton`).on('click', addYellow)
    $(`#greenButton`).on('click', addGreen)
    $(`#blueButton`).on('click', addBlue)
}

function addRed(){
    let button = $('<button id="redButton">red</button>');
    $('.container').append(button);
}

function addYellow(){
    let button = $('<button id="yellowButton">red</button>');
    $('.container').append(button);
}    

function addBlue(){
    let button = $('<button id="blueButton">red</button>');
    $('.container').append(button);
}    
    
function addGreen(){
    let button = $('<button id="greenButton">red</button>');
    $('.container').append(button);
}        

let ul = $('<ul id=" ')