var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}
function makeSound(key){
  switch (key) {
    case "w":
      var myAudio = new Audio("sound/tom-1.mp3");
      myAudio.play();
      break;
    case "a":
      var myAudio = new Audio("sound/tom-2.mp3");
      myAudio.play();
      break;
    case "s":
      var myAudio = new Audio("sound/tom-3.mp3");
      myAudio.play();
      break;
    case "d":
      var myAudio = new Audio("sound/tom-4.mp3");
      myAudio.play();
      break;
    case "j":
      var myAudio = new Audio("sound/snare.mp3");
      myAudio.play();
      break;
    case "k":
      var myAudio = new Audio("sound/crash.mp3");
      myAudio.play();
      break;
    case "l":
      var myAudio = new Audio("sound/kick-bass.mp3");
      myAudio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

})
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
