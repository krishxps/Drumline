var numberOfTime =  document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfTime ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       this.style.color = "red"
    });
}
function playSound(sound){
    var audio = new Audio("sounds/"+sound+".mp3");
    audio.play();
}
  