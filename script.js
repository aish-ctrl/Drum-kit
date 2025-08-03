const drumLength=document.querySelectorAll(".drum").length;
console.log(drumLength);

for ( let i=0; i<drumLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(e){
makeNoise(this.innerHTML);

  });
}

function makeNoise(key){
  switch(key){
    case "w": 
     const Tom1= new Audio("sounds/tabla-sound-187218.mp3")
     Tom1.play();
     break;
     case "a": 
     const Tom2= new Audio("sounds/tabla-sound-187218.mp3")
     Tom2.play();
     break;
     case "s": 
     const Tom3= new Audio("sounds/tabla-sound-187218.mp3")
     Tom3.play();
     break;
     case "d": 
     const Tom4= new Audio("sounds/tabla-sound-187218.mp3")
     Tom4.play();
     break;
     case "j": 
     const Tom5= new Audio("sounds/tabla-sound-187218.mp3")
     Tom5.play();
     break;
     case "k": 
     const Tom6= new Audio("sounds/tabla-sound-187218.mp3")
     Tom6.play();
     break;
     case "l": 
     const Tom7= new Audio("sounds/tabla-sound-187218.mp3")
     Tom7.play();
     break;
}
}

