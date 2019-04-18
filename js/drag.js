let dragItem = document.querySelector("#map");
let deco = document.querySelector("#map-deco");
let MapInfo = document.querySelector("#map-info");
let LeftInfo = document.querySelector("#left-info");
let infoWidth = MapInfo.offsetWidth;
let container = document.querySelector("#map-container");

function containerSize() {
  infoWidth = MapInfo.offsetWidth - 60;
  container.style.width = infoWidth + 'px';
  container.style.height = infoWidth + 'px';
  if (window.innerWidth <= 992) {
    LeftInfo.style.height = (infoWidth - 50) + 'px';
  } else {
    LeftInfo.style.height = infoWidth + 'px';
  } 
}

window.addEventListener('resize', function() {
  containerSize();
});

containerSize();
// let active = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// container.addEventListener("touchstart", dragStart, false);
// container.addEventListener("touchend", dragEnd, false);
// container.addEventListener("touchmove", drag, false);

// container.addEventListener("mousedown", dragStart, false);
// container.addEventListener("mouseup", dragEnd, false);
// container.addEventListener("mousemove", drag, false);

// function dragStart(e) {
//   if (e.type === "touchstart") {
//     initialX = e.touches[0].clientX - xOffset;
//     initialY = e.touches[0].clientY - yOffset;
//   } else {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//   }

//   if (e.target === deco || e.target === dragItem) {
//     active = true;
//   }
// }

// function dragEnd(e) {
//   initialX = currentX;
//   initialY = currentY;

//   active = false;
// }

// function drag(e) {
//   if (active) {
  
//     e.preventDefault();
    
//     if (e.type === "touchmove") {
//       currentX = e.touches[0].clientX - initialX;
//       currentY = e.touches[0].clientY - initialY;
//     } else {
//       currentX = e.clientX - initialX;
//       currentY = e.clientY - initialY;
//     }

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, dragItem);
//   }
// }

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }