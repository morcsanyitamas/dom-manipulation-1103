function addPressed(key){
    key.classList.add('pressed');
}

function removePressed(key){
    key.classList.remove('pressed');
}


function getPressedKey(keyCode){
    return document.querySelector(keyCode);
}


// document.addEventListener('keyup', function(event){
//     const pressedKey = getPressedKey(`#${event.code}`);
//     console.log(pressedKey.classList);
//     if(pressedKey.classList.contains('pressed')){
//         removePressed(pressedKey);
//     }
// });

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const pressedKey = getPressedKey(`#${event.code}`);
  

  addPressed(pressedKey);
  
//   setTimeout(function(){
//     removePressed(pressedKey);
//   }, 2000);
  
    setTimeout(() => {
        removePressed(pressedKey);
    }, 2000);

//   const keys = document.querySelectorAll(".key__button");
//   const arrows = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
//   const pressedIndex = arrows.indexOf(event.code);
//   addPressed(keys[pressedIndex]);
  
//   switch (event.code) {
//     case "ArrowUp":
//         addPressed(keys[2]);
//       break;
//     case "ArrowDown":
//         addPressed(keys[3]);
//       break;
//     case "ArrowLeft":
//         addPressed(keys[0]);
//       break;
//     case "ArrowRight":
//         addPressed(keys[1]);
//       break;
//   }
});
