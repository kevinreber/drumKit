//DETECTING BUTTON PRESS
//select number of buttons with .drum class
var numberOfDrumButtons = document.querySelectorAll('.drum');

for (var i = 0; i < numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i].addEventListener('click', handleClick);
}
//anonymous functions have no name

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//DETECTING KEYBOARD PRESS
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  //create switch statement for every button
  //each case will have sound of instrument play()
  switch (key) {
    case 'w':
      //DO STUFF
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      //case ends with break
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log();
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 100);
}
