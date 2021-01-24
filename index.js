for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
      var buttonPressed = this.innerHTML[0];
      buttonPressed = buttonPressed.toLowerCase();
      sound(buttonPressed);
      animation(buttonPressed);
    });
}

document.addEventListener("keypress", function(event) {
  var keyboardbuttonPressed = event.key;
  keyboardbuttonPressed = keyboardbuttonPressed.toLowerCase();

  sound(keyboardbuttonPressed);

  animation(keyboardbuttonPressed);
});

function sound(key) {
  switch (key) {
    case "a":
      var element = document.querySelector(".a");
      element.classList.add("pressed");
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "s":
      var element = document.querySelector(".s");
      element.classList.add("pressed");
      var audio = new Audio("sounds/cymbal1.mp3");
      audio.play();
      break;

    case "d":
      var element = document.querySelector(".d");
      element.classList.add("pressed");
      var audio = new Audio("sounds/cymbal2.mp3");
      audio.play();
      break;

    case "f":
      var element = document.querySelector(".f");
      element.classList.add("pressed");
      var audio = new Audio("sounds/hi-hat.mp3");
      audio.play();
      break;

    case "g":
      var element = document.querySelector(".g");
      element.classList.add("pressed");
      var audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;

    case "h":
      var element = document.querySelector(".h");
      element.classList.add("pressed");
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "j":
      var element = document.querySelector(".j");
      element.classList.add("pressed");
      var audio = new Audio("sounds/tom1.mp3");
      audio.play();
      break;

    case "k":
      var element = document.querySelector(".k");
      element.classList.add("pressed");
      var audio = new Audio("sounds/tom2.mp3");
      audio.play();
      break;

    case "l":
      var element = document.querySelector(".l");
      element.classList.add("pressed");
      var audio = new Audio("sounds/tom3.mp3");
      audio.play();
      break;

    default:
  }
}

function animation(key) {
  var element = document.querySelector("." + key);
  element.classList.add("pressed");
  element.classList.remove('unpressed');
  setTimeout(function() {
    element.classList.remove('pressed');
    element.classList.add("unpressed");
  }, 100);
}
